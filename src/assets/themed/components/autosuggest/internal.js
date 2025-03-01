// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React, { useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import { useAutosuggestItems } from './options-controller';
import { useDropdownStatus } from '../internal/components/dropdown-status';
import DropdownFooter from '../internal/components/dropdown-footer';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { fireCancelableEvent, fireNonCancelableEvent, } from '../internal/events';
import { checkOptionValueField } from '../select/utils/check-option-value-field';
import checkControlled from '../internal/hooks/check-controlled';
import AutosuggestOptionsList from './options-list';
import { useAutosuggestLoadMore } from './load-more-controller';
import AutosuggestInput from '../internal/components/autosuggest-input';
import { useFormFieldContext } from '../contexts/form-field';
import { useInternalI18n } from '../internal/i18n/context';
import styles from './styles.css.js';
const InternalAutosuggest = React.forwardRef((props, ref) => {
    var _a;
    const { value, onChange, onBlur, onFocus, onKeyUp, onLoadItems, options, filteringType = 'auto', statusType = 'finished', recoveryText, placeholder, clearAriaLabel, name, disabled, disableBrowserAutocorrect = false, autoFocus, readOnly, ariaLabel, ariaRequired, enteredTextLabel, onKeyDown, virtualScroll, expandToViewport, onSelect, renderHighlightedAriaLive, __internalRootRef } = props, restProps = __rest(props, ["value", "onChange", "onBlur", "onFocus", "onKeyUp", "onLoadItems", "options", "filteringType", "statusType", "recoveryText", "placeholder", "clearAriaLabel", "name", "disabled", "disableBrowserAutocorrect", "autoFocus", "readOnly", "ariaLabel", "ariaRequired", "enteredTextLabel", "onKeyDown", "virtualScroll", "expandToViewport", "onSelect", "renderHighlightedAriaLive", "__internalRootRef"]);
    checkControlled('Autosuggest', 'value', value, 'onChange', onChange);
    checkOptionValueField('Autosuggest', 'options', options);
    const autosuggestInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => { var _a; return (_a = autosuggestInputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        select: () => { var _a; return (_a = autosuggestInputRef.current) === null || _a === void 0 ? void 0 : _a.select(); },
    }), []);
    const i18n = useInternalI18n('autosuggest');
    const errorIconAriaLabel = i18n('errorIconAriaLabel', restProps.errorIconAriaLabel);
    const selectedAriaLabel = i18n('selectedAriaLabel', restProps.selectedAriaLabel);
    const [autosuggestItemsState, autosuggestItemsHandlers] = useAutosuggestItems({
        options: options || [],
        filterValue: value,
        filterText: value,
        filteringType,
        hideEnteredTextLabel: false,
        onSelectItem: (option) => {
            var _a;
            const value = option.value || '';
            fireNonCancelableEvent(onChange, { value });
            fireNonCancelableEvent(onSelect, {
                value,
                selectedOption: option.type !== 'use-entered' ? option.option : undefined,
            });
            (_a = autosuggestInputRef.current) === null || _a === void 0 ? void 0 : _a.close();
        },
    });
    const autosuggestLoadMoreHandlers = useAutosuggestLoadMore({
        options,
        statusType,
        onLoadItems: (detail) => fireNonCancelableEvent(onLoadItems, detail),
    });
    const handleChange = (event) => {
        autosuggestItemsHandlers.setShowAll(false);
        autosuggestItemsHandlers.resetHighlightWithKeyboard();
        fireNonCancelableEvent(onChange, event.detail);
    };
    const handleDelayedInput = (event) => {
        autosuggestLoadMoreHandlers.fireLoadMoreOnInputChange(event.detail.value);
    };
    const handleBlur = () => {
        fireNonCancelableEvent(onBlur, null);
    };
    const handleFocus = () => {
        autosuggestItemsHandlers.setShowAll(true);
        autosuggestLoadMoreHandlers.fireLoadMoreOnInputFocus();
        fireNonCancelableEvent(onFocus, null);
    };
    const handleKeyUp = (e) => {
        fireCancelableEvent(onKeyUp, e.detail);
    };
    const handleKeyDown = (e) => {
        fireCancelableEvent(onKeyDown, e.detail);
    };
    const handlePressArrowDown = () => {
        autosuggestItemsHandlers.moveHighlightWithKeyboard(1);
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
    const formFieldContext = useFormFieldContext(restProps);
    const selfControlId = useUniqueId('input');
    const footerControlId = useUniqueId('footer');
    const controlId = (_a = formFieldContext.controlId) !== null && _a !== void 0 ? _a : selfControlId;
    const listId = useUniqueId('list');
    const highlightedOptionIdSource = useUniqueId();
    const highlightedOptionId = autosuggestItemsState.highlightedOption ? highlightedOptionIdSource : undefined;
    const isEmpty = !value && !autosuggestItemsState.items.length;
    const dropdownStatus = useDropdownStatus(Object.assign(Object.assign({}, props), { isEmpty,
        recoveryText,
        errorIconAriaLabel, onRecoveryClick: handleRecoveryClick }));
    return (React.createElement(AutosuggestInput, Object.assign({}, restProps, { className: clsx(styles.root, restProps.className), ref: autosuggestInputRef, __internalRootRef: __internalRootRef, value: value, onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, onKeyUp: handleKeyUp, onKeyDown: handleKeyDown, name: name, controlId: controlId, placeholder: placeholder, disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, ariaLabel: ariaLabel, ariaRequired: ariaRequired, clearAriaLabel: clearAriaLabel, disableBrowserAutocorrect: disableBrowserAutocorrect, expandToViewport: expandToViewport, ariaControls: listId, ariaActivedescendant: highlightedOptionId, dropdownExpanded: autosuggestItemsState.items.length > 1 || dropdownStatus.content !== null, dropdownContent: React.createElement(AutosuggestOptionsList, { autosuggestItemsState: autosuggestItemsState, autosuggestItemsHandlers: autosuggestItemsHandlers, highlightedOptionId: highlightedOptionId, highlightText: value, listId: listId, controlId: controlId, enteredTextLabel: enteredTextLabel, handleLoadMore: autosuggestLoadMoreHandlers.fireLoadMoreOnScroll, hasDropdownStatus: dropdownStatus.content !== null, virtualScroll: virtualScroll, selectedAriaLabel: selectedAriaLabel, renderHighlightedAriaLive: renderHighlightedAriaLive, listBottom: !dropdownStatus.isSticky ? React.createElement(DropdownFooter, { content: dropdownStatus.content, id: footerControlId }) : null, ariaDescribedby: dropdownStatus.content ? footerControlId : undefined }), dropdownFooter: dropdownStatus.isSticky ? (React.createElement(DropdownFooter, { id: footerControlId, content: dropdownStatus.content, hasItems: autosuggestItemsState.items.length >= 1 })) : null, loopFocus: statusType === 'error' && !!recoveryText, onCloseDropdown: handleCloseDropdown, onDelayedInput: handleDelayedInput, onPressArrowDown: handlePressArrowDown, onPressArrowUp: handlePressArrowUp, onPressEnter: handlePressEnter })));
});
export default InternalAutosuggest;
//# sourceMappingURL=internal.js.map