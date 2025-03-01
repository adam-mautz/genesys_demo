import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { fireNonCancelableEvent } from '../internal/events';
import useForwardFocus from '../internal/hooks/forward-focus';
import { getBaseProps } from '../internal/base-component';
import AbstractSwitch from '../internal/components/abstract-switch';
import styles from './styles.css.js';
import CheckboxIcon from '../internal/components/checkbox-icon';
import { useFormFieldContext } from '../internal/context/form-field-context';
const InternalCheckbox = React.forwardRef((_a, ref) => {
    var { controlId, name, checked, disabled, ariaRequired, indeterminate, children, description, ariaLabel, onFocus, onBlur, onChange, tabIndex, showOutline, __internalRootRef } = _a, rest = __rest(_a, ["controlId", "name", "checked", "disabled", "ariaRequired", "indeterminate", "children", "description", "ariaLabel", "onFocus", "onBlur", "onChange", "tabIndex", "showOutline", "__internalRootRef"]);
    const { ariaDescribedby, ariaLabelledby } = useFormFieldContext(rest);
    const baseProps = getBaseProps(rest);
    const checkboxRef = useRef(null);
    useForwardFocus(ref, checkboxRef);
    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = Boolean(indeterminate);
        }
    });
    return (React.createElement(AbstractSwitch, Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className), controlClassName: styles['checkbox-control'], outlineClassName: styles.outline, controlId: controlId, disabled: disabled, label: children, description: description, descriptionBottomPadding: true, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescribedby: ariaDescribedby, showOutline: showOutline, nativeControl: nativeControlProps => (React.createElement("input", Object.assign({}, nativeControlProps, { ref: checkboxRef, type: "checkbox", checked: checked, name: name, "aria-required": ariaRequired ? 'true' : undefined, tabIndex: tabIndex, onFocus: () => fireNonCancelableEvent(onFocus), onBlur: () => fireNonCancelableEvent(onBlur), 
            // empty handler to suppress React controllability warning
            onChange: () => { } }))), onClick: () => {
            var _a;
            (_a = checkboxRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            fireNonCancelableEvent(onChange, 
            // for deterministic transitions "indeterminate" -> "checked" -> "unchecked"
            indeterminate ? { checked: true, indeterminate: false } : { checked: !checked, indeterminate: false });
        }, styledControl: React.createElement(CheckboxIcon, { checked: checked, indeterminate: indeterminate, disabled: disabled }), __internalRootRef: __internalRootRef })));
});
export default InternalCheckbox;
//# sourceMappingURL=internal.js.map