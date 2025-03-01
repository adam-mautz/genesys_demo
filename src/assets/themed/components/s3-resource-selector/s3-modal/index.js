// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useReducer, useRef } from 'react';
import InternalBreadcrumbGroup from '../../breadcrumb-group/internal';
import { InternalButton } from '../../button/internal';
import InternalModal from '../../modal/internal';
import InternalSpaceBetween from '../../space-between/internal';
import { useEffectOnUpdate } from '../../internal/hooks/use-effect-on-update';
import { useVisualRefresh } from '../../internal/hooks/use-visual-mode';
import { BucketsTable } from './buckets-table';
import { ObjectsTable } from './objects-table';
import { VersionsTable } from './versions-table';
import styles from './styles.css.js';
import { joinObjectPath } from '../utils';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function assertNever(_value) {
    return null;
}
const initialBrowseState = {
    selectedItem: null,
    currentView: 'buckets',
    breadcrumbs: [],
};
function s3BrowseReducer(state, action) {
    switch (action.type) {
        case 'browse-buckets':
            return initialBrowseState;
        case 'browse-objects':
            return {
                selectedItem: null,
                currentView: 'objects',
                breadcrumbs: action.breadcrumbs,
            };
        case 'browse-versions':
            return {
                selectedItem: null,
                currentView: 'versions',
                breadcrumbs: action.breadcrumbs,
            };
        case 'select-item':
            return Object.assign(Object.assign({}, state), { selectedItem: action.item });
        default:
            assertNever(action);
    }
    return state;
}
function createResourceInfo({ currentView, breadcrumbs, selectedItem }) {
    const prefix = 's3://';
    if (currentView === 'versions') {
        return { uri: prefix + joinObjectPath(breadcrumbs), versionId: selectedItem !== null && selectedItem !== void 0 ? selectedItem : undefined };
    }
    return { uri: prefix + joinObjectPath([...breadcrumbs, selectedItem]) };
}
export function S3Modal({ i18nStrings, alert, selectableItemsTypes, fetchBuckets, bucketsVisibleColumns, bucketsIsItemDisabled, fetchObjects, objectsVisibleColumns, objectsIsItemDisabled, fetchVersions, versionsVisibleColumns, versionsIsItemDisabled, onSubmit, onDismiss, }) {
    var _a, _b;
    const [{ currentView, breadcrumbs, selectedItem }, dispatch] = useReducer(s3BrowseReducer, initialBrowseState);
    const forwardFocusRef = useRef(null);
    const isVisualRefresh = useVisualRefresh();
    useEffectOnUpdate(() => {
        var _a;
        (_a = forwardFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [breadcrumbs]);
    return (React.createElement("div", null,
        React.createElement(InternalModal, { visible: true, size: "max", closeAriaLabel: (_a = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelModalDismiss) !== null && _a !== void 0 ? _a : '', onDismiss: onDismiss, header: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.modalTitle, footer: React.createElement(InternalSpaceBetween, { className: styles['modal-actions'], size: "xs", direction: "horizontal" },
                React.createElement(InternalButton, { variant: "link", formAction: "none", onClick: onDismiss }, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.modalCancelButton),
                React.createElement(InternalButton, { variant: "primary", className: styles['submit-button'], disabled: !selectedItem, formAction: "none", onClick: () => onSubmit(createResourceInfo({ currentView, breadcrumbs, selectedItem })) }, i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.modalSubmitButton)) },
            React.createElement(InternalSpaceBetween, { size: isVisualRefresh ? 'xxs' : 'xs' },
                React.createElement(InternalBreadcrumbGroup, { ariaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelBreadcrumbs, expandAriaLabel: "Show path", onFollow: event => {
                        event.preventDefault();
                        event.detail.item.meta.onClick();
                    }, items: [
                        {
                            text: (_b = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.modalBreadcrumbRootItem) !== null && _b !== void 0 ? _b : '',
                            href: '',
                            meta: { onClick: () => dispatch({ type: 'browse-buckets' }) },
                        },
                        ...breadcrumbs.map((segment, index) => ({
                            text: segment,
                            href: '',
                            meta: {
                                onClick: () => dispatch({
                                    type: 'browse-objects',
                                    breadcrumbs: breadcrumbs.slice(0, index + 1),
                                }),
                            },
                        })),
                    ] }),
                alert,
                currentView === 'buckets' ? (React.createElement(BucketsTable, { forwardFocusRef: forwardFocusRef, fetchData: fetchBuckets, visibleColumns: bucketsVisibleColumns, isItemDisabled: bucketsIsItemDisabled, selectableItemsTypes: selectableItemsTypes, i18nStrings: i18nStrings, isVisualRefresh: isVisualRefresh, onDrilldown: path => dispatch({
                        type: 'browse-objects',
                        breadcrumbs: [path],
                    }), onSelect: item => dispatch({ type: 'select-item', item }) })) : currentView === 'objects' ? (React.createElement(ObjectsTable, { forwardFocusRef: forwardFocusRef, pathSegments: breadcrumbs, fetchData: fetchObjects, visibleColumns: objectsVisibleColumns, isItemDisabled: objectsIsItemDisabled, selectableItemsTypes: selectableItemsTypes, i18nStrings: i18nStrings, isVisualRefresh: isVisualRefresh, onDrilldown: item => {
                        dispatch({
                            type: item.IsFolder ? 'browse-objects' : 'browse-versions',
                            breadcrumbs: [...breadcrumbs, item.Key],
                        });
                    }, onSelect: item => dispatch({ type: 'select-item', item }) })) : currentView === 'versions' ? (React.createElement(VersionsTable, { forwardFocusRef: forwardFocusRef, pathSegments: breadcrumbs, fetchData: fetchVersions, visibleColumns: versionsVisibleColumns, isItemDisabled: versionsIsItemDisabled, i18nStrings: i18nStrings, isVisualRefresh: isVisualRefresh, onSelect: item => dispatch({ type: 'select-item', item }) })) : (assertNever(currentView))))));
}
//# sourceMappingURL=index.js.map