// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useState, useRef } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { InternalButton } from '../../button/internal';
import InternalHeader from '../../header/internal';
import InternalPagination from '../../pagination/internal';
import InternalTable from '../../table/internal';
import InternalTextFilter from '../../text-filter/internal';
import useForwardFocus from '../../internal/hooks/forward-focus';
import { useStableEventHandler } from '../../internal/hooks/use-stable-event-handler';
import { EmptyState } from './empty-state';
export function getSharedI18Strings(i18nStrings) {
    return {
        filteringCounterText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filteringCounterText,
        labelRefresh: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelRefresh,
        labelsPagination: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelsPagination,
        noMatchTitle: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filteringNoMatches,
        noMatchSubtitle: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filteringCantFindMatch,
        clearFilterButtonText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.clearFilterButtonText,
    };
}
export function BasicS3Table({ forwardFocusRef, columnDefinitions, fetchData, trackBy, i18nStrings = {}, isVisualRefresh, visibleColumns, isItemDisabled, onSelect, }) {
    var _a;
    const [loading, setLoading] = useState(false);
    const [allItems, setAllItems] = useState([]);
    const textFilterRef = useRef(null);
    const onSelectLatest = useStableEventHandler(onSelect);
    function loadData() {
        setLoading(true);
        fetchData()
            .then(items => {
            setAllItems(items);
            setLoading(false);
        })
            .catch(() => {
            // error handling should happen on the customer side, outside of this component
            setLoading(false);
        });
    }
    useEffect(() => {
        loadData();
        // Data loading is only happening on initial render, or via refresh button
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useForwardFocus(forwardFocusRef, textFilterRef);
    const { items, filteredItemsCount, collectionProps, filterProps, paginationProps, actions } = useCollection(allItems, {
        selection: { trackBy },
        filtering: {
            empty: i18nStrings.emptyText,
            noMatch: (React.createElement(EmptyState, { title: i18nStrings.noMatchTitle, subtitle: i18nStrings.noMatchSubtitle, action: React.createElement(InternalButton, { onClick: () => actions.setFiltering('') }, i18nStrings.clearFilterButtonText) })),
        },
        pagination: {},
        sorting: {},
    });
    const selectedItem = (_a = collectionProps.selectedItems) === null || _a === void 0 ? void 0 : _a[0];
    // selectedItem can change internally inside the hook after pagination or filtering
    // useEffect will capture all possible changes
    useEffect(() => {
        onSelectLatest(selectedItem);
    }, [selectedItem, onSelectLatest]);
    return (React.createElement(InternalTable, Object.assign({ variant: "embedded" }, collectionProps, { header: React.createElement(InternalHeader, { variant: isVisualRefresh ? 'h3' : 'h2', headingTagOverride: 'h3', actions: React.createElement(InternalButton, { iconName: "refresh", ariaLabel: i18nStrings.labelRefresh, onClick: loadData }), counter: selectedItem ? `(1/${allItems.length})` : `(${allItems.length})` }, i18nStrings.header), trackBy: trackBy, filter: React.createElement(InternalTextFilter, Object.assign({}, filterProps, { ref: textFilterRef, filteringAriaLabel: i18nStrings.filteringAriaLabel, filteringPlaceholder: i18nStrings.filteringPlaceholder, countText: i18nStrings.filteringCounterText ? i18nStrings.filteringCounterText(filteredItemsCount) : '' })), pagination: React.createElement(InternalPagination, Object.assign({}, paginationProps, { ariaLabels: i18nStrings.labelsPagination })), selectionType: "single", ariaLabels: i18nStrings.selectionLabels, loading: loading, loadingText: i18nStrings.loadingText, items: items, visibleColumns: visibleColumns, isItemDisabled: isItemDisabled, columnDefinitions: columnDefinitions })));
}
//# sourceMappingURL=basic-table.js.map