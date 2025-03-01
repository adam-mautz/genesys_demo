import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { getBaseProps } from '../internal/base-component';
import { useAppLayoutContext } from '../internal/context/app-layout-context';
import { StickyHeaderContext, useStickyHeader } from './use-sticky-header';
import { useDynamicOverlap } from '../internal/hooks/use-dynamic-overlap';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useMobile } from '../internal/hooks/use-mobile';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
export default function InternalContainer(_a) {
    var { header, footer, children, variant = 'default', disableHeaderPaddings = false, disableContentPaddings = false, fitHeight, __stickyOffset, __stickyHeader = false, __internalRootRef = null, __disableFooterDivider = false, __disableFooterPaddings = false, __hiddenContent = false, __headerRef, __headerId, __darkHeader = false, __disableStickyMobile = true } = _a, restProps = __rest(_a, ["header", "footer", "children", "variant", "disableHeaderPaddings", "disableContentPaddings", "fitHeight", "__stickyOffset", "__stickyHeader", "__internalRootRef", "__disableFooterDivider", "__disableFooterPaddings", "__hiddenContent", "__headerRef", "__headerId", "__darkHeader", "__disableStickyMobile"]);
    const isMobile = useMobile();
    const baseProps = getBaseProps(restProps);
    const rootRef = useRef(null);
    const headerRef = useRef(null);
    const { isSticky, isStuck, stickyStyles } = useStickyHeader(rootRef, headerRef, __stickyHeader, __stickyOffset, __disableStickyMobile);
    const { setHasStickyBackground } = useAppLayoutContext();
    const isRefresh = useVisualRefresh();
    const hasDynamicHeight = isRefresh && variant === 'full-page';
    const overlapElement = useDynamicOverlap({ disabled: !hasDynamicHeight || !__darkHeader });
    const mergedRef = useMergeRefs(rootRef, __internalRootRef);
    const headerMergedRef = useMergeRefs(headerRef, overlapElement, __headerRef);
    const headerIdProp = __headerId ? { id: __headerId } : {};
    /**
     * The visual refresh AppLayout component needs to know if a child component
     * has a high contrast sticky header. This is to make sure the background element
     * stays in the same vertical position as the header content.
     */
    useEffect(() => {
        const shouldUpdateStickyBackground = isSticky && variant === 'full-page' && setHasStickyBackground;
        if (shouldUpdateStickyBackground) {
            setHasStickyBackground(true);
        }
        return () => {
            if (shouldUpdateStickyBackground) {
                setHasStickyBackground(false);
            }
        };
    }, [isSticky, setHasStickyBackground, variant]);
    // The container is only sticky on mobile if it is the header for the table.
    // In this case we don't want the container to have sticky styles, as only the table header row will show as stuck on scroll.
    const shouldHaveStickyStyles = isSticky && !isMobile;
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles[`variant-${variant}`], fitHeight && styles['fit-height'], shouldHaveStickyStyles && [styles['sticky-enabled']]), ref: mergedRef }),
        header && (React.createElement(StickyHeaderContext.Provider, { value: { isStuck } },
            React.createElement("div", Object.assign({ className: clsx(styles.header, styles[`header-variant-${variant}`], {
                    [styles['header-sticky-disabled']]: __stickyHeader && !isSticky,
                    [styles['header-sticky-enabled']]: isSticky,
                    [styles['header-dynamic-height']]: hasDynamicHeight,
                    [styles['header-stuck']]: isStuck,
                    [styles['with-paddings']]: !disableHeaderPaddings,
                    [styles['with-hidden-content']]: !children || __hiddenContent,
                }) }, headerIdProp, stickyStyles, { ref: headerMergedRef }), __darkHeader ? (React.createElement("div", { className: clsx(styles['dark-header'], 'awsui-context-content-header') }, header)) : (header)))),
        React.createElement("div", { className: clsx(styles.content, {
                [styles['with-paddings']]: !disableContentPaddings,
            }) }, children),
        footer && (React.createElement("div", { className: clsx(styles.footer, {
                [styles['with-divider']]: !__disableFooterDivider,
                [styles['with-paddings']]: !__disableFooterPaddings,
            }) }, footer))));
}
//# sourceMappingURL=internal.js.map