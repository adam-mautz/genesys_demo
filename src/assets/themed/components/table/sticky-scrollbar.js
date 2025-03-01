// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef } from 'react';
import { useAppLayoutContext } from '../internal/context/app-layout-context';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useStickyScrollbar } from './use-sticky-scrollbar';
import styles from './styles.css.js';
export default forwardRef(StickyScrollbar);
function StickyScrollbar({ wrapperRef, tableRef, onScroll }, ref) {
    const scrollbarRef = React.useRef(null);
    const scrollbarContentRef = React.useRef(null);
    const mergedRef = useMergeRefs(ref, scrollbarRef);
    /**
     * Use the appropriate AppLayout context (Classic or Visual Refresh) to determine
     * the offsetBottom value to be used in the useStickyScrollbar hook.
     */
    const { stickyOffsetBottom } = useAppLayoutContext();
    useStickyScrollbar(scrollbarRef, scrollbarContentRef, tableRef, wrapperRef, stickyOffsetBottom);
    return (React.createElement("div", { ref: mergedRef, className: styles['sticky-scrollbar'], onScroll: onScroll },
        React.createElement("div", { ref: scrollbarContentRef, className: styles['sticky-scrollbar-content'] })));
}
//# sourceMappingURL=sticky-scrollbar.js.map