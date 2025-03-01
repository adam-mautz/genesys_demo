import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { fireNonCancelableEvent } from '../internal/events';
import { getBaseProps } from '../internal/base-component';
import InternalBox from '../box/internal';
import { InternalButton } from '../button/internal';
import InternalModal from '../modal/internal';
import InternalSpaceBetween from '../space-between/internal';
import { copyPreferences, mergePreferences, ModalContentLayout, PageSizePreference, WrapLinesPreference, StripedRowsPreference, ContentDensityPreference, CustomPreference, } from './utils';
import VisibleContentPreference from './visible-content';
import checkControlled from '../internal/hooks/check-controlled';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import ContentDisplayPreference from './content-display';
import { warnOnce } from '../internal/logging';
const componentName = 'CollectionPreferences';
export default function CollectionPreferences(_a) {
    var { title, confirmLabel, cancelLabel, disabled = false, onConfirm, onCancel, visibleContentPreference, contentDisplayPreference, pageSizePreference, wrapLinesPreference, stripedRowsPreference, contentDensityPreference, preferences, customPreference } = _a, rest = __rest(_a, ["title", "confirmLabel", "cancelLabel", "disabled", "onConfirm", "onCancel", "visibleContentPreference", "contentDisplayPreference", "pageSizePreference", "wrapLinesPreference", "stripedRowsPreference", "contentDensityPreference", "preferences", "customPreference"]);
    const { __internalRootRef } = useBaseComponent(componentName);
    checkControlled(componentName, 'preferences', preferences, 'onConfirm', onConfirm);
    const baseProps = getBaseProps(rest);
    const [modalVisible, setModalVisible] = useState(false);
    const [temporaryPreferences, setTemporaryPreferences] = useState(copyPreferences(preferences || {}));
    const triggerRef = useRef(null);
    const dialogPreviouslyOpen = useRef(false);
    useEffect(() => {
        if (!modalVisible) {
            dialogPreviouslyOpen.current && triggerRef.current && triggerRef.current.focus();
        }
        else {
            dialogPreviouslyOpen.current = true;
        }
    }, [modalVisible]);
    const onConfirmListener = () => {
        setModalVisible(false);
        fireNonCancelableEvent(onConfirm, temporaryPreferences);
    };
    const onCancelListener = () => {
        fireNonCancelableEvent(onCancel, {});
        setModalVisible(false);
        setTemporaryPreferences(copyPreferences(preferences || {}));
    };
    const hasContentOnTheLeft = !!(pageSizePreference ||
        wrapLinesPreference ||
        stripedRowsPreference ||
        contentDensityPreference ||
        customPreference);
    const hasContentOnTheRight = !!(visibleContentPreference || contentDisplayPreference);
    const onChange = (changedPreferences) => setTemporaryPreferences(mergePreferences(changedPreferences, temporaryPreferences));
    if (visibleContentPreference && contentDisplayPreference) {
        warnOnce(componentName, 'You provided both `visibleContentPreference` and `contentDisplayPreference` props. `visibleContentPreference` will be ignored and only `contentDisplayPreference` will be rendered.');
    }
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement(InternalButton, { ref: triggerRef, className: styles['trigger-button'], disabled: disabled, ariaLabel: title, onClick: () => {
                setTemporaryPreferences(copyPreferences(preferences || {}));
                setModalVisible(true);
            }, variant: "icon", iconName: "settings", formAction: "none" }),
        !disabled && modalVisible && (React.createElement(InternalModal, { className: styles['modal-root'], visible: true, header: title, footer: React.createElement(InternalBox, { float: "right" },
                React.createElement(InternalSpaceBetween, { direction: "horizontal", size: "xs" },
                    React.createElement(InternalButton, { className: styles['cancel-button'], variant: "link", formAction: "none", onClick: onCancelListener }, cancelLabel),
                    React.createElement(InternalButton, { className: styles['confirm-button'], variant: "primary", formAction: "none", onClick: onConfirmListener }, confirmLabel))), closeAriaLabel: cancelLabel, size: hasContentOnTheLeft && hasContentOnTheRight ? 'large' : 'medium', onDismiss: onCancelListener },
            React.createElement(ModalContentLayout, { left: hasContentOnTheLeft && (React.createElement(InternalSpaceBetween, { size: "l" },
                    pageSizePreference && (React.createElement(PageSizePreference, Object.assign({ value: temporaryPreferences.pageSize }, pageSizePreference, { onChange: pageSize => onChange({ pageSize }) }))),
                    wrapLinesPreference && (React.createElement(WrapLinesPreference, Object.assign({ value: temporaryPreferences.wrapLines }, wrapLinesPreference, { onChange: wrapLines => onChange({ wrapLines }) }))),
                    stripedRowsPreference && (React.createElement(StripedRowsPreference, Object.assign({ value: temporaryPreferences.stripedRows }, stripedRowsPreference, { onChange: stripedRows => onChange({ stripedRows }) }))),
                    contentDensityPreference && (React.createElement(ContentDensityPreference, Object.assign({ value: temporaryPreferences.contentDensity }, contentDensityPreference, { onChange: contentDensity => onChange({ contentDensity }) }))),
                    customPreference && (React.createElement(CustomPreference, { value: temporaryPreferences.custom, customPreference: customPreference, onChange: custom => onChange({ custom }) })))), right: contentDisplayPreference ? (React.createElement(ContentDisplayPreference, Object.assign({}, contentDisplayPreference, { value: temporaryPreferences.contentDisplay, onChange: contentDisplay => onChange({ contentDisplay }) }))) : (visibleContentPreference && (React.createElement(VisibleContentPreference, Object.assign({ value: temporaryPreferences.visibleContent }, visibleContentPreference, { onChange: visibleItems => onChange({ visibleContent: visibleItems }) })))) })))));
}
applyDisplayName(CollectionPreferences, componentName);
//# sourceMappingURL=index.js.map