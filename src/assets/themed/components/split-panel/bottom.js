// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import styles from './styles.css.js';
import { useSplitPanelContext } from '../internal/context/split-panel-context';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useResizeObserver } from '../internal/hooks/container-queries';
export function SplitPanelContentBottom({ baseProps, isOpen, state, transitioningElementRef, splitPanelRef, cappedSize, header, resizeHandle, children, appLayoutMaxWidth, panelHeaderId, onToggle, }) {
    const isRefresh = useVisualRefresh();
    const { bottomOffset, leftOffset, rightOffset, disableContentPaddings, contentWrapperPaddings, isMobile, reportHeaderHeight, } = useSplitPanelContext();
    const transitionContentBottomRef = useMergeRefs(splitPanelRef || null, transitioningElementRef);
    const headerRef = useRef(null);
    useResizeObserver(headerRef, entry => reportHeaderHeight(entry.borderBoxHeight));
    useEffect(() => {
        // report empty height when unmounting the panel
        return () => reportHeaderHeight(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const centeredMaxWidthClasses = clsx({
        [styles['pane-bottom-center-align']]: isRefresh,
        [styles['pane-bottom-content-nav-padding']]: contentWrapperPaddings === null || contentWrapperPaddings === void 0 ? void 0 : contentWrapperPaddings.closedNav,
        [styles['pane-bottom-content-tools-padding']]: contentWrapperPaddings === null || contentWrapperPaddings === void 0 ? void 0 : contentWrapperPaddings.closedTools,
    });
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles.drawer, styles['position-bottom'], {
            [styles['drawer-closed']]: !isOpen,
            [styles['drawer-mobile']]: isMobile,
            [styles['drawer-disable-content-paddings']]: disableContentPaddings,
            [styles.animating]: isRefresh && (state === 'entering' || state === 'exiting'),
            [styles.refresh]: isRefresh,
        }), onClick: () => !isOpen && onToggle(), style: {
            bottom: bottomOffset,
            left: leftOffset,
            right: rightOffset,
            height: isOpen ? cappedSize : undefined,
        }, ref: transitionContentBottomRef }),
        isOpen && React.createElement("div", { className: styles['slider-wrapper-bottom'] }, resizeHandle),
        React.createElement("div", { className: styles['drawer-content-bottom'], "aria-labelledby": panelHeaderId, role: "region" },
            React.createElement("div", { className: clsx(styles['pane-header-wrapper-bottom'], centeredMaxWidthClasses), ref: headerRef }, header),
            React.createElement("div", { className: clsx(styles['content-bottom'], centeredMaxWidthClasses), "aria-hidden": !isOpen },
                React.createElement("div", { className: clsx({ [styles['content-bottom-max-width']]: isRefresh }), style: appLayoutMaxWidth }, children)))));
}
//# sourceMappingURL=bottom.js.map