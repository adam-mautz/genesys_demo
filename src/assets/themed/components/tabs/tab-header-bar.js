// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { InternalButton } from '../button/internal';
import { useContainerQuery } from '../internal/hooks/container-queries';
import { KeyCode } from '../internal/keycode';
import { onPaginationClick, hasHorizontalOverflow, hasLeftOverflow, hasRightOverflow, scrollIntoView, } from './scroll-utils';
import { hasModifierKeys, isPlainLeftClick } from '../internal/events';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
export function TabHeaderBar({ onChange, activeTabId, tabs, variant, idNamespace, ariaLabel, ariaLabelledby, i18nStrings, }) {
    const headerBarRef = useRef(null);
    const activeTabHeaderRef = useRef(null);
    const leftOverflowButton = useRef(null);
    const isVisualRefresh = useVisualRefresh();
    const [widthChange, containerRef] = useContainerQuery(rect => rect.width);
    const tabRefs = useRef(new Map());
    const [horizontalOverflow, setHorizontalOverflow] = useState(false);
    const [leftOverflow, setLeftOverflow] = useState(false);
    const [rightOverflow, setRightOverflow] = useState(false);
    useEffect(() => {
        if (headerBarRef.current) {
            setHorizontalOverflow(hasHorizontalOverflow(headerBarRef.current, leftOverflowButton));
            setLeftOverflow(hasLeftOverflow(headerBarRef.current));
            setRightOverflow(hasRightOverflow(headerBarRef.current));
        }
    }, [widthChange, tabs]);
    const scrollIntoViewIfPossible = (smooth) => {
        if (!activeTabId) {
            return;
        }
        const activeTabRef = tabRefs.current.get(activeTabId);
        if (activeTabRef && headerBarRef.current) {
            scrollIntoView(activeTabRef, headerBarRef.current, smooth);
        }
    };
    useEffect(() => {
        // Delay scrollIntoView as the position is depending on parent elements
        // (effects are called inside-out in the component tree).
        // Wait one frame to allow parents to complete it's calculation.
        requestAnimationFrame(() => {
            scrollIntoViewIfPossible(false);
        });
        // Non-smooth scrolling should not be called upon activeId change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [horizontalOverflow, widthChange, tabs.length]);
    useEffect(() => {
        scrollIntoViewIfPossible(true);
        // Smooth scrolling should only be called upon activeId change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTabId]);
    useEffect(() => {
        var _a, _b;
        /*
         When the selected tab changes and we are currently already focused on a tab,
         move the focus to the newly selected tab.
        */
        if ((_a = headerBarRef.current) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement)) {
            if (document.activeElement !== activeTabHeaderRef.current) {
                (_b = activeTabHeaderRef.current) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
            }
        }
    }, [activeTabId]);
    const onScroll = () => {
        if (headerBarRef.current) {
            setLeftOverflow(hasLeftOverflow(headerBarRef.current));
            setRightOverflow(hasRightOverflow(headerBarRef.current));
        }
    };
    const classes = clsx({
        [styles['tabs-header']]: true,
        [styles['tabs-header-with-divider']]: variant === 'default' || isVisualRefresh,
    });
    const leftButtonClasses = clsx({
        [styles['pagination-button']]: true,
        [styles['pagination-button-left']]: true,
        [styles['pagination-button-left-scrollable']]: leftOverflow,
    });
    const rightButtonClasses = clsx({
        [styles['pagination-button']]: true,
        [styles['pagination-button-right']]: true,
        [styles['pagination-button-right-scrollable']]: rightOverflow,
    });
    return (
    //converted span to div as list should not be a child of span for HTML validation
    React.createElement("div", { className: classes, ref: containerRef },
        horizontalOverflow && (React.createElement("span", { ref: leftOverflowButton, className: leftButtonClasses },
            React.createElement(InternalButton, { formAction: "none", variant: "icon", iconName: "angle-left", disabled: !leftOverflow, onClick: () => onPaginationClick(headerBarRef, -1), ariaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.scrollLeftAriaLabel }))),
        React.createElement("ul", { role: "tablist", className: styles['tabs-header-list'], "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ref: headerBarRef, onScroll: onScroll }, tabs.map(renderTabHeader)),
        horizontalOverflow && (React.createElement("span", { className: rightButtonClasses },
            React.createElement(InternalButton, { formAction: "none", variant: "icon", iconName: "angle-right", disabled: !rightOverflow, onClick: () => onPaginationClick(headerBarRef, 1), ariaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.scrollRightAriaLabel })))));
    function renderTabHeader(tab) {
        const enabledTabsWithCurrentTab = tabs.filter(tab => !tab.disabled || tab.id === activeTabId);
        const highlightTab = function (enabledTabIndex) {
            const tab = enabledTabsWithCurrentTab[enabledTabIndex];
            if (tab.id === activeTabId) {
                return;
            }
            onChange({ activeTabId: tab.id, activeTabHref: tab.href });
        };
        const handleKeyDown = function (event) {
            const { keyCode } = event;
            const specialKeys = [KeyCode.right, KeyCode.left, KeyCode.end, KeyCode.home, KeyCode.pageUp, KeyCode.pageDown];
            if (hasModifierKeys(event) || specialKeys.indexOf(keyCode) === -1) {
                return;
            }
            event.preventDefault();
            const activeIndex = enabledTabsWithCurrentTab.indexOf(tab);
            switch (keyCode) {
                case KeyCode.right:
                    if (activeIndex + 1 === enabledTabsWithCurrentTab.length) {
                        highlightTab(0);
                    }
                    else {
                        highlightTab(activeIndex + 1);
                    }
                    return;
                case KeyCode.left:
                    if (activeIndex === 0) {
                        highlightTab(enabledTabsWithCurrentTab.length - 1);
                    }
                    else {
                        highlightTab(activeIndex - 1);
                    }
                    return;
                case KeyCode.end:
                    highlightTab(enabledTabsWithCurrentTab.length - 1);
                    return;
                case KeyCode.home:
                    highlightTab(0);
                    return;
                case KeyCode.pageDown:
                    if (rightOverflow) {
                        onPaginationClick(headerBarRef, 1);
                    }
                    return;
                case KeyCode.pageUp:
                    if (leftOverflow) {
                        onPaginationClick(headerBarRef, -1);
                    }
                    return;
            }
        };
        const clickTab = (event) => {
            if (tab.disabled) {
                event.preventDefault();
                return;
            }
            // if the primary mouse button is clicked with a modifier key, the browser will handle opening a new tab
            const specialKey = !isPlainLeftClick(event);
            if (specialKey && tab.href) {
                return;
            }
            event.preventDefault();
            // for browsers that do not focus buttons on button click
            if (!tab.href) {
                const clickedTabRef = tabRefs.current.get(tab.id);
                if (clickedTabRef) {
                    const childElement = clickedTabRef.firstChild;
                    if (childElement && childElement !== document.activeElement) {
                        childElement.focus({ preventScroll: true });
                    }
                }
            }
            if (tab.id === activeTabId) {
                return;
            }
            onChange({ activeTabId: tab.id, activeTabHref: tab.href });
        };
        const classes = clsx({
            [styles['tabs-tab-link']]: true,
            [styles.refresh]: isVisualRefresh,
            [styles['tabs-tab-active']]: activeTabId === tab.id && !tab.disabled,
            [styles['tabs-tab-disabled']]: tab.disabled,
        });
        const commonProps = {
            className: classes,
            role: 'tab',
            'aria-selected': tab.id === activeTabId,
            'aria-controls': `${idNamespace}-${tab.id}-panel`,
            'data-testid': tab.id,
            id: getTabElementId({ namespace: idNamespace, tabId: tab.id }),
            children: React.createElement("span", { className: styles['tabs-tab-label'] }, tab.label),
        };
        if (tab.disabled) {
            commonProps['aria-disabled'] = 'true';
        }
        else {
            commonProps.onClick = clickTab;
        }
        if (tab.id === activeTabId) {
            commonProps.ref = activeTabHeaderRef;
            commonProps.tabIndex = 0;
            commonProps.onKeyDown = (event) => handleKeyDown(event);
        }
        else {
            commonProps.tabIndex = -1;
        }
        let trigger = null;
        if (tab.href) {
            const anchorProps = commonProps;
            anchorProps.href = tab.href;
            trigger = React.createElement("a", Object.assign({}, anchorProps));
        }
        else {
            const buttonProps = commonProps;
            buttonProps.type = 'button';
            if (tab.disabled) {
                buttonProps.disabled = true;
            }
            trigger = React.createElement("button", Object.assign({}, buttonProps));
        }
        return (React.createElement("li", { ref: element => tabRefs.current.set(tab.id, element), className: styles['tabs-tab'], role: "presentation", key: tab.id }, trigger));
    }
}
export function getTabElementId({ namespace, tabId }) {
    return namespace + '-' + tabId;
}
//# sourceMappingURL=tab-header-bar.js.map