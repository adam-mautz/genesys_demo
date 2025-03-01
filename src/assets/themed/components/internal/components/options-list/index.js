import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import { useMergeRefs } from '../../hooks/use-merge-refs';
import React, { useEffect, useRef } from 'react';
import { getBaseProps } from '../../base-component';
import { fireNonCancelableEvent, fireKeyboardEvent, } from '../../events';
import { findUpUntil } from '../../utils/dom';
import styles from './styles.css.js';
const BOTTOM_TRIGGER_OFFSET = 80;
const getItemIndex = (containerRef, event) => {
    const target = findUpUntil(event.target, element => element === containerRef.current || !!element.dataset.mouseTarget);
    const mouseTarget = target === null || target === void 0 ? void 0 : target.dataset.mouseTarget;
    return mouseTarget ? parseInt(mouseTarget) : -1;
};
const OptionsList = (_a, ref) => {
    var { open, children, nativeAttributes = {}, onKeyDown, onBlur, onFocus, onLoadMore, onMouseUp, onMouseMove, position = 'relative', role = 'listbox', decreaseTopMargin = false, ariaLabelledby, ariaDescribedby } = _a, restProps = __rest(_a, ["open", "children", "nativeAttributes", "onKeyDown", "onBlur", "onFocus", "onLoadMore", "onMouseUp", "onMouseMove", "position", "role", "decreaseTopMargin", "ariaLabelledby", "ariaDescribedby"]);
    const baseProps = getBaseProps(restProps);
    const menuRef = useRef(null);
    const handleScroll = () => {
        const scrollContainer = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current;
        if (scrollContainer) {
            const bottomEdgePosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
            const remainingScrollHeight = scrollContainer.scrollHeight - bottomEdgePosition;
            if (remainingScrollHeight < BOTTOM_TRIGGER_OFFSET) {
                fireNonCancelableEvent(onLoadMore);
            }
        }
    };
    useEffect(() => {
        if (!open) {
            return;
        }
        handleScroll();
    });
    const className = clsx(styles['options-list'], {
        [styles['decrease-top-margin']]: decreaseTopMargin,
    });
    const mergedRef = useMergeRefs(ref, menuRef);
    return (React.createElement("ul", Object.assign({}, baseProps, nativeAttributes, { className: className, ref: mergedRef, style: { position }, role: role, onScroll: handleScroll, onKeyDown: event => onKeyDown && fireKeyboardEvent(onKeyDown, event), onMouseMove: event => onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(getItemIndex(menuRef, event)), onMouseUp: event => onMouseUp === null || onMouseUp === void 0 ? void 0 : onMouseUp(getItemIndex(menuRef, event)), onBlur: event => fireNonCancelableEvent(onBlur, { relatedTarget: event.relatedTarget }), onFocus: () => fireNonCancelableEvent(onFocus), tabIndex: -1, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby }), open && children));
};
export default React.forwardRef(OptionsList);
//# sourceMappingURL=index.js.map