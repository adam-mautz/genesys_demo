import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import Dropdown from '../internal/components/dropdown';
import { useDropdownStatus } from '../internal/components/dropdown-status';
import Filter from './parts/filter';
import Trigger from './parts/trigger';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { getBaseProps } from '../internal/base-component';
import { prepareOptions } from '../internal/components/option/utils/prepare-options';
import { useSelect } from './utils/use-select';
import { checkOptionValueField } from './utils/check-option-value-field';
import { useNativeSearch } from './utils/use-native-search';
import { fireNonCancelableEvent } from '../internal/events';
import { useLoadItems } from './utils/use-load-items';
import { useAnnouncement } from './utils/use-announcement';
import { useFormFieldContext } from '../internal/context/form-field-context';
import PlainList from './parts/plain-list';
import VirtualList from './parts/virtual-list';
import DropdownFooter from '../internal/components/dropdown-footer';
import checkControlled from '../internal/hooks/check-controlled';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import ScreenreaderOnly from '../internal/components/screenreader-only/index.js';
import { joinStrings } from '../internal/utils/strings/join-strings.js';
import { useInternalI18n } from '../internal/i18n/context.js';
const InternalSelect = React.forwardRef((_a, externalRef) => {
    var _b;
    var { options, filteringType = 'none', filteringPlaceholder, filteringAriaLabel, filteringClearAriaLabel, ariaRequired, placeholder, disabled, ariaLabel, statusType = 'finished', empty, loadingText, finishedText, errorText, recoveryText, noMatch, triggerVariant = 'label', renderHighlightedAriaLive, selectedOption, onBlur, onFocus, onLoadItems, onChange, virtualScroll, expandToViewport, autoFocus, __inFilteringToken, __internalRootRef = null } = _a, restProps = __rest(_a, ["options", "filteringType", "filteringPlaceholder", "filteringAriaLabel", "filteringClearAriaLabel", "ariaRequired", "placeholder", "disabled", "ariaLabel", "statusType", "empty", "loadingText", "finishedText", "errorText", "recoveryText", "noMatch", "triggerVariant", "renderHighlightedAriaLive", "selectedOption", "onBlur", "onFocus", "onLoadItems", "onChange", "virtualScroll", "expandToViewport", "autoFocus", "__inFilteringToken", "__internalRootRef"]);
    const baseProps = getBaseProps(restProps);
    const formFieldContext = useFormFieldContext(restProps);
    const i18n = useInternalI18n('select');
    const errorIconAriaLabel = i18n('errorIconAriaLabel', restProps.errorIconAriaLabel);
    const selectedAriaLabel = i18n('selectedAriaLabel', restProps.selectedAriaLabel);
    const { handleLoadMore, handleRecoveryClick, fireLoadItems } = useLoadItems({
        onLoadItems,
        options,
        statusType,
    });
    checkControlled('Select', 'selectedOption', selectedOption, 'onChange', onChange);
    checkOptionValueField('Select', 'options', options);
    const [filteringValue, setFilteringValue] = useState('');
    const { filteredOptions, parentMap } = prepareOptions(options, filteringType, filteringValue);
    const rootRef = useRef(null);
    const triggerRef = useRef(null);
    const selfControlId = useUniqueId('trigger');
    const controlId = (_b = formFieldContext.controlId) !== null && _b !== void 0 ? _b : selfControlId;
    const scrollToIndex = useRef(null);
    const { isOpen, highlightType, highlightedOption, highlightedIndex, getTriggerProps, getDropdownProps, getFilterProps, getMenuProps, getOptionProps, highlightOption, selectOption, announceSelected, } = useSelect({
        selectedOptions: selectedOption ? [selectedOption] : [],
        updateSelectedOption: option => fireNonCancelableEvent(onChange, { selectedOption: option }),
        options: filteredOptions,
        filteringType,
        onBlur,
        onFocus,
        externalRef,
        fireLoadItems,
        setFilteringValue,
    });
    const handleNativeSearch = useNativeSearch({
        isEnabled: filteringType === 'none',
        options: filteredOptions,
        highlightOption: !isOpen ? selectOption : highlightOption,
        highlightedOption: !isOpen ? selectedOption : highlightedOption === null || highlightedOption === void 0 ? void 0 : highlightedOption.option,
    });
    const selectAriaLabelId = useUniqueId('select-arialabel-');
    const footerId = useUniqueId('footer');
    useEffect(() => {
        var _a;
        (_a = scrollToIndex.current) === null || _a === void 0 ? void 0 : _a.call(scrollToIndex, highlightedIndex);
    }, [highlightedIndex]);
    const filter = (React.createElement(Filter, Object.assign({ clearAriaLabel: filteringClearAriaLabel, filteringType: filteringType, placeholder: filteringPlaceholder, ariaLabel: filteringAriaLabel, ariaRequired: ariaRequired, value: filteringValue }, getFilterProps())));
    const trigger = (React.createElement(Trigger, Object.assign({ ref: triggerRef, placeholder: placeholder, disabled: disabled, triggerVariant: triggerVariant, triggerProps: getTriggerProps(disabled, autoFocus), selectedOption: selectedOption, isOpen: isOpen, inFilteringToken: __inFilteringToken }, formFieldContext, { controlId: controlId, ariaLabelledby: joinStrings(formFieldContext.ariaLabelledby, selectAriaLabelId) })));
    const isEmpty = !options || options.length === 0;
    const isNoMatch = filteredOptions && filteredOptions.length === 0;
    const dropdownStatus = useDropdownStatus({
        statusType,
        empty,
        loadingText,
        finishedText,
        errorText,
        recoveryText,
        isEmpty,
        isNoMatch,
        noMatch,
        errorIconAriaLabel,
        onRecoveryClick: handleRecoveryClick,
    });
    const menuProps = Object.assign(Object.assign({}, getMenuProps()), { onLoadMore: handleLoadMore, ariaLabelledby: joinStrings(selectAriaLabelId, controlId), ariaDescribedby: dropdownStatus.content ? footerId : undefined });
    const announcement = useAnnouncement({
        announceSelected,
        highlightedOption,
        getParent: option => { var _a; return (_a = parentMap.get(option)) === null || _a === void 0 ? void 0 : _a.option; },
        selectedAriaLabel,
        renderHighlightedAriaLive,
    });
    const ListComponent = virtualScroll ? VirtualList : PlainList;
    const handleMouseDown = (event) => {
        const target = event.target;
        if (target !== document.activeElement) {
            // prevent currently focused element from losing it
            event.preventDefault();
        }
    };
    const mergedRef = useMergeRefs(rootRef, __internalRootRef);
    return (React.createElement("div", Object.assign({}, baseProps, { ref: mergedRef, className: clsx(styles.root, baseProps.className), onKeyPress: handleNativeSearch }),
        React.createElement(Dropdown, Object.assign({}, getDropdownProps(), { open: isOpen, stretchTriggerHeight: __inFilteringToken, trigger: trigger, header: filter, onMouseDown: handleMouseDown, footer: dropdownStatus.isSticky ? (React.createElement(DropdownFooter, { content: isOpen ? dropdownStatus.content : null, id: footerId })) : null, expandToViewport: expandToViewport }),
            React.createElement(ListComponent, { listBottom: !dropdownStatus.isSticky ? (React.createElement(DropdownFooter, { content: isOpen ? dropdownStatus.content : null, id: footerId })) : null, menuProps: menuProps, getOptionProps: getOptionProps, filteredOptions: filteredOptions, filteringValue: filteringValue, ref: scrollToIndex, hasDropdownStatus: dropdownStatus.content !== null, screenReaderContent: announcement, highlightType: highlightType })),
        React.createElement(ScreenreaderOnly, { id: selectAriaLabelId }, ariaLabel)));
});
export default InternalSelect;
//# sourceMappingURL=internal.js.map