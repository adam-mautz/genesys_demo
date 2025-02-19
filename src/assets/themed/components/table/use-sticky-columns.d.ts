import React from 'react';
import AsyncStore from '../area-chart/model/async-store';
export declare const selectionColumnId: unique symbol;
type ColumnId = string | symbol;
interface StickyColumnsProps {
    visibleColumns: readonly ColumnId[];
    stickyColumnsFirst: number;
    stickyColumnsLast: number;
}
export interface StickyColumnsModel {
    isEnabled: boolean;
    store: StickyColumnsStore;
    style: {
        wrapper?: React.CSSProperties;
    };
    refs: {
        table: React.RefCallback<HTMLElement>;
        wrapper: React.RefCallback<HTMLElement>;
        cell: (columnId: ColumnId, node: null | HTMLElement) => void;
    };
}
export interface StickyColumnsState {
    cellState: Record<ColumnId, null | StickyColumnsCellState>;
    scrollPadding: ScrollPadding;
}
export interface StickyColumnsCellState {
    padLeft: boolean;
    lastLeft: boolean;
    lastRight: boolean;
    offset: {
        left?: number;
        right?: number;
    };
}
export interface ScrollPadding {
    left: number;
    right: number;
}
export declare function useStickyColumns({ visibleColumns, stickyColumnsFirst, stickyColumnsLast, }: StickyColumnsProps): StickyColumnsModel;
interface UseStickyCellStylesProps {
    stickyColumns: StickyColumnsModel;
    columnId: ColumnId;
    getClassName: (styles: null | StickyColumnsCellState) => Record<string, boolean>;
}
interface StickyCellStyles {
    ref: React.RefCallback<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
}
export declare function useStickyCellStyles({ stickyColumns, columnId, getClassName, }: UseStickyCellStylesProps): StickyCellStyles;
interface UpdateCellStylesProps {
    wrapper: HTMLElement;
    table: HTMLElement;
    cells: Record<ColumnId, HTMLElement>;
    visibleColumns: readonly ColumnId[];
    stickyColumnsFirst: number;
    stickyColumnsLast: number;
}
export default class StickyColumnsStore extends AsyncStore<StickyColumnsState> {
    private cellOffsets;
    private stickyWidthLeft;
    private stickyWidthRight;
    private isStuckToTheLeft;
    private isStuckToTheRight;
    constructor();
    updateCellStyles(props: UpdateCellStylesProps): void;
    private updateScroll;
    private generateCellStyles;
    private updateCellOffsets;
    private isEnabled;
}
export {};
//# sourceMappingURL=use-sticky-columns.d.ts.map