// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalButton from '../button/internal';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
import { useSplitPanelContext } from '../internal/context/split-panel-context';
export function SplitPanelContentSide({ baseProps, splitPanelRef, toggleRef, header, children, resizeHandle, isOpen, cappedSize, i18nStrings, panelHeaderId, onToggle, }) {
    const { topOffset, bottomOffset } = useSplitPanelContext();
    const isRefresh = useVisualRefresh();
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.drawer, styles.root, styles['position-side'], {
            [styles['drawer-closed']]: !isOpen,
        }), style: {
            width: isOpen ? cappedSize : undefined,
            maxWidth: isRefresh ? '100%' : undefined,
        }, ref: splitPanelRef }),
        React.createElement("div", { className: clsx(styles['drawer-content-side'], {
                [styles.refresh]: isRefresh,
            }), style: {
                top: topOffset,
                bottom: bottomOffset,
            }, onClick: () => !isOpen && onToggle(), "aria-labelledby": panelHeaderId, role: "region" },
            isOpen ? (React.createElement("div", { className: styles['slider-wrapper-side'] }, resizeHandle)) : (React.createElement(InternalButton, { className: clsx(styles['open-button'], styles['open-button-side']), iconName: "angle-left", variant: "icon", formAction: "none", ariaLabel: i18nStrings.openButtonAriaLabel, ariaExpanded: isOpen, ref: isRefresh ? null : toggleRef })),
            React.createElement("div", { className: styles['content-side'], "aria-hidden": !isOpen },
                React.createElement("div", { className: clsx(styles['pane-header-wrapper-side']) }, header),
                React.createElement("hr", { className: styles['header-divider'] }),
                React.createElement("div", { className: clsx(styles['pane-content-wrapper-side']) }, children)))));
}
//# sourceMappingURL=side.js.map