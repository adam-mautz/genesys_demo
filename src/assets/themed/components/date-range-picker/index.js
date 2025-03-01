import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.css.js';
import { normalizeLocale } from '../internal/utils/locale';
import useForwardFocus from '../internal/hooks/forward-focus';
import { KeyCode } from '../internal/keycode';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import checkControlled from '../internal/hooks/check-controlled';
import InternalBox from '../box/internal';
import { DateRangePickerDropdown } from './dropdown';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import Dropdown from '../internal/components/dropdown';
import { useFocusTracker } from '../internal/hooks/use-focus-tracker';
import { useMobile } from '../internal/hooks/use-mobile';
import ButtonTrigger from '../internal/components/button-trigger';
import { useFormFieldContext } from '../internal/context/form-field-context';
import InternalIcon from '../icon/internal';
import { normalizeTimeOffset, shiftTimeOffset } from './time-offset';
import useBaseComponent from '../internal/hooks/use-base-component';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { fireNonCancelableEvent } from '../internal/events/index.js';
import { isDevelopment } from '../internal/is-development.js';
import { warnOnce } from '../internal/logging.js';
import { usePrevious } from '../internal/hooks/use-previous/index.js';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { formatDateRange, isIsoDateOnly } from '../internal/utils/date-time';
import { formatValue } from './utils.js';
function renderDateRange(range, placeholder, formatRelativeRange, timeOffset) {
    if (!range) {
        return (React.createElement("span", { className: styles['label-text'], "aria-disabled": true }, placeholder));
    }
    const formatted = range.type === 'relative' ? (formatRelativeRange(range)) : (React.createElement(BreakSpaces, { text: formatDateRange(range.startDate, range.endDate, timeOffset) }));
    return (React.createElement(InternalBox, { fontWeight: "normal", display: "inline", color: "inherit", variant: "span" }, formatted));
}
function BreakSpaces({ text }) {
    const tokens = text.split(/( )/);
    return (React.createElement(React.Fragment, null, tokens.map((token, index) => (React.createElement(React.Fragment, { key: index },
        token.length > 1 ? React.createElement("span", { className: styles['label-token-nowrap'] }, token) : token,
        token === ' ' && React.createElement("wbr", null))))));
}
function isDateOnly(value) {
    if (!value || value.type !== 'absolute') {
        return false;
    }
    return isIsoDateOnly(value.startDate) && isIsoDateOnly(value.endDate);
}
const DateRangePicker = React.forwardRef((_a, ref) => {
    var _b, _c;
    var { locale = '', startOfWeek, isDateEnabled = () => true, value, placeholder, readOnly = false, disabled = false, onChange, onBlur, onFocus, relativeOptions = [], i18nStrings, isValidRange = () => ({ valid: true }), showClearButton = true, dateOnly = false, timeOffset, getTimeOffset, timeInputFormat = 'hh:mm:ss', expandToViewport = false, rangeSelectorMode = 'default', customAbsoluteRangeControl } = _a, rest = __rest(_a, ["locale", "startOfWeek", "isDateEnabled", "value", "placeholder", "readOnly", "disabled", "onChange", "onBlur", "onFocus", "relativeOptions", "i18nStrings", "isValidRange", "showClearButton", "dateOnly", "timeOffset", "getTimeOffset", "timeInputFormat", "expandToViewport", "rangeSelectorMode", "customAbsoluteRangeControl"]);
    const { __internalRootRef } = useBaseComponent('DateRangePicker');
    checkControlled('DateRangePicker', 'value', value, 'onChange', onChange);
    const normalizedTimeOffset = normalizeTimeOffset(value, getTimeOffset, timeOffset);
    value = isDateOnly(value) ? value : shiftTimeOffset(value, normalizedTimeOffset);
    const baseProps = getBaseProps(rest);
    const { invalid, controlId, ariaDescribedby, ariaLabelledby } = useFormFieldContext(Object.assign({ ariaLabelledby: (_b = rest.ariaLabelledby) !== null && _b !== void 0 ? _b : i18nStrings.ariaLabelledby, ariaDescribedby: (_c = rest.ariaDescribedby) !== null && _c !== void 0 ? _c : i18nStrings.ariaDescribedby }, rest));
    const isSingleGrid = useMobile();
    const triggerRef = useRef(null);
    useForwardFocus(ref, triggerRef);
    const rootRef = useRef(null);
    const dropdownId = useUniqueId('date-range-picker-dropdown');
    useFocusTracker({ rootRef, onBlur, onFocus, viewportId: expandToViewport ? dropdownId : '' });
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const normalizedLocale = normalizeLocale('DateRangePicker', locale);
    const closeDropdown = (focusTrigger = false) => {
        var _a;
        setIsDropDownOpen(false);
        if (focusTrigger) {
            (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const onWrapperKeyDownHandler = (event) => {
        if (event.keyCode === KeyCode.escape) {
            closeDropdown(true);
        }
    };
    const onClear = () => {
        fireNonCancelableEvent(onChange, { value: null });
    };
    const onApply = (newValue) => {
        const validationResult = isValidRange(newValue);
        if ((validationResult === null || validationResult === void 0 ? void 0 : validationResult.valid) === false) {
            return validationResult;
        }
        if (isDevelopment) {
            if ((newValue === null || newValue === void 0 ? void 0 : newValue.type) === 'absolute') {
                const [startDateWithoutTime] = newValue.startDate.split('T');
                const [endDateWithoutTime] = newValue.endDate.split('T');
                if (!startDateWithoutTime || !endDateWithoutTime) {
                    warnOnce('DateRangePicker', 'You have provided an `isValidRange` prop that did not catch a missing start or end date.');
                }
            }
        }
        fireNonCancelableEvent(onChange, {
            value: formatValue(newValue, {
                dateOnly,
                timeOffset: normalizeTimeOffset(newValue, getTimeOffset, timeOffset),
            }),
        });
        return validationResult || { valid: true };
    };
    const prevDateOnly = usePrevious(dateOnly);
    useEffect(() => {
        if (prevDateOnly !== undefined && prevDateOnly !== dateOnly) {
            warnOnce('DateRangePicker', `The provided \`dateOnly\` flag has been changed from "${prevDateOnly}" to "${dateOnly}" which can lead to unexpected value format. Consider using separate components.`);
        }
    }, [prevDateOnly, dateOnly]);
    if (value && value.type !== 'absolute' && value.type !== 'relative') {
        warnOnce('DateRangePicker', 'You provided an invalid value. Reverting back to default.');
        value = null;
    }
    if (((value === null || value === void 0 ? void 0 : value.type) === 'absolute' && rangeSelectorMode === 'relative-only') ||
        ((value === null || value === void 0 ? void 0 : value.type) === 'relative' && rangeSelectorMode === 'absolute-only')) {
        warnOnce('DateRangePicker', 'The provided value does not correspond to the current range selector mode. Reverting back to default.');
        value = null;
    }
    const trigger = (React.createElement("div", { className: styles['trigger-wrapper'] },
        React.createElement(ButtonTrigger, { ref: triggerRef, id: controlId, invalid: invalid, ariaLabel: i18nStrings.ariaLabel, ariaDescribedby: ariaDescribedby, ariaLabelledby: ariaLabelledby, className: clsx(styles.label, {
                [styles['label-enabled']]: !readOnly && !disabled,
            }), hideCaret: true, onClick: () => {
                if (!readOnly && !disabled) {
                    setIsDropDownOpen(true);
                }
            }, disabled: disabled, readOnly: readOnly, ariaHasPopup: "true" },
            React.createElement("span", { className: styles['trigger-flexbox'] },
                React.createElement("span", { className: styles['icon-wrapper'] },
                    React.createElement(InternalIcon, { name: "calendar", variant: disabled || readOnly ? 'disabled' : 'normal' })),
                renderDateRange(value, placeholder !== null && placeholder !== void 0 ? placeholder : '', i18nStrings.formatRelativeRange, normalizedTimeOffset)))));
    const mergedRef = useMergeRefs(rootRef, __internalRootRef);
    return (React.createElement("div", Object.assign({}, baseProps, { ref: mergedRef, className: clsx(baseProps.className, styles.root), onKeyDown: onWrapperKeyDownHandler }),
        React.createElement(Dropdown, { stretchWidth: true, stretchHeight: true, open: isDropDownOpen, onDropdownClose: () => closeDropdown(), trigger: trigger, stretchToTriggerWidth: false, expandToViewport: expandToViewport, dropdownId: dropdownId }, isDropDownOpen && (React.createElement(DateRangePickerDropdown, { startOfWeek: startOfWeek, locale: normalizedLocale, isSingleGrid: isSingleGrid, onDropdownClose: () => closeDropdown(true), value: value, showClearButton: showClearButton, isDateEnabled: isDateEnabled, i18nStrings: i18nStrings, onClear: onClear, onApply: onApply, relativeOptions: relativeOptions, isValidRange: isValidRange, dateOnly: dateOnly, timeInputFormat: timeInputFormat, rangeSelectorMode: rangeSelectorMode, ariaLabelledby: ariaLabelledby, ariaDescribedby: ariaDescribedby, customAbsoluteRangeControl: customAbsoluteRangeControl })))));
});
applyDisplayName(DateRangePicker, 'DateRangePicker');
export default DateRangePicker;
//# sourceMappingURL=index.js.map