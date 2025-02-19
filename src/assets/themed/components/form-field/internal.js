import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { FormFieldContext, useFormFieldContext } from '../internal/context/form-field-context';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import InternalGrid from '../grid/internal';
import InternalIcon from '../icon/internal';
import { getAriaDescribedBy, getGridDefinition, getSlotIds } from './util';
import styles from './styles.css.js';
import { joinStrings } from '../internal/utils/strings';
import { useInternalI18n } from '../internal/i18n/context';
export function FormFieldError({ id, children, errorIconAriaLabel }) {
    const i18n = useInternalI18n('form-field');
    return (React.createElement("div", { id: id, className: styles.error },
        React.createElement("div", { className: styles['error-icon-shake-wrapper'] },
            React.createElement("div", { role: "img", "aria-label": i18n('i18nStrings.errorIconAriaLabel', errorIconAriaLabel), className: styles['error-icon-scale-wrapper'] },
                React.createElement(InternalIcon, { name: "status-warning", size: "small" }))),
        React.createElement("span", { className: styles.error__message }, children)));
}
export function ConstraintText({ id, hasError, children, }) {
    return (React.createElement("div", { id: id, className: clsx(styles.constraint, hasError && styles['constraint-has-error']) }, children));
}
export default function InternalFormField(_a) {
    var { controlId, stretch = false, label, info, i18nStrings, children, secondaryControl, description, constraintText, errorText, __hideLabel, __internalRootRef = null, __disableGutters = false } = _a, rest = __rest(_a, ["controlId", "stretch", "label", "info", "i18nStrings", "children", "secondaryControl", "description", "constraintText", "errorText", "__hideLabel", "__internalRootRef", "__disableGutters"]);
    const baseProps = getBaseProps(rest);
    const isRefresh = useVisualRefresh();
    const instanceUniqueId = useUniqueId('formField');
    const generatedControlId = controlId || instanceUniqueId;
    const formFieldId = controlId || generatedControlId;
    const slotIds = getSlotIds(formFieldId, label, description, constraintText, errorText);
    const ariaDescribedBy = getAriaDescribedBy(slotIds);
    const gridDefinition = getGridDefinition(stretch, !!secondaryControl, isRefresh);
    const { ariaLabelledby: parentAriaLabelledby, ariaDescribedby: parentAriaDescribedby, invalid: parentInvalid, } = useFormFieldContext({});
    const contextValuesWithoutControlId = {
        ariaLabelledby: joinStrings(parentAriaLabelledby, slotIds.label) || undefined,
        ariaDescribedby: joinStrings(parentAriaDescribedby, ariaDescribedBy) || undefined,
        invalid: !!errorText || !!parentInvalid,
    };
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement("div", { className: clsx(__hideLabel && styles['visually-hidden']) },
            label && (React.createElement("label", { className: styles.label, id: slotIds.label, htmlFor: generatedControlId }, label)),
            !__hideLabel && info && React.createElement("span", { className: styles.info }, info)),
        description && (React.createElement("div", { className: styles.description, id: slotIds.description }, description)),
        React.createElement("div", { className: clsx(styles.controls, __hideLabel && styles['label-hidden']) },
            React.createElement(InternalGrid, { gridDefinition: gridDefinition, disableGutters: __disableGutters },
                React.createElement(FormFieldContext.Provider, { value: Object.assign({ controlId: generatedControlId }, contextValuesWithoutControlId) }, children && React.createElement("div", { className: styles.control }, children)),
                secondaryControl && (React.createElement(FormFieldContext.Provider, { value: contextValuesWithoutControlId },
                    React.createElement("div", { className: styles['secondary-control'] }, secondaryControl))))),
        (constraintText || errorText) && (React.createElement("div", { className: styles.hints },
            errorText && (React.createElement(FormFieldError, { id: slotIds.error, errorIconAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorIconAriaLabel }, errorText)),
            constraintText && (React.createElement(ConstraintText, { id: slotIds.constraint, hasError: !!errorText }, constraintText))))));
}
//# sourceMappingURL=internal.js.map