import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import useBaseComponent from '../internal/hooks/use-base-component';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useReducedMotion, useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { getBaseProps } from '../internal/base-component';
import { focusFlashById } from './flash';
import { isDevelopment } from '../internal/is-development';
import { warnOnce } from '../internal/logging';
export const componentName = 'Flashbar';
// Common logic for collapsible and non-collapsible Flashbar
export function useFlashbar(_a) {
    var { items, onItemsAdded, onItemsChanged, onItemsRemoved } = _a, restProps = __rest(_a, ["items", "onItemsAdded", "onItemsChanged", "onItemsRemoved"]);
    const { __internalRootRef } = useBaseComponent(componentName);
    const allItemsHaveId = useMemo(() => items.every(item => 'id' in item), [items]);
    const baseProps = getBaseProps(restProps);
    const ref = useRef(null);
    const [breakpoint, breakpointRef] = useContainerBreakpoints(['xs']);
    const mergedRef = useMergeRefs(ref, breakpointRef, __internalRootRef);
    const isReducedMotion = useReducedMotion(breakpointRef);
    const isVisualRefresh = useVisualRefresh();
    const [previousItems, setPreviousItems] = useState(items);
    const [nextFocusId, setNextFocusId] = useState(null);
    if (isDevelopment) {
        if (items === null || items === void 0 ? void 0 : items.some(item => item.ariaRole === 'alert' && !item.id)) {
            warnOnce('Flashbar', `You provided \`ariaRole="alert"\` for a flashbar item without providing an \`id\`. Focus will not be moved to the newly added flash message.`);
        }
    }
    // Track new or removed item IDs in state to only trigger focus changes for newly added items.
    // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
    if (items) {
        const newItems = items.filter(({ id }) => id && !previousItems.some(item => item.id === id));
        const removedItems = previousItems.filter(({ id }) => id && !items.some(item => item.id === id));
        if (newItems.length > 0 || removedItems.length > 0) {
            setPreviousItems(items);
            onItemsAdded === null || onItemsAdded === void 0 ? void 0 : onItemsAdded(newItems);
            onItemsRemoved === null || onItemsRemoved === void 0 ? void 0 : onItemsRemoved(removedItems);
            onItemsChanged === null || onItemsChanged === void 0 ? void 0 : onItemsChanged({ allItemsHaveId, isReducedMotion });
            const newFocusItems = newItems.filter(({ ariaRole }) => ariaRole === 'alert');
            if (newFocusItems.length > 0) {
                setNextFocusId(newFocusItems[0].id);
            }
        }
    }
    useEffect(() => {
        if (nextFocusId) {
            focusFlashById(ref.current, nextFocusId);
        }
    }, [nextFocusId, ref]);
    return {
        allItemsHaveId,
        baseProps,
        breakpoint,
        isReducedMotion,
        isVisualRefresh,
        mergedRef,
        ref,
    };
}
//# sourceMappingURL=common.js.map