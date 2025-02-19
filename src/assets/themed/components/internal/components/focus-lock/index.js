// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useMergeRefs } from '../../hooks/use-merge-refs';
import TabTrap from '../tab-trap/index';
import { getFirstFocusable, getLastFocusable } from './utils';
function FocusLock({ className, disabled, autoFocus, restoreFocus, children }, ref) {
    useImperativeHandle(ref, () => {
        return {
            focusFirst,
        };
    });
    const returnFocusToRef = useRef(null);
    const containerRef = useRef(null);
    // Using a callback ref to detect component unmounts, which is safer than using useEffect.
    const restoreFocusHandler = useCallback((elem) => {
        var _a;
        if (elem === null && restoreFocus) {
            (_a = returnFocusToRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [restoreFocus]);
    const mergedRef = useMergeRefs(containerRef, restoreFocusHandler);
    const focusFirst = () => {
        var _a;
        if (containerRef.current) {
            (_a = getFirstFocusable(containerRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const focusLast = () => {
        var _a;
        if (containerRef.current) {
            (_a = getLastFocusable(containerRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    useEffect(() => {
        if (autoFocus && !disabled) {
            returnFocusToRef.current = document.activeElement;
            focusFirst();
        }
    }, [autoFocus, disabled]);
    // Returns focus when disabled changes from false to true.
    const [prevDisabled, setPrevDisabled] = useState(!!disabled);
    useEffect(() => {
        var _a;
        if (prevDisabled !== !!disabled) {
            setPrevDisabled(!!disabled);
            if (disabled && restoreFocus) {
                (_a = returnFocusToRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                returnFocusToRef.current = null;
            }
        }
    }, [prevDisabled, disabled, restoreFocus]);
    return (React.createElement(React.Fragment, null,
        React.createElement(TabTrap, { disabled: disabled, focusNextCallback: focusLast }),
        React.createElement("div", { className: className, ref: mergedRef }, children),
        React.createElement(TabTrap, { disabled: disabled, focusNextCallback: focusFirst })));
}
export default React.forwardRef(FocusLock);
//# sourceMappingURL=index.js.map