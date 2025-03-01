import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../../base-component';
import InternalIcon from '../../../icon/internal';
import styles from './styles.css.js';
import { fireKeyboardEvent, fireCancelableEvent } from '../../events';
const ButtonTrigger = (_a, ref) => {
    var { children, pressed = false, hideCaret = false, disabled = false, readOnly = false, invalid = false, inFilteringToken, ariaHasPopup, ariaLabel, ariaLabelledby, ariaDescribedby, onKeyDown, onKeyUp, onMouseDown, onClick, onFocus, onBlur, autoFocus } = _a, restProps = __rest(_a, ["children", "pressed", "hideCaret", "disabled", "readOnly", "invalid", "inFilteringToken", "ariaHasPopup", "ariaLabel", "ariaLabelledby", "ariaDescribedby", "onKeyDown", "onKeyUp", "onMouseDown", "onClick", "onFocus", "onBlur", "autoFocus"]);
    const baseProps = getBaseProps(restProps);
    const attributes = Object.assign(Object.assign({}, baseProps), { type: 'button', className: clsx(styles['button-trigger'], baseProps.className, pressed && styles.pressed, disabled && styles.disabled, invalid && styles.invalid, !hideCaret && styles['has-caret'], readOnly && styles['read-only'], inFilteringToken && styles['in-filtering-token']), disabled: disabled || readOnly, 'aria-expanded': pressed, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, 'aria-haspopup': ariaHasPopup !== null && ariaHasPopup !== void 0 ? ariaHasPopup : 'listbox', onKeyDown: onKeyDown && (event => fireKeyboardEvent(onKeyDown, event)), onKeyUp: onKeyUp && (event => fireKeyboardEvent(onKeyUp, event)), onMouseDown: onMouseDown && (event => fireCancelableEvent(onMouseDown, {}, event)), onClick: onClick && (event => fireCancelableEvent(onClick, {}, event)), onFocus: onFocus && (event => fireCancelableEvent(onFocus, {}, event)), onBlur: onBlur && (event => fireCancelableEvent(onBlur, { relatedTarget: event.relatedTarget }, event)), autoFocus });
    if (invalid) {
        attributes['aria-invalid'] = invalid;
    }
    return (React.createElement("button", Object.assign({ ref: ref }, attributes),
        children,
        !hideCaret && (React.createElement("span", { className: styles.arrow },
            React.createElement(InternalIcon, { name: "caret-down-filled", variant: disabled ? 'disabled' : 'normal' })))));
};
export default React.forwardRef(ButtonTrigger);
//# sourceMappingURL=index.js.map