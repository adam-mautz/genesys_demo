// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { useAppLayoutInternals } from './context';
import customCssProps from '../../internal/generated/custom-css-properties';
import styles from './styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
export default function Main() {
    const { breadcrumbs, content, contentHeader, contentType, disableContentPaddings, dynamicOverlapHeight, hasDrawerViewportOverlay, hasNotificationsContent, isNavigationOpen, isSplitPanelOpen, isToolsOpen, mainElement, splitPanelDisplayed, offsetBottom, footerHeight, splitPanelPosition, } = useAppLayoutInternals();
    const splitPanelHeight = offsetBottom - footerHeight;
    return (React.createElement("div", { className: clsx(styles.container, styles[`content-type-${contentType}`], styles[`split-panel-position-${splitPanelPosition !== null && splitPanelPosition !== void 0 ? splitPanelPosition : 'bottom'}`], {
            [styles['disable-content-paddings']]: disableContentPaddings,
            [styles['has-breadcrumbs']]: breadcrumbs,
            [styles['has-dynamic-overlap-height']]: dynamicOverlapHeight > 0,
            [styles['has-header']]: contentHeader,
            [styles['has-notifications-content']]: hasNotificationsContent,
            [styles['has-split-panel']]: splitPanelDisplayed,
            [styles['is-navigation-open']]: isNavigationOpen,
            [styles['is-tools-open']]: isToolsOpen,
            [styles['is-split-panel-open']]: isSplitPanelOpen,
            [styles.unfocusable]: hasDrawerViewportOverlay,
        }, testutilStyles.content), ref: mainElement, style: {
            [customCssProps.splitPanelHeight]: `${splitPanelHeight}px`,
        } }, content));
}
//# sourceMappingURL=main.js.map