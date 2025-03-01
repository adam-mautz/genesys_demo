import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import LiveRegion from '../internal/components/live-region/index';
import { TabButton } from './tab-button';
import { InternalButton } from '../button/internal';
import { useContainerQuery } from '../internal/hooks/container-queries/use-container-query';
function InternalStatusBar({ languageLabel, cursorPosition, paneStatus, onErrorPaneToggle, onWarningPaneToggle, onTabFocus, onTabBlur, errorsTabRef, warningsTabRef, isTabFocused, paneId, onPreferencesOpen, i18nStrings, errorCount, warningCount, leftBarRef, isVirtual, minifyCounters, isRefresh, }) {
    const errorText = `${i18nStrings.errorsTab}: ${errorCount}`;
    const warningText = `${i18nStrings.warningsTab}: ${warningCount}`;
    // Virtual status bar is inaccessible for screen readers and keyboard interactions.
    return (React.createElement("div", { className: clsx(styles['status-bar'], {
            [styles['status-bar-with-hidden-pane']]: paneStatus === 'hidden',
            [styles['status-bar-virtual']]: isVirtual,
        }), "aria-hidden": isVirtual },
        React.createElement("div", { className: clsx(styles['status-bar__left'], {
                [styles['status-bar__left-virtual']]: isVirtual,
            }), ref: leftBarRef },
            React.createElement("span", { className: styles['status-bar__language-mode'] }, languageLabel),
            React.createElement("span", { className: styles['status-bar__cursor-position'] }, cursorPosition),
            React.createElement("div", { role: "tablist" },
                React.createElement(TabButton, { text: minifyCounters ? ` ${errorCount}` : errorText, className: styles['tab-button--errors'], iconName: "status-negative", disabled: errorCount === 0 || isVirtual, active: paneStatus === 'error', onClick: onErrorPaneToggle, onFocus: onTabFocus, onBlur: onTabBlur, ref: errorsTabRef, ariaLabel: errorText, paneId: paneId, isRefresh: isRefresh }),
                React.createElement("span", { className: styles['tab-button--divider'] }),
                React.createElement(TabButton, { text: minifyCounters ? ` ${warningCount}` : warningText, className: styles['tab-button--warnings'], iconName: "status-warning", disabled: warningCount === 0 || isVirtual, active: paneStatus === 'warning', onClick: onWarningPaneToggle, onFocus: onTabFocus, onBlur: onTabBlur, ref: warningsTabRef, tabIndex: paneStatus === 'error' && isTabFocused ? -1 : undefined, ariaHidden: paneStatus === 'error' && isTabFocused ? true : undefined, ariaLabel: warningText, paneId: paneId, isRefresh: isRefresh })),
            React.createElement(LiveRegion, { assertive: true },
                React.createElement("span", null,
                    errorText,
                    " "),
                React.createElement("span", null, warningText))),
        React.createElement("div", { className: styles['status-bar__right'] },
            React.createElement("div", { className: styles['status-bar__cog-button'] },
                React.createElement(InternalButton, { disabled: isVirtual, formAction: "none", variant: "icon", iconName: "settings", iconAlt: "Settings", ariaLabel: i18nStrings.preferencesButtonAriaLabel, onClick: onPreferencesOpen, __nativeAttributes: {
                        tabIndex: paneStatus !== 'hidden' && isTabFocused ? -1 : undefined,
                        'aria-hidden': paneStatus !== 'hidden' && isTabFocused ? true : undefined,
                    } })))));
}
export const StatusBar = (_a) => {
    var { errorsTabRef, warningsTabRef } = _a, restProps = __rest(_a, ["errorsTabRef", "warningsTabRef"]);
    // create a virtual status bar, in order to calculate the width with full tab button text
    // and decide if tab button text needs to be reduced
    const [realWidth, statusLeftBarRef] = useContainerQuery(rect => rect.width);
    const [virtualWidth, virtualStatusLeftBarRef] = useContainerQuery(rect => rect.width);
    const minifyCounters = virtualWidth !== null && realWidth !== null && virtualWidth > realWidth;
    return (React.createElement(React.Fragment, null,
        React.createElement(InternalStatusBar, Object.assign({}, restProps, { isVirtual: false, leftBarRef: statusLeftBarRef, errorsTabRef: errorsTabRef, warningsTabRef: warningsTabRef, minifyCounters: minifyCounters })),
        React.createElement(InternalStatusBar, Object.assign({}, restProps, { isVirtual: true, leftBarRef: virtualStatusLeftBarRef, minifyCounters: false }))));
};
//# sourceMappingURL=status-bar.js.map