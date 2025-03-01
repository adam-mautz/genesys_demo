import { isInteractive, isGroupInteractive, isGroup } from '../../internal/components/option/utils/filter-options';
import { useEffect, useRef } from 'react';
import { useHighlightedOption } from '../../internal/components/options-list/utils/use-highlight-option';
import { useOpenState } from '../../internal/components/options-list/utils/use-open-state';
import { useMenuKeyboard, useTriggerKeyboard } from '../../internal/components/options-list/utils/use-keyboard';
import { getOptionId } from '../../internal/components/options-list/utils/use-ids';
import { connectOptionsByValue } from './connect-options';
import useForwardFocus from '../../internal/hooks/forward-focus';
import { usePrevious } from '../../internal/hooks/use-previous';
import { fireNonCancelableEvent } from '../../internal/events';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
export function useSelect({ selectedOptions, updateSelectedOption, options, filteringType, onBlur, onFocus, externalRef, keepOpen, fireLoadItems, setFilteringValue, useInteractiveGroups = false, }) {
    const interactivityCheck = useInteractiveGroups ? isGroupInteractive : isInteractive;
    const isHighlightable = (option) => !!option && (useInteractiveGroups || option.type !== 'parent');
    const filterRef = useRef(null);
    const triggerRef = useRef(null);
    const menuRef = useRef(null);
    const hasFilter = filteringType !== 'none';
    const activeRef = hasFilter ? filterRef : menuRef;
    const __selectedOptions = connectOptionsByValue(options, selectedOptions);
    const __selectedValuesSet = selectedOptions.reduce((selectedValuesSet, item) => {
        if (item.value) {
            selectedValuesSet.add(item.value);
        }
        return selectedValuesSet;
    }, new Set());
    const [{ highlightType, highlightedOption, highlightedIndex }, { moveHighlightWithKeyboard, resetHighlightWithKeyboard, setHighlightedIndexWithMouse, highlightOptionWithKeyboard, goHomeWithKeyboard, goEndWithKeyboard, },] = useHighlightedOption({ options, isHighlightable });
    const { isOpen, openDropdown, closeDropdown, toggleDropdown } = useOpenState({
        onOpen: () => fireLoadItems(''),
        onClose: () => {
            resetHighlightWithKeyboard();
            setFilteringValue('');
        },
    });
    const handleFocus = () => {
        fireNonCancelableEvent(onFocus, {});
    };
    const handleBlur = () => {
        fireNonCancelableEvent(onBlur, {});
        closeDropdown();
    };
    const hasSelectedOption = __selectedOptions.length > 0;
    const menuId = useUniqueId('option-list');
    const highlightedOptionId = getOptionId(menuId, highlightedIndex);
    const selectOption = (option) => {
        var _a;
        const optionToSelect = option || highlightedOption;
        if (!optionToSelect || !interactivityCheck(optionToSelect)) {
            return;
        }
        updateSelectedOption(optionToSelect.option);
        if (!keepOpen) {
            (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            closeDropdown();
        }
    };
    const activeKeyDownHandler = useMenuKeyboard({
        moveHighlight: moveHighlightWithKeyboard,
        selectOption,
        goHome: goHomeWithKeyboard,
        goEnd: goEndWithKeyboard,
        closeDropdown: () => {
            var _a;
            (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            closeDropdown();
        },
        preventNativeSpace: !hasFilter,
    });
    const triggerKeyDownHandler = useTriggerKeyboard({ openDropdown, goHome: goHomeWithKeyboard });
    const getDropdownProps = () => ({
        onFocus: handleFocus,
        onBlur: handleBlur,
    });
    const getTriggerProps = (disabled = false, autoFocus = false) => {
        const triggerProps = {
            ref: triggerRef,
            onFocus: () => closeDropdown(),
            autoFocus,
        };
        if (!disabled) {
            triggerProps.onMouseDown = (event) => {
                var _a;
                event.preventDefault(); // prevent current focus from blurring as it immediately closes the dropdown
                if (isOpen) {
                    (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
                toggleDropdown();
            };
            triggerProps.onKeyDown = triggerKeyDownHandler;
        }
        return triggerProps;
    };
    const getFilterProps = () => {
        if (!hasFilter) {
            return {};
        }
        return {
            ref: filterRef,
            onKeyDown: activeKeyDownHandler,
            onChange: event => {
                setFilteringValue(event.detail.value);
                resetHighlightWithKeyboard();
            },
            __onDelayedInput: event => {
                fireLoadItems(event.detail.value);
            },
            __nativeAttributes: {
                'aria-activedescendant': highlightedOptionId,
                ['aria-owns']: menuId,
                ['aria-controls']: menuId,
            },
        };
    };
    const getMenuProps = () => {
        const menuProps = {
            id: menuId,
            ref: menuRef,
            open: isOpen,
            onMouseUp: itemIndex => {
                if (itemIndex > -1) {
                    selectOption(options[itemIndex]);
                }
            },
            onMouseMove: itemIndex => {
                if (itemIndex > -1) {
                    setHighlightedIndexWithMouse(itemIndex);
                }
            },
        };
        if (!hasFilter) {
            menuProps.onKeyDown = activeKeyDownHandler;
            menuProps.nativeAttributes = {
                'aria-activedescendant': highlightedOptionId,
            };
        }
        return menuProps;
    };
    const getGroupState = (option) => {
        const totalSelected = option.options.filter(item => !!item.value && __selectedValuesSet.has(item.value)).length;
        const hasSelected = totalSelected > 0;
        const allSelected = totalSelected === option.options.length;
        return {
            selected: hasSelected && allSelected,
            indeterminate: hasSelected && !allSelected,
        };
    };
    const getOptionProps = (option, index) => {
        var _a;
        const highlighted = option === highlightedOption;
        const groupState = isGroup(option.option) ? getGroupState(option.option) : undefined;
        const selected = __selectedOptions.indexOf(option) > -1 || !!(groupState === null || groupState === void 0 ? void 0 : groupState.selected);
        const nextOption = (_a = options[index + 1]) === null || _a === void 0 ? void 0 : _a.option;
        const isNextSelected = !!nextOption && isGroup(nextOption)
            ? getGroupState(nextOption).selected
            : __selectedOptions.indexOf(options[index + 1]) > -1;
        const optionProps = {
            key: index,
            option,
            highlighted,
            selected,
            isNextSelected,
            indeterminate: !!(groupState === null || groupState === void 0 ? void 0 : groupState.indeterminate),
            ['data-mouse-target']: isHighlightable(option) ? index : -1,
            id: getOptionId(menuId, index),
        };
        return optionProps;
    };
    const prevOpen = usePrevious(isOpen);
    useEffect(() => {
        // highlight the first selected option, when opening the Select component without filter input
        // keep the focus in the filter input when opening, so that screenreader can recognize the combobox
        if (isOpen && !prevOpen && hasSelectedOption && !hasFilter) {
            setHighlightedIndexWithMouse(options.indexOf(__selectedOptions[0]));
        }
    }, [isOpen, __selectedOptions, hasSelectedOption, setHighlightedIndexWithMouse, options, prevOpen, hasFilter]);
    useEffect(() => {
        var _a;
        if (isOpen) {
            // dropdown-fit calculations ensure that the dropdown will fit inside the current
            // viewport, so prevent the browser from trying to scroll it into view (e.g. if
            // scroll-padding-top is set on a parent)
            (_a = activeRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
    }, [isOpen, activeRef]);
    useForwardFocus(externalRef, triggerRef);
    const highlightedGroupSelected = !!highlightedOption && isGroup(highlightedOption.option) && getGroupState(highlightedOption.option).selected;
    const announceSelected = !!highlightedOption && (__selectedOptions.indexOf(highlightedOption) > -1 || highlightedGroupSelected);
    return {
        isOpen,
        highlightedOption,
        highlightedIndex,
        highlightType,
        getTriggerProps,
        getDropdownProps,
        getMenuProps,
        getFilterProps,
        getOptionProps,
        highlightOption: highlightOptionWithKeyboard,
        selectOption,
        announceSelected,
    };
}
//# sourceMappingURL=use-select.js.map