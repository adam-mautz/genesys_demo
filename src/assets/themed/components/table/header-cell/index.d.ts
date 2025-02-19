import React from 'react';
import { TableProps } from '../interfaces';
import { InteractiveComponent } from '../thead';
interface TableHeaderCellProps<ItemType> {
    className?: string;
    style?: React.CSSProperties;
    tabIndex: number;
    column: TableProps.ColumnDefinition<ItemType>;
    activeSortingColumn?: TableProps.SortingColumn<ItemType>;
    sortingDescending?: boolean;
    sortingDisabled?: boolean;
    wrapLines?: boolean;
    hidden?: boolean;
    onClick(detail: TableProps.SortingState<any>): void;
    onResizeFinish: () => void;
    colIndex: number;
    updateColumn: (colIndex: number, newWidth: number) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    resizableColumns?: boolean;
    isEditable?: boolean;
    focusedComponent?: InteractiveComponent | null;
    onFocusedComponentChange?: (element: InteractiveComponent | null) => void;
}
export declare function TableHeaderCell<ItemType>({ className, style, tabIndex, column, activeSortingColumn, sortingDescending, sortingDisabled, wrapLines, focusedComponent, onFocusedComponentChange, hidden, onClick, colIndex, updateColumn, resizableColumns, onResizeFinish, isEditable, }: TableHeaderCellProps<ItemType>): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map