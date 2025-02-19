// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { InternalButton } from '../../button/internal';
import { MobileTriggers as DrawersMobileTriggers } from './drawers';
import { useAppLayoutInternals } from './context';
import styles from './styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
/**
 * The CSS class 'awsui-context-content-header' needs to be added to the root element so
 * that the design tokens used are overridden with the appropriate values.
 */
export default function AppBar() {
    var _a, _b, _c;
    const { ariaLabels, breadcrumbs, contentHeader, contentType, drawers, dynamicOverlapHeight, handleNavigationClick, handleToolsClick, hasDrawerViewportOverlay, hasNotificationsContent, hasStickyBackground, isMobile, navigationHide, isNavigationOpen, isToolsOpen, toolsHide, navigationRefs, toolsRefs, } = useAppLayoutInternals();
    if (navigationHide && !breadcrumbs && toolsHide && !drawers) {
        return null;
    }
    return (React.createElement("section", { "aria-hidden": !isMobile && !breadcrumbs ? true : undefined, className: clsx(styles.appbar, {
            [styles['has-breadcrumbs']]: breadcrumbs,
            [styles.unfocusable]: hasDrawerViewportOverlay,
            [testutilStyles['mobile-bar']]: isMobile,
        }, 'awsui-context-content-header') },
        !navigationHide && isMobile && (React.createElement("nav", { className: clsx(styles['appbar-nav'], { [testutilStyles['drawer-closed']]: !isNavigationOpen }), "aria-hidden": isNavigationOpen },
            React.createElement(InternalButton, { ariaLabel: (_a = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.navigationToggle) !== null && _a !== void 0 ? _a : undefined, ariaExpanded: isNavigationOpen ? undefined : false, iconName: "menu", formAction: "none", onClick: () => handleNavigationClick(true), variant: "icon", className: testutilStyles['navigation-toggle'], ref: navigationRefs.toggle, disabled: hasDrawerViewportOverlay, __nativeAttributes: { 'aria-haspopup': isNavigationOpen ? undefined : true } }))),
        breadcrumbs && (React.createElement("div", { className: clsx(styles.breadcrumbs, styles[`content-type-${contentType}`], testutilStyles.breadcrumbs, {
                [styles['has-dynamic-overlap-height']]: dynamicOverlapHeight > 0,
                [styles['has-header']]: contentHeader,
                [styles['has-notifications-content']]: hasNotificationsContent,
                [styles['has-sticky-background']]: hasStickyBackground,
            }) }, breadcrumbs)),
        isMobile && !toolsHide && !drawers && (React.createElement("aside", { className: clsx(styles['appbar-tools'], { [testutilStyles['drawer-closed']]: !isToolsOpen }), "aria-hidden": isToolsOpen, "aria-label": (_b = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tools) !== null && _b !== void 0 ? _b : undefined },
            React.createElement(InternalButton, { className: testutilStyles['tools-toggle'], ariaExpanded: isToolsOpen, disabled: hasDrawerViewportOverlay, ariaLabel: (_c = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.toolsToggle) !== null && _c !== void 0 ? _c : undefined, iconName: "status-info", formAction: "none", onClick: () => handleToolsClick(true), variant: "icon", ref: toolsRefs.toggle, __nativeAttributes: { 'aria-haspopup': true } }))),
        React.createElement(DrawersMobileTriggers, null)));
}
//# sourceMappingURL=app-bar.js.map