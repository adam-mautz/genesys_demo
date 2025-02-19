// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getColumnAriaLabel, compareDates } from './table-utils';
import { formatSize, formatDefault } from './column-formats';
import { BasicS3Table, getSharedI18Strings } from './basic-table';
import { joinObjectPath } from '../utils';
export function VersionsTable({ forwardFocusRef, pathSegments, i18nStrings, isVisualRefresh, isItemDisabled, fetchData, visibleColumns, onSelect, }) {
    return (React.createElement(BasicS3Table, { forwardFocusRef: forwardFocusRef, trackBy: "VersionId", fetchData: () => {
            const [bucketName, ...rest] = pathSegments;
            return fetchData(bucketName, joinObjectPath(rest));
        }, i18nStrings: Object.assign(Object.assign({}, getSharedI18Strings(i18nStrings)), { header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersions, filteringAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelFiltering(i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersions), filteringPlaceholder: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsSearchPlaceholder, loadingText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsLoading, emptyText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.selectionVersionsNoItems, selectionLabels: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsVersionsSelection }), isVisualRefresh: isVisualRefresh, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled, columnDefinitions: [
            {
                id: 'ID',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionID,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionID),
                sortingField: 'VersionId',
                cell: item => item.VersionId,
                minWidth: '250px',
            },
            {
                id: 'LastModified',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionLastModified,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionLastModified),
                sortingComparator: (a, b) => compareDates(a.LastModified, b.LastModified),
                cell: item => formatDefault(item.LastModified),
            },
            {
                id: 'Size',
                header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionSize,
                ariaLabel: getColumnAriaLabel(i18nStrings, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.columnVersionSize),
                sortingField: 'Size',
                cell: item => formatSize(item.Size),
            },
        ], onSelect: item => { var _a; return onSelect((_a = item === null || item === void 0 ? void 0 : item.VersionId) !== null && _a !== void 0 ? _a : ''); } }));
}
//# sourceMappingURL=versions-table.js.map