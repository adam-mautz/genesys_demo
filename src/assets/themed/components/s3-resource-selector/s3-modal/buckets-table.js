// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalLink from '../../link/internal';
import { compareDates, getColumnAriaLabel, includes } from './table-utils';
import { formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
export function BucketsTable({ forwardFocusRef, i18nStrings, isVisualRefresh, isItemDisabled, selectableItemsTypes, fetchData, visibleColumns, onDrilldown, onSelect, }) {
    return (React.createElement(BasicS3Table, { forwardFocusRef: forwardFocusRef, trackBy: "Name", fetchData: fetchData, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled || (() => !includes(selectableItemsTypes, 'buckets')), i18nStrings: Object.assign(Object.assign({}, getSharedI18Strings(i18nStrings)), { header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBuckets, loadingText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBucketsLoading, filteringAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering(i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBuckets), filteringPlaceholder: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBucketsSearchPlaceholder, emptyText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionBucketsNoItems, selectionLabels: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsBucketsSelection }), isVisualRefresh: isVisualRefresh, columnDefinitions: [
            {
                id: 'Name',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketName,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketName),
                sortingField: 'Name',
                cell: item => {
                    const isClickable = includes(selectableItemsTypes, 'objects') || includes(selectableItemsTypes, 'versions');
                    return isClickable ? (React.createElement(InternalLink, { onFollow: () => item.Name && onDrilldown(item.Name), variant: "link" }, item.Name)) : (item.Name);
                },
                minWidth: '250px',
            },
            {
                id: 'CreationDate',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketCreationDate,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketCreationDate),
                sortingComparator: (a, b) => compareDates(a.CreationDate, b.CreationDate),
                cell: item => formatDefault(item.CreationDate),
            },
            {
                id: 'Region',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketRegion,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnBucketRegion),
                sortingField: 'Region',
                cell: item => formatDefault(item.Region),
                minWidth: '150px',
            },
        ], onSelect: item => { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.Name) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=buckets-table.js.map