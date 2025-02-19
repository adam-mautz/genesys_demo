// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { getColumnKey } from './utils';
import headerCellStyles from './header-cell/styles.css.js';
import { warnOnce } from '../internal/logging';
export const DEFAULT_WIDTH = 120;
const SELECTION_CELL_WIDTH = 54;
function checkProperty(column, name) {
    const value = column[name];
    if (typeof value !== 'number' && typeof value !== 'undefined') {
        warnOnce('Table', `resizableColumns feature requires ${name} property to be a number, got ${value}. The component may work incorrectly.`);
    }
}
export function checkColumnWidths(columnDefinitions) {
    for (const column of columnDefinitions) {
        checkProperty(column, 'minWidth');
        checkProperty(column, 'width');
    }
}
function readWidths(headerEl, columnDefinitions, hasSelection) {
    const result = {};
    for (let index = 0; index < columnDefinitions.length; index++) {
        const column = columnDefinitions[index];
        const id = getColumnKey(columnDefinitions[index], index);
        let width = column.width || 0;
        const minWidth = column.minWidth || width || DEFAULT_WIDTH;
        if (!width && // read width from the DOM if it is missing in the config
            index !== columnDefinitions.length - 1 // skip reading for the last column, because it expands to fully fit the container
        ) {
            const colIndex = hasSelection ? index + 2 : index + 1;
            const colEl = headerEl.querySelector(`.${headerCellStyles['header-cell']}:nth-child(${colIndex})`);
            width = colEl.getBoundingClientRect().width;
        }
        result[id] = Math.max(width, minWidth);
    }
    return result;
}
function updateWidths(columnDefinitions, oldWidths, newWidth, colIndex) {
    const definition = columnDefinitions[colIndex];
    const id = getColumnKey(definition, colIndex);
    const minWidth = typeof definition.minWidth === 'number' ? definition.minWidth : DEFAULT_WIDTH;
    newWidth = Math.max(newWidth, minWidth);
    if (oldWidths[id] === newWidth) {
        return oldWidths;
    }
    return Object.assign(Object.assign({}, oldWidths), { [id]: newWidth });
}
const WidthsContext = createContext({
    totalWidth: 0,
    columnWidths: {},
    updateColumn: () => { },
});
export function ColumnWidthsProvider({ tableRef, visibleColumnDefinitions, resizableColumns, hasSelection, children, }) {
    const visibleColumns = useRef(null);
    const [columnWidths, setColumnWidths] = useState({});
    useEffect(() => {
        if (!resizableColumns) {
            return;
        }
        const lastVisible = visibleColumns.current;
        if (lastVisible) {
            for (let index = 0; index < visibleColumnDefinitions.length; index++) {
                const column = visibleColumnDefinitions[index];
                const id = getColumnKey(column, index);
                if (!columnWidths[id] && lastVisible.indexOf(column.id) === -1) {
                    setColumnWidths(columnWidths => (Object.assign(Object.assign({}, columnWidths), { [id]: column.width || DEFAULT_WIDTH })));
                }
            }
        }
        visibleColumns.current = visibleColumnDefinitions.map(column => column.id);
    }, [columnWidths, resizableColumns, visibleColumnDefinitions]);
    useEffect(() => {
        if (!resizableColumns) {
            return;
        }
        setColumnWidths(() => readWidths(tableRef.current, visibleColumnDefinitions, hasSelection));
        // This code is intended to run only at the first render and should not re-run when table props change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function updateColumn(colIndex, newWidth) {
        setColumnWidths(columnWidths => updateWidths(visibleColumnDefinitions, columnWidths, newWidth, colIndex));
    }
    let totalWidth = visibleColumnDefinitions.reduce((total, column, index) => total + (columnWidths[getColumnKey(column, index)] || DEFAULT_WIDTH), 0);
    if (hasSelection) {
        totalWidth += SELECTION_CELL_WIDTH;
    }
    return React.createElement(WidthsContext.Provider, { value: { columnWidths, totalWidth, updateColumn } }, children);
}
export function useColumnWidths() {
    return useContext(WidthsContext);
}
//# sourceMappingURL=use-column-widths.js.map