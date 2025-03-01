// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import { AppLayoutButton, CloseButton, togglesConfig } from '../toggles';
import testutilStyles from '../test-classes/styles.css.js';
import styles from './styles.css.js';
// We are using two landmarks per drawer, i.e. two NAVs and two ASIDEs, because of several
// known bugs in NVDA that cause focus changes within a container to sometimes not be
// announced. As a result, we use one region for the open button and one region for the
// actual drawer content, always hiding the other one when it's not visible.
// An alternative solution to follow a more classic implementation here to only have one
// button that triggers the opening/closing of the drawer also did not work due to another
// series of bugs in NVDA (together with Firefox) which prevent the changed expanded state
// from being announced.
// Even with this workaround in place, the announcement of the close button when opening a
// panel in NVDA is not working correctly. The suspected root cause is one of the bugs below
// as well.
// Relevant tickets:
// * https://github.com/nvaccess/nvda/issues/6606
// * https://github.com/nvaccess/nvda/issues/5825
// * https://github.com/nvaccess/nvda/issues/5247
// * https://github.com/nvaccess/nvda/pull/8869 (reverted PR that was going to fix it)
export const Drawer = React.forwardRef(({ contentClassName, toggleClassName, closeClassName, width, type, toggleRefs, topOffset, bottomOffset, ariaLabels, drawersAriaLabels, children, isOpen, isMobile, onToggle, onClick, onLoseFocus, drawers, resizeHandle, }, ref) => {
    const openButtonWrapperRef = useRef(null);
    const { TagName, iconName, getLabels } = togglesConfig[type];
    const { mainLabel, closeLabel, openLabel } = getLabels(ariaLabels);
    const drawerContentWidthOpen = isMobile ? undefined : width;
    const drawerContentWidth = isOpen ? drawerContentWidthOpen : undefined;
    const getDrawersLabels = (labels = {}) => ({
        drawerMainLabel: labels === null || labels === void 0 ? void 0 : labels.content,
        drawerOpenLabel: labels === null || labels === void 0 ? void 0 : labels.triggerButton,
        drawerCloseLabel: labels === null || labels === void 0 ? void 0 : labels.closeButton,
    });
    const { drawerMainLabel, drawerCloseLabel } = getDrawersLabels(drawersAriaLabels);
    const regularOpenButton = (React.createElement(TagName, { ref: openButtonWrapperRef, "aria-label": mainLabel, className: styles.toggle, "aria-hidden": isOpen },
        React.createElement(AppLayoutButton, { ref: toggleRefs.toggle, className: toggleClassName, iconName: iconName, ariaLabel: openLabel, onClick: () => onToggle(true), ariaExpanded: false })));
    return (React.createElement("div", { ref: ref, className: clsx(styles.drawer, {
            [styles['drawer-closed']]: !isOpen,
            [testutilStyles['drawer-closed']]: !isOpen,
            [styles['drawer-mobile']]: isMobile,
        }), style: { width: drawerContentWidth }, onBlur: onLoseFocus
            ? e => {
                if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                    onLoseFocus(e);
                }
            }
            : undefined, onClick: event => {
            var _a;
            if (onClick) {
                onClick(event);
            }
            if (!isOpen) {
                // to prevent calling onToggle from the drawer when it's called from the toggle button
                if (openButtonWrapperRef.current === event.target ||
                    !((_a = openButtonWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                    onToggle(true);
                }
            }
        } },
        React.createElement("div", { style: { width: drawerContentWidth, top: topOffset, bottom: bottomOffset }, className: clsx(styles['drawer-content'], contentClassName) },
            !isMobile && regularOpenButton,
            resizeHandle,
            React.createElement(TagName, { "aria-label": drawers ? drawerMainLabel : mainLabel, "aria-hidden": !isOpen },
                React.createElement(CloseButton, { ref: toggleRefs.close, className: closeClassName, ariaLabel: drawers ? drawerCloseLabel : closeLabel, onClick: () => {
                        onToggle(false);
                        drawers === null || drawers === void 0 ? void 0 : drawers.onChange({ activeDrawerId: undefined });
                    } }),
                children))));
});
export function DrawerTriggersBar({ isMobile, topOffset, bottomOffset, drawers, contentClassName, toggleClassName, }) {
    var _a;
    return (React.createElement("div", { className: clsx(styles.drawer, styles['drawer-closed'], testutilStyles['drawer-closed'], {
            [styles['drawer-mobile']]: isMobile,
        }) },
        React.createElement("div", { style: { top: topOffset, bottom: bottomOffset }, className: clsx(styles['drawer-content'], styles['non-interactive']) }, !isMobile && (React.createElement("aside", { "aria-label": drawers === null || drawers === void 0 ? void 0 : drawers.ariaLabel, className: clsx(styles['drawer-triggers'], contentClassName) }, (_a = drawers === null || drawers === void 0 ? void 0 : drawers.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
            var _a;
            return (React.createElement(AppLayoutButton, { className: clsx(toggleClassName, styles.trigger, styles['trigger-drawer'], drawers.activeDrawerId === item.id && styles.selected), key: `drawer-trigger-${index}`, iconName: item.trigger.iconName, iconSvg: item.trigger.iconSvg, ariaLabel: (_a = item.ariaLabels) === null || _a === void 0 ? void 0 : _a.triggerButton, onClick: () => drawers.onChange({ activeDrawerId: item.id }), ariaExpanded: drawers.activeDrawerId !== undefined }));
        }))))));
}
//# sourceMappingURL=index.js.map