// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React, { useMemo, useRef } from 'react';
import { useAutosuggestItems } from '../autosuggest/options-controller';
import { useDropdownStatus } from '../internal/components/dropdown-status';
import DropdownFooter from '../internal/components/dropdown-footer';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { fireNonCancelableEvent, } from '../internal/events';
import autosuggestStyles from '../autosuggest/styles.css.js';
import styles from './styles.css.js';
import { fireCancelableEvent } from '../internal/events/index';
import AutosuggestOptionsList from '../autosuggest/options-list';
import { useAutosuggestLoadMore } from '../autosuggest/load-more-controller';
import AutosuggestInput from '../internal/components/autosuggest-input';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import clsx from 'clsx';
import { getFirstFocusable } from '../internal/components/focus-lock/utils';
import { filterOptions } from './filter-options';
import { joinStrings } from '../internal/utils/strings';
const DROPDOWN_WIDTH_OPTIONS_LIST = 300;
const DROPDOWN_WIDTH_CUSTOM_FORM = 200;
const PropertyFilterAutosuggest = React.forwardRef((props, ref) => {
    var _a;
    const { value, onChange, onFocus, onBlur, onLoadItems, options, statusType = 'finished', placeholder, disabled, ariaLabel, enteredTextLabel, onKeyDown, virtualScroll, expandToViewport, customForm, filterText, onOptionClick, hideEnteredTextOption, searchResultsId } = props, rest = __rest(props, ["value", "onChange", "onFocus", "onBlur", "onLoadItems", "options", "statusType", "placeholder", "disabled", "ariaLabel", "enteredTextLabel", "onKeyDown", "virtualScroll", "expandToViewport", "customForm", "filterText", "onOptionClick", "hideEnteredTextOption", "searchResultsId"]);
    const highlightText = filterText === undefined ? value : filterText;
    const customFormRef = useRef(null);
    const autosuggestInputRef = useRef(null);
    const mergedRef = useMergeRefs(autosuggestInputRef, ref);
    const filteredOptions = useMemo(() => filterOptions(options || [], highlightText), [options, highlightText]);
    const [autosuggestItemsState, autosuggestItemsHandlers] = useAutosuggestItems({
        options: filteredOptions,
        filterValue: value,
        filterText: highlightText,
        filteringType: 'manual',
        hideEnteredTextLabel: hideEnteredTextOption,
        onSelectItem: (option) => {
            var _a;
            const value = option.value || '';
            fireNonCancelableEvent(onChange, { value });
            const selectedCancelled = fireCancelableEvent(onOptionClick, option);
            if (!selectedCancelled) {
                (_a = autosuggestInputRef.current) === null || _a === void 0 ? void 0 : _a.close();
            }
            else {
                autosuggestItemsHandlers.resetHighlightWithKeyboard();
            }
        },
    });
    const autosuggestLoadMoreHandlers = useAutosuggestLoadMore({
        options,
        statusType,
        onLoadItems: (detail) => fireNonCancelableEvent(onLoadItems, detail),
    });
    const handleChange = (event) => {
        autosuggestItemsHandlers.resetHighlightWithKeyboard();
        fireNonCancelableEvent(onChange, event.detail);
    };
    const handleDelayedInput = (event) => {
        autosuggestLoadMoreHandlers.fireLoadMoreOnInputChange(event.detail.value);
    };
    const handleFocus = () => {
        autosuggestLoadMoreHandlers.fireLoadMoreOnInputFocus();
        fireCancelableEvent(onFocus, null);
    };
    const handleBlur = () => {
        fireCancelableEvent(onBlur, null);
    };
    const handleKeyDown = (e) => {
        fireCancelableEvent(onKeyDown, e.detail);
    };
    const handlePressArrowDown = () => {
        var _a;
        autosuggestItemsHandlers.moveHighlightWithKeyboard(1);
        if (customFormRef.current) {
            (_a = getFirstFocusable(customFormRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const handlePressArrowUp = () => {
        autosuggestItemsHandlers.moveHighlightWithKeyboard(-1);
    };
    const handlePressEnter = () => {
        return autosuggestItemsHandlers.selectHighlightedOptionWithKeyboard();
    };
    const handleCloseDropdown = () => {
        autosuggestItemsHandlers.resetHighlightWithKeyboard();
    };
    const handleRecoveryClick = () => {
        var _a;
        autosuggestLoadMoreHandlers.fireLoadMoreOnRecoveryClick();
        (_a = autosuggestInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const selfControlId = useUniqueId('input');
    const controlId = (_a = rest.controlId) !== null && _a !== void 0 ? _a : selfControlId;
    const listId = useUniqueId('list');
    const footerId = useUniqueId('footer');
    const highlightedOptionIdSource = useUniqueId();
    const highlightedOptionId = autosuggestItemsState.highlightedOption ? highlightedOptionIdSource : undefined;
    const isEmpty = !value && !autosuggestItemsState.items.length;
    const dropdownStatus = useDropdownStatus(Object.assign(Object.assign({}, props), { isEmpty, onRecoveryClick: handleRecoveryClick }));
    let content = null;
    if (customForm) {
        content = (React.createElement("div", { ref: customFormRef, className: styles['custom-content-wrapper'] }, customForm));
    }
    else if (autosuggestItemsState.items.length > 0) {
        content = (React.createElement(AutosuggestOptionsList, { autosuggestItemsState: autosuggestItemsState, autosuggestItemsHandlers: autosuggestItemsHandlers, highlightedOptionId: highlightedOptionId, highlightText: highlightText, listId: listId, controlId: controlId, enteredTextLabel: enteredTextLabel, handleLoadMore: autosuggestLoadMoreHandlers.fireLoadMoreOnScroll, hasDropdownStatus: dropdownStatus.content !== null, virtualScroll: virtualScroll, listBottom: !dropdownStatus.isSticky ? React.createElement(DropdownFooter, { content: dropdownStatus.content, id: footerId }) : null, ariaDescribedby: dropdownStatus.content ? footerId : undefined }));
    }
    return (React.createElement(AutosuggestInput, Object.assign({ ref: mergedRef }, rest, { className: clsx(autosuggestStyles.root, styles.input), value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown, controlId: controlId, placeholder: placeholder, disabled: disabled, ariaLabel: ariaLabel, expandToViewport: expandToViewport, ariaControls: listId, ariaActivedescendant: highlightedOptionId, ariaDescribedby: joinStrings(searchResultsId, rest.ariaDescribedby), dropdownExpanded: autosuggestItemsState.items.length > 1 || dropdownStatus.content !== null || !!customForm, dropdownContentKey: customForm ? 'custom' : 'options', dropdownContent: content, dropdownFooter: dropdownStatus.isSticky ? (React.createElement(DropdownFooter, { content: dropdownStatus.content, hasItems: autosuggestItemsState.items.length >= 1, id: footerId })) : null, dropdownWidth: customForm ? DROPDOWN_WIDTH_CUSTOM_FORM : DROPDOWN_WIDTH_OPTIONS_LIST, dropdownContentFocusable: !!customForm, onCloseDropdown: handleCloseDropdown, onDelayedInput: handleDelayedInput, onPressArrowDown: handlePressArrowDown, onPressArrowUp: handlePressArrowUp, onPressEnter: handlePressEnter })));
});
export default PropertyFilterAutosuggest;
//# sourceMappingURL=property-filter-autosuggest.js.map