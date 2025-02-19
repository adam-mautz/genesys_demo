// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useMemo, useRef } from 'react';
import AsyncStore from '../area-chart/model/async-store';
import { useStableEventHandler } from '../internal/hooks/use-stable-event-handler';
import clsx from 'clsx';
import { useResizeObserver } from '../internal/hooks/container-queries';
export const selectionColumnId = Symbol('selection-column-id');
// We allow the table to have a minimum of 148px of available space besides the sum of the widths of the sticky columns
// This value is an UX recommendation and is approximately 1/3 of our smallest breakpoint (465px)
const MINIMUM_SCROLLABLE_SPACE = 148;
export function useStickyColumns({ visibleColumns, stickyColumnsFirst, stickyColumnsLast, }) {
    const store = useMemo(() => new StickyColumnsStore(), []);
    const wrapperRef = useRef(null);
    const tableRef = useRef(null);
    const cellsRef = useRef({});
    const hasStickyColumns = stickyColumnsFirst + stickyColumnsLast > 0;
    const updateStickyStyles = useStableEventHandler(() => {
        if (wrapperRef.current && tableRef.current) {
            store.updateCellStyles({
                wrapper: wrapperRef.current,
                table: tableRef.current,
                cells: cellsRef.current,
                visibleColumns,
                stickyColumnsFirst,
                stickyColumnsLast,
            });
        }
    });
    useResizeObserver(wrapperRef, updateStickyStyles);
    useResizeObserver(tableRef, updateStickyStyles);
    useEffect(() => {
        if (wrapperRef.current && tableRef.current) {
            store.updateCellStyles({
                wrapper: wrapperRef.current,
                table: tableRef.current,
                cells: cellsRef.current,
                visibleColumns,
                stickyColumnsFirst,
                stickyColumnsLast,
            });
        }
    }, [store, stickyColumnsFirst, stickyColumnsLast, visibleColumns]);
    // Update wrapper styles imperatively to avoid unnecessary re-renders.
    useEffect(() => {
        if (!hasStickyColumns) {
            return;
        }
        const selector = (state) => state.scrollPadding;
        const updateWrapperStyles = (state) => {
            if (wrapperRef.current) {
                wrapperRef.current.style.scrollPaddingLeft = state.left + 'px';
                wrapperRef.current.style.scrollPaddingRight = state.right + 'px';
            }
        };
        const unsubscribe = store.subscribe(selector, newState => updateWrapperStyles(selector(newState)));
        return unsubscribe;
    }, [store, hasStickyColumns]);
    const setWrapper = useCallback((node) => {
        if (wrapperRef.current) {
            wrapperRef.current.removeEventListener('scroll', updateStickyStyles);
        }
        if (node && hasStickyColumns) {
            node.addEventListener('scroll', updateStickyStyles);
        }
        wrapperRef.current = node;
    }, [hasStickyColumns, updateStickyStyles]);
    const setTable = useCallback((node) => {
        tableRef.current = node;
    }, []);
    const setCell = useCallback((columnId, node) => {
        if (node) {
            cellsRef.current[columnId] = node;
        }
        else {
            delete cellsRef.current[columnId];
        }
    }, []);
    return {
        isEnabled: hasStickyColumns,
        store,
        style: {
            // Provide wrapper styles as props so that a re-render won't cause invalidation.
            wrapper: hasStickyColumns
                ? {
                    scrollPaddingLeft: store.get().scrollPadding.left + 'px',
                    scrollPaddingRight: store.get().scrollPadding.right + 'px',
                }
                : undefined,
        },
        refs: { wrapper: setWrapper, table: setTable, cell: setCell },
    };
}
export function useStickyCellStyles({ stickyColumns, columnId, getClassName, }) {
    var _a;
    const cellRef = useRef(null);
    const setCell = stickyColumns.refs.cell;
    const refCallback = useCallback(node => {
        cellRef.current = node;
        setCell(columnId, node);
    }, [columnId, setCell]);
    // Update cell styles imperatively to avoid unnecessary re-renders.
    useEffect(() => {
        if (!stickyColumns.isEnabled) {
            return;
        }
        const selector = (state) => state.cellState[columnId];
        const updateCellStyles = (state) => {
            const className = getClassName(state);
            const cellElement = cellRef.current;
            if (cellElement) {
                Object.keys(className).forEach(key => {
                    if (className[key]) {
                        cellElement.classList.add(key);
                    }
                    else {
                        cellElement.classList.remove(key);
                    }
                });
                cellElement.style.left = (state === null || state === void 0 ? void 0 : state.offset.left) !== undefined ? `${state === null || state === void 0 ? void 0 : state.offset.left}px` : '';
                cellElement.style.right = (state === null || state === void 0 ? void 0 : state.offset.right) !== undefined ? `${state === null || state === void 0 ? void 0 : state.offset.right}px` : '';
            }
        };
        const unsubscribe = stickyColumns.store.subscribe(selector, newState => updateCellStyles(selector(newState)));
        return unsubscribe;
    }, 
    // getClassName is expected to be pure
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stickyColumns.store, stickyColumns.isEnabled, columnId]);
    // Provide cell styles as props so that a re-render won't cause invalidation.
    const cellStyles = stickyColumns.store.get().cellState[columnId];
    return {
        ref: refCallback,
        className: cellStyles ? clsx(getClassName(cellStyles)) : undefined,
        style: (_a = cellStyles === null || cellStyles === void 0 ? void 0 : cellStyles.offset) !== null && _a !== void 0 ? _a : undefined,
    };
}
export default class StickyColumnsStore extends AsyncStore {
    constructor() {
        super({ cellState: {}, scrollPadding: { left: 0, right: 0 } });
        this.cellOffsets = new Map();
        this.stickyWidthLeft = 0;
        this.stickyWidthRight = 0;
        this.isStuckToTheLeft = false;
        this.isStuckToTheRight = false;
        this.generateCellStyles = (props) => {
            const isEnabled = this.isEnabled(props);
            const tablePaddingLeft = parseFloat(getComputedStyle(props.table).paddingLeft) || 0;
            const lastLeftStickyColumnIndex = props.stickyColumnsFirst - 1;
            const lastRightStickyColumnIndex = props.visibleColumns.length - props.stickyColumnsLast;
            return props.visibleColumns.reduce((acc, columnId, index) => {
                var _a, _b, _c, _d;
                let stickySide = 'non-sticky';
                if (index < props.stickyColumnsFirst) {
                    stickySide = 'left';
                }
                else if (index >= props.visibleColumns.length - props.stickyColumnsLast) {
                    stickySide = 'right';
                }
                if (!isEnabled || stickySide === 'non-sticky') {
                    acc[columnId] = null;
                    return acc;
                }
                // Determine the offset of the sticky column using the `cellOffsets` state object
                const isFirstColumn = index === 0;
                const stickyColumnOffsetLeft = (_b = (_a = this.cellOffsets.get(columnId)) === null || _a === void 0 ? void 0 : _a.first) !== null && _b !== void 0 ? _b : 0;
                const stickyColumnOffsetRight = (_d = (_c = this.cellOffsets.get(columnId)) === null || _c === void 0 ? void 0 : _c.last) !== null && _d !== void 0 ? _d : 0;
                const cellStyle = {
                    left: stickySide === 'left' ? stickyColumnOffsetLeft : undefined,
                    right: stickySide === 'right' ? stickyColumnOffsetRight : undefined,
                };
                acc[columnId] = {
                    padLeft: isFirstColumn && tablePaddingLeft !== 0 && this.isStuckToTheLeft,
                    lastLeft: this.isStuckToTheLeft && lastLeftStickyColumnIndex === index,
                    lastRight: this.isStuckToTheRight && lastRightStickyColumnIndex === index,
                    offset: cellStyle,
                };
                return acc;
            }, {});
        };
        this.updateCellOffsets = (props) => {
            var _a, _b, _c, _d, _e, _f;
            const firstColumnsWidths = [];
            for (let i = 0; i < props.visibleColumns.length; i++) {
                const element = props.cells[props.visibleColumns[i]];
                const cellWidth = (_a = element.getBoundingClientRect().width) !== null && _a !== void 0 ? _a : 0;
                firstColumnsWidths[i] = ((_b = firstColumnsWidths[i - 1]) !== null && _b !== void 0 ? _b : 0) + cellWidth;
            }
            const lastColumnsWidths = [];
            for (let i = props.visibleColumns.length - 1; i >= 0; i--) {
                const element = props.cells[props.visibleColumns[i]];
                const cellWidth = (_c = element.getBoundingClientRect().width) !== null && _c !== void 0 ? _c : 0;
                lastColumnsWidths[i] = ((_d = lastColumnsWidths[i + 1]) !== null && _d !== void 0 ? _d : 0) + cellWidth;
            }
            lastColumnsWidths.reverse();
            this.stickyWidthLeft = (_e = firstColumnsWidths[props.stickyColumnsFirst - 1]) !== null && _e !== void 0 ? _e : 0;
            this.stickyWidthRight = (_f = lastColumnsWidths[props.stickyColumnsLast - 1]) !== null && _f !== void 0 ? _f : 0;
            this.cellOffsets = props.visibleColumns.reduce((map, columnId, columnIndex) => {
                var _a, _b;
                return map.set(columnId, {
                    first: (_a = firstColumnsWidths[columnIndex - 1]) !== null && _a !== void 0 ? _a : 0,
                    last: (_b = lastColumnsWidths[props.visibleColumns.length - 1 - columnIndex - 1]) !== null && _b !== void 0 ? _b : 0,
                });
            }, new Map());
        };
        this.isEnabled = (props) => {
            const noStickyColumns = props.stickyColumnsFirst + props.stickyColumnsLast === 0;
            if (noStickyColumns) {
                return false;
            }
            const wrapperWidth = props.wrapper.getBoundingClientRect().width;
            const tableWidth = props.table.getBoundingClientRect().width;
            const isWrapperScrollable = tableWidth > wrapperWidth;
            if (!isWrapperScrollable) {
                return false;
            }
            const totalStickySpace = this.stickyWidthLeft + this.stickyWidthRight;
            const tablePaddingLeft = parseFloat(getComputedStyle(props.table).paddingLeft) || 0;
            const tablePaddingRight = parseFloat(getComputedStyle(props.table).paddingRight) || 0;
            const hasEnoughScrollableSpace = totalStickySpace + MINIMUM_SCROLLABLE_SPACE + tablePaddingLeft + tablePaddingRight < wrapperWidth;
            if (!hasEnoughScrollableSpace) {
                return false;
            }
            return true;
        };
    }
    updateCellStyles(props) {
        const hasStickyColumns = props.stickyColumnsFirst + props.stickyColumnsLast > 0;
        const hadStickyColumns = this.cellOffsets.size > 0;
        if (hasStickyColumns || hadStickyColumns) {
            this.updateScroll(props);
            this.updateCellOffsets(props);
            this.set(() => ({
                cellState: this.generateCellStyles(props),
                scrollPadding: { left: this.stickyWidthLeft, right: this.stickyWidthRight },
            }));
        }
    }
    updateScroll(props) {
        const wrapperScrollLeft = props.wrapper.scrollLeft;
        const wrapperScrollWidth = props.wrapper.scrollWidth;
        const wrapperClientWidth = props.wrapper.clientWidth;
        const tablePaddingLeft = parseFloat(getComputedStyle(props.table).paddingLeft) || 0;
        const tablePaddingRight = parseFloat(getComputedStyle(props.table).paddingRight) || 0;
        this.isStuckToTheLeft = wrapperScrollLeft > tablePaddingLeft;
        // Math.ceil() is used here to address an edge-case in certain browsers, where they return non-integer wrapperScrollLeft values
        // which are lower than expected (sub-pixel difference), resulting in the table always being in the "stuck to the right" state
        this.isStuckToTheRight = Math.ceil(wrapperScrollLeft) < wrapperScrollWidth - wrapperClientWidth - tablePaddingRight;
    }
}
//# sourceMappingURL=use-sticky-columns.js.map