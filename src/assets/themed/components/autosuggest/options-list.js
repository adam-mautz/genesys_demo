// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import VirtualList from './virtual-list';
import PlainList from './plain-list';
import { useAnnouncement } from '../select/utils/use-announcement';
const createMouseEventHandler = (handler) => (itemIndex) => {
    // prevent mouse events to avoid losing focus from the input
    if (itemIndex > -1) {
        handler(itemIndex);
    }
};
export default function AutosuggestOptionsList({ autosuggestItemsState, autosuggestItemsHandlers, highlightedOptionId, highlightText, listId, controlId, enteredTextLabel, handleLoadMore, hasDropdownStatus, virtualScroll, selectedAriaLabel, renderHighlightedAriaLive, listBottom, ariaDescribedby, }) {
    var _a;
    const handleMouseUp = createMouseEventHandler(autosuggestItemsHandlers.selectVisibleOptionWithMouse);
    const handleMouseMove = createMouseEventHandler(autosuggestItemsHandlers.highlightVisibleOptionWithMouse);
    const ListComponent = virtualScroll ? VirtualList : PlainList;
    const announcement = useAnnouncement({
        announceSelected: ((_a = autosuggestItemsState.highlightedOption) === null || _a === void 0 ? void 0 : _a.value) === highlightText,
        highlightedOption: autosuggestItemsState.highlightedOption,
        getParent: option => autosuggestItemsState.getItemGroup(option),
        selectedAriaLabel,
        renderHighlightedAriaLive,
    });
    return (React.createElement(ListComponent, { listBottom: listBottom, handleLoadMore: handleLoadMore, autosuggestItemsState: autosuggestItemsState, highlightText: highlightText, enteredTextLabel: enteredTextLabel, highlightedA11yProps: highlightedOptionId ? { id: highlightedOptionId } : {}, hasDropdownStatus: hasDropdownStatus, menuProps: {
            id: listId,
            ariaLabelledby: controlId,
            onMouseUp: handleMouseUp,
            onMouseMove: handleMouseMove,
            ariaDescribedby,
        }, screenReaderContent: announcement }));
}
//# sourceMappingURL=options-list.js.map