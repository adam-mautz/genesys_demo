import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import InternalIcon from '../icon/internal';
import InternalButton from '../button/internal';
import { fireNonCancelableEvent, fireKeyboardEvent } from '../internal/events';
import { getBaseProps } from '../internal/base-component';
import { useSearchProps, convertAutoComplete } from './utils';
import { useDebounceCallback } from '../internal/hooks/use-debounce-callback';
import { useFormFieldContext } from '../internal/context/form-field-context';
import styles from './styles.css.js';
import { useInternalI18n } from '../internal/i18n/context';
function InternalInput(_a, ref) {
    var { type = 'text', step, inputMode, autoComplete = true, ariaLabel, clearAriaLabel: clearAriaLabelOverride, name, value, placeholder, autoFocus, disabled, readOnly, disableBrowserAutocorrect, spellcheck, __noBorderRadius, __leftIcon, __leftIconVariant = 'subtle', __onLeftIconClick, ariaRequired, __rightIcon, __onRightIconClick, onKeyDown, onKeyUp, onChange, __onDelayedInput, __onBlurWithDetail, onBlur, onFocus, __nativeAttributes, __internalRootRef, __inheritFormFieldProps } = _a, rest = __rest(_a, ["type", "step", "inputMode", "autoComplete", "ariaLabel", "clearAriaLabel", "name", "value", "placeholder", "autoFocus", "disabled", "readOnly", "disableBrowserAutocorrect", "spellcheck", "__noBorderRadius", "__leftIcon", "__leftIconVariant", "__onLeftIconClick", "ariaRequired", "__rightIcon", "__onRightIconClick", "onKeyDown", "onKeyUp", "onChange", "__onDelayedInput", "__onBlurWithDetail", "onBlur", "onFocus", "__nativeAttributes", "__internalRootRef", "__inheritFormFieldProps"]);
    const baseProps = getBaseProps(rest);
    const i18n = useInternalI18n('input');
    const fireDelayedInput = useDebounceCallback((value) => fireNonCancelableEvent(__onDelayedInput, { value }));
    const handleChange = (value) => {
        fireDelayedInput(value);
        fireNonCancelableEvent(onChange, { value });
    };
    const inputRef = useRef(null);
    const searchProps = useSearchProps(type, disabled, readOnly, value, inputRef, handleChange);
    __leftIcon = __leftIcon !== null && __leftIcon !== void 0 ? __leftIcon : searchProps.__leftIcon;
    __rightIcon = __rightIcon !== null && __rightIcon !== void 0 ? __rightIcon : searchProps.__rightIcon;
    __onRightIconClick = __onRightIconClick !== null && __onRightIconClick !== void 0 ? __onRightIconClick : searchProps.__onRightIconClick;
    const formFieldContext = useFormFieldContext(rest);
    const { ariaLabelledby, ariaDescribedby, controlId, invalid } = __inheritFormFieldProps ? formFieldContext : rest;
    const attributes = Object.assign({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, name,
        placeholder,
        autoFocus, id: controlId, className: clsx(styles.input, type && styles[`input-type-${type}`], __rightIcon && styles['input-has-icon-right'], __leftIcon && styles['input-has-icon-left'], __noBorderRadius && styles['input-has-no-border-radius'], {
            [styles['input-readonly']]: readOnly,
            [styles['input-invalid']]: invalid,
        }), autoComplete: convertAutoComplete(autoComplete), disabled,
        readOnly,
        type,
        step,
        inputMode, spellCheck: spellcheck, onKeyDown: onKeyDown && (event => fireKeyboardEvent(onKeyDown, event)), onKeyUp: onKeyUp && (event => fireKeyboardEvent(onKeyUp, event)), 
        // We set a default value on the component in order to force it into the controlled mode.
        value: value !== null && value !== void 0 ? value : '', onChange: onChange && (event => handleChange(event.target.value)), onBlur: e => {
            onBlur && fireNonCancelableEvent(onBlur);
            __onBlurWithDetail && fireNonCancelableEvent(__onBlurWithDetail, { relatedTarget: e.relatedTarget });
        }, onFocus: onFocus && (() => fireNonCancelableEvent(onFocus)) }, __nativeAttributes);
    if (type === 'number') {
        // Chrome and Safari have a weird built-in behavior of letting focused
        // number inputs be controlled by scrolling on them. However, they don't
        // lock the browser's scroll, so it's very easy to accidentally increment
        // the input while scrolling down the page.
        attributes.onWheel = event => event.currentTarget.blur();
    }
    if (disableBrowserAutocorrect) {
        attributes.autoCorrect = 'off';
        attributes.autoCapitalize = 'off';
    }
    // ensure aria properties are string literal "true"
    if (ariaRequired) {
        attributes['aria-required'] = 'true';
    }
    if (invalid) {
        attributes['aria-invalid'] = 'true';
    }
    const mergedRef = useMergeRefs(ref, inputRef);
    // type = "visualSearch" renders a type="text' input
    if (attributes.type === 'visualSearch') {
        attributes.type = 'text';
    }
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles['input-container']), ref: __internalRootRef }),
        __leftIcon && (React.createElement("span", { onClick: __onLeftIconClick, className: styles['input-icon-left'] },
            React.createElement(InternalIcon, { name: __leftIcon, variant: disabled ? 'disabled' : __leftIconVariant }))),
        React.createElement("input", Object.assign({ ref: mergedRef }, attributes)),
        __rightIcon && (React.createElement("span", { className: styles['input-icon-right'] },
            React.createElement(InternalButton
            // Used for test utils
            // eslint-disable-next-line react/forbid-component-props
            , { 
                // Used for test utils
                // eslint-disable-next-line react/forbid-component-props
                className: styles['input-button-right'], variant: "inline-icon", formAction: "none", iconName: __rightIcon, onClick: __onRightIconClick, ariaLabel: i18n('clearAriaLabel', clearAriaLabelOverride), disabled: disabled })))));
}
export default React.forwardRef(InternalInput);
//# sourceMappingURL=internal.js.map