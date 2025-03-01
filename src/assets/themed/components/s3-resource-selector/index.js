import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import InternalBox from '../box/internal';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import useForwardFocus from '../internal/hooks/forward-focus';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { S3InContext } from './s3-in-context';
import { S3Modal } from './s3-modal';
import styles from './styles.css.js';
import useBaseComponent from '../internal/hooks/use-base-component';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import { useFormFieldContext } from '../contexts/form-field';
const S3ResourceSelector = React.forwardRef((_a, ref) => {
    var { i18nStrings, alert, resource, viewHref, invalid, selectableItemsTypes = [], inputAriaDescribedby, bucketsVisibleColumns = ['Name', 'CreationDate'], bucketsIsItemDisabled, fetchBuckets, fetchObjects, objectsVisibleColumns = ['Key', 'LastModified', 'Size'], objectsIsItemDisabled, fetchVersions, versionsVisibleColumns = ['ID', 'LastModified', 'Size'], versionsIsItemDisabled, onChange, ariaLabel } = _a, rest = __rest(_a, ["i18nStrings", "alert", "resource", "viewHref", "invalid", "selectableItemsTypes", "inputAriaDescribedby", "bucketsVisibleColumns", "bucketsIsItemDisabled", "fetchBuckets", "fetchObjects", "objectsVisibleColumns", "objectsIsItemDisabled", "fetchVersions", "versionsVisibleColumns", "versionsIsItemDisabled", "onChange", "ariaLabel"]);
    checkSafeUrl('S3ResourceSelector', viewHref);
    const { __internalRootRef } = useBaseComponent('S3ResourceSelector');
    const [modalOpen, setModalOpen] = useState(false);
    const inContextRef = useRef(null);
    const modalWasSubmitted = useRef(false);
    useForwardFocus(ref, inContextRef);
    const { ariaLabelledby, ariaDescribedby } = useFormFieldContext(rest);
    useEffect(() => {
        var _a;
        // Focus uriInput only when modal was submitted.
        // When it was dismissed, the focus naturally goes to previously focused element (browse button)
        if (!modalOpen && modalWasSubmitted.current) {
            modalWasSubmitted.current = false;
            (_a = inContextRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [modalOpen]);
    const baseProps = getBaseProps(rest);
    const modalProps = {
        alert,
        i18nStrings,
        fetchBuckets,
        selectableItemsTypes,
        bucketsVisibleColumns,
        bucketsIsItemDisabled,
        fetchObjects,
        objectsVisibleColumns,
        objectsIsItemDisabled,
        fetchVersions,
        versionsVisibleColumns,
        versionsIsItemDisabled,
        onSubmit: resource => {
            fireNonCancelableEvent(onChange, { resource });
            setModalOpen(false);
            modalWasSubmitted.current = true;
        },
        onDismiss: () => setModalOpen(false),
    };
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className), ref: __internalRootRef, role: "group", "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, "aria-label": ariaLabel }),
        React.createElement(S3InContext, { ref: inContextRef, selectableItemsTypes: selectableItemsTypes, i18nStrings: i18nStrings, resource: resource, viewHref: viewHref, invalid: invalid, inputAriaDescribedby: inputAriaDescribedby, fetchVersions: fetchVersions, onBrowse: () => setModalOpen(true), onChange: (resource, errorText) => fireNonCancelableEvent(onChange, { resource, errorText }) }),
        !modalOpen && alert && (React.createElement(InternalBox, { className: styles.alert, margin: { top: 's' } }, alert)),
        modalOpen && React.createElement(S3Modal, Object.assign({}, modalProps))));
});
applyDisplayName(S3ResourceSelector, 'S3ResourceSelector');
export default S3ResourceSelector;
//# sourceMappingURL=index.js.map