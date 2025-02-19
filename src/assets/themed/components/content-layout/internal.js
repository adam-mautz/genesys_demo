import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { useAppLayoutContext } from '../internal/context/app-layout-context';
import { useDynamicOverlap } from '../internal/hooks/use-dynamic-overlap';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
export default function InternalContentLayout(_a) {
    var { children, disableOverlap, header, __internalRootRef } = _a, rest = __rest(_a, ["children", "disableOverlap", "header", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const rootElement = useRef(null);
    const mergedRef = useMergeRefs(rootElement, __internalRootRef);
    const isVisualRefresh = useVisualRefresh();
    const { hasBreadcrumbs } = useAppLayoutContext();
    const overlapElement = useDynamicOverlap();
    /**
     * Disable the overlap if the component is missing either a header or child
     * content. If the component is not using visual refresh then the overlap
     * will not be displayed at all. This is handled in the CSS not the JavaScript.
     */
    const isOverlapDisabled = !children || !header || disableOverlap;
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.layout, {
            [styles['is-overlap-disabled']]: isOverlapDisabled,
            [styles['is-visual-refresh']]: isVisualRefresh,
        }), ref: mergedRef }),
        React.createElement("div", { className: clsx(styles.background, { [styles['is-overlap-disabled']]: isOverlapDisabled }, 'awsui-context-content-header'), ref: overlapElement }),
        header && (React.createElement("div", { className: clsx(styles.header, { [styles['has-breadcrumbs']]: isVisualRefresh && hasBreadcrumbs }, 'awsui-context-content-header') }, header)),
        React.createElement("div", { className: styles.content }, children)));
}
//# sourceMappingURL=internal.js.map