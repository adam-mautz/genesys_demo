// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { InternalButton } from '../../button/internal';
import { useAppLayoutInternals } from './context';
import TriggerButton from './trigger-button';
import styles from './styles.css.js';
import splitPanelStyles from '../../split-panel/styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
import { Transition } from '../../internal/components/transition';
import customCssProps from '../../internal/generated/custom-css-properties';
/**
 * The Tools component consists of the following elements:
 * the container, or root element, that sits as a direct child to the Layout grid definition;
 * the split panel, which exists only if there is a split panel in side position;
 * the tools, or drawer, that contains the hide tools form and the children passed through the API;
 * the show tools form that contains the triggers for both the drawer and the
 * split panel in large viewports;
 */
export default function Tools({ children }) {
    const { ariaLabels, disableBodyScroll, drawers, handleSplitPanelClick, handleToolsClick, hasDefaultToolsWidth, hasDrawerViewportOverlay, isMobile, isSplitPanelOpen, isToolsOpen, loseToolsFocus, splitPanelDisplayed, splitPanelPosition, splitPanelRefs, splitPanelToggle, tools, toolsHide, toolsRefs, toolsWidth, } = useAppLayoutInternals();
    const hasSplitPanel = getSplitPanelStatus(splitPanelDisplayed, splitPanelPosition);
    const hasToolsForm = getToolsFormStatus(hasSplitPanel, isMobile, isSplitPanelOpen, isToolsOpen, toolsHide);
    const hasToolsFormPersistence = getToolsFormPersistence(hasSplitPanel, isSplitPanelOpen, isToolsOpen, toolsHide);
    const isUnfocusable = hasDrawerViewportOverlay && !isToolsOpen;
    /**
     * If the drawers property is defined the Tools and SplitPanel will be mounted and rendered
     * by the Drawers component.
     */
    if ((toolsHide && !hasSplitPanel) || drawers) {
        return null;
    }
    return (React.createElement(Transition, { in: isToolsOpen !== null && isToolsOpen !== void 0 ? isToolsOpen : false }, (state, transitionEventsRef) => {
        var _a, _b, _c;
        return (React.createElement("div", { className: clsx(styles['tools-container'], {
                [styles['disable-body-scroll']]: disableBodyScroll,
                [styles.unfocusable]: isUnfocusable,
                [testutilStyles['drawer-closed']]: !isToolsOpen,
            }), style: {
                [customCssProps.toolsAnimationStartingOpacity]: `${hasSplitPanel && isSplitPanelOpen ? 1 : 0}`,
                // Overwrite the default tools width (depends on breakpoints) only when the `toolsWidth` property has been set.
                [customCssProps.toolsWidth]: hasDefaultToolsWidth ? '' : `${toolsWidth}px`,
            }, onBlur: e => {
                if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                    loseToolsFocus();
                }
            } },
            children,
            !toolsHide && (React.createElement("aside", { "aria-hidden": !isToolsOpen ? true : false, "aria-label": (_a = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tools) !== null && _a !== void 0 ? _a : undefined, className: clsx(styles.tools, {
                    [styles.animating]: state === 'entering',
                    [styles['has-tools-form-persistence']]: hasToolsFormPersistence,
                    [styles['is-tools-open']]: isToolsOpen,
                }, testutilStyles.tools), ref: state !== 'exiting' ? transitionEventsRef : undefined },
                React.createElement("div", { className: clsx(styles['animated-content']) },
                    React.createElement("div", { className: clsx(styles['hide-tools']) },
                        React.createElement(InternalButton, { ariaLabel: (_b = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.toolsClose) !== null && _b !== void 0 ? _b : undefined, iconName: isMobile ? 'close' : 'angle-right', onClick: () => handleToolsClick(false), variant: "icon", formAction: "none", className: testutilStyles['tools-close'], ref: toolsRefs.close })),
                    tools))),
            !isMobile && (React.createElement("aside", { "aria-hidden": !hasToolsForm ? true : false, "aria-label": (_c = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tools) !== null && _c !== void 0 ? _c : undefined, className: clsx(styles['show-tools'], {
                    [styles.animating]: state === 'exiting',
                    [styles['has-tools-form']]: hasToolsForm,
                    [styles['has-tools-form-persistence']]: hasToolsFormPersistence,
                }), ref: state === 'exiting' ? transitionEventsRef : undefined },
                !toolsHide && (React.createElement(TriggerButton, { ariaLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.toolsToggle, iconName: "status-info", onClick: () => handleToolsClick(!isToolsOpen), selected: hasSplitPanel && isToolsOpen, className: testutilStyles['tools-toggle'], ref: toolsRefs.toggle })),
                hasSplitPanel && splitPanelToggle.displayed && (React.createElement(TriggerButton, { ariaLabel: splitPanelToggle.ariaLabel, iconName: "view-vertical", onClick: () => handleSplitPanelClick(), selected: hasSplitPanel && isSplitPanelOpen, className: splitPanelStyles['open-button'], ref: splitPanelRefs.toggle }))))));
    }));
}
/**
 * Determine the default state of the Tools component. Mobile viewports should be
 * closed by default under all circumstances. If the toolsOpen prop has not been
 * set then it should be closed as well. Otherwise, default to the toolsOpen prop.
 */
export function getToolsDefaultState(isMobile, stateFromProps) {
    let isToolsOpen;
    if (isMobile || stateFromProps === undefined) {
        isToolsOpen = false;
    }
    else {
        isToolsOpen = stateFromProps;
    }
    return isToolsOpen;
}
/**
 * This simple function returns the presence of the split panel as a child of the
 * Tools component. It must exist and be in side position.
 */
function getSplitPanelStatus(splitPanelDisplayed, splitPanelPosition) {
    return splitPanelDisplayed && splitPanelPosition === 'side' ? true : false;
}
/**
 * By default the Tools form is styled as display: none; This behavior should
 * be unchanged in mobile viewports where the Tools form is always suppressed.
 * In large viewports, however the Tools form and its corresponding buttons
 * should be present in the UI under the below circumstances.
 */
function getToolsFormStatus(hasSplitPanel, isMobile, isSplitPanelOpen, isToolsOpen, toolsHide) {
    let hasToolsForm = false;
    if (!isMobile) {
        // Both the Split Panel and Tools button are needed
        if (hasSplitPanel && !toolsHide) {
            hasToolsForm = true;
        }
        // The Split Panel button is needed
        if (hasSplitPanel && !isSplitPanelOpen && toolsHide) {
            hasToolsForm = true;
        }
        // The Tools button is needed
        if (!hasSplitPanel && !toolsHide && !isToolsOpen) {
            hasToolsForm = true;
        }
    }
    return hasToolsForm;
}
/**
 * Under two scenarios the Tools form that contains the triggers
 * for the Tools content and the Split Panel may be persistent
 * in the UI (as opposed to disappearing when one of the drawers
 * is open). This will also add a white background as opposed to the
 * default transparent background. The buttons will present and in a
 * selected / not selected state.
 */
function getToolsFormPersistence(hasSplitPanel, isSplitPanelOpen, isToolsOpen, toolsHide) {
    let hasToolsFormPersistence = false;
    // Both Tools and Split Panel exist and one or both is open
    if (hasSplitPanel && !toolsHide && (isSplitPanelOpen || isToolsOpen)) {
        hasToolsFormPersistence = true;
    }
    return hasToolsFormPersistence;
}
//# sourceMappingURL=tools.js.map