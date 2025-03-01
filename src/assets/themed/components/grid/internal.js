import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import flattenChildren from 'react-keyed-flatten-children';
import { getBaseProps } from '../internal/base-component';
import { matchBreakpointMapping } from '../internal/breakpoints';
import { isDevelopment } from '../internal/is-development';
import * as logging from '../internal/logging';
import styles from './styles.css.js';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
const InternalGrid = React.forwardRef((_a, ref) => {
    var { __breakpoint, gridDefinition = [], disableGutters = false, children, __responsiveClassName, __internalRootRef = null } = _a, restProps = __rest(_a, ["__breakpoint", "gridDefinition", "disableGutters", "children", "__responsiveClassName", "__internalRootRef"]);
    let [defaultBreakpoint, defaultRef] = useContainerBreakpoints(undefined);
    if (__breakpoint !== undefined) {
        defaultBreakpoint = __breakpoint;
        defaultRef = ref;
    }
    const baseProps = getBaseProps(restProps);
    /*
   Flattening the children allows us to "see through" React Fragments and nested arrays.
   */
    const flattenedChildren = flattenChildren(children);
    if (isDevelopment) {
        const columnCount = gridDefinition.length;
        const childCount = flattenedChildren.length;
        if (columnCount !== childCount) {
            logging.warnOnce('Grid', `The number of children (${childCount}) does not match the number of columns defined (${columnCount}).`);
        }
    }
    const mergedRef = useMergeRefs(defaultRef, __internalRootRef);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles.grid, baseProps.className, { [styles['no-gutters']]: disableGutters }, __responsiveClassName ? __responsiveClassName(defaultBreakpoint) : null), ref: mergedRef }), flattenedChildren.map((child, i) => {
        var _a, _b, _c, _d;
        // If this react child is a primitive value, the key will be undefined
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const key = child.key;
        return (React.createElement("div", { key: key, className: clsx(styles['grid-column'], getColumnClassNames('colspan', (_a = gridDefinition[i]) === null || _a === void 0 ? void 0 : _a.colspan, defaultBreakpoint), getColumnClassNames('offset', (_b = gridDefinition[i]) === null || _b === void 0 ? void 0 : _b.offset, defaultBreakpoint), getColumnClassNames('pull', (_c = gridDefinition[i]) === null || _c === void 0 ? void 0 : _c.pull, defaultBreakpoint), getColumnClassNames('push', (_d = gridDefinition[i]) === null || _d === void 0 ? void 0 : _d.push, defaultBreakpoint)) },
            React.createElement("div", { className: styles['restore-pointer-events'] }, child)));
    })));
});
function getColumnClassNames(prop, mapping, breakpoint) {
    if (typeof mapping === 'number') {
        return styles[`${prop}-${mapping}`];
    }
    if (breakpoint === null || mapping === undefined) {
        return null;
    }
    return styles[`${prop}-${matchBreakpointMapping(mapping, breakpoint)}`];
}
export default InternalGrid;
//# sourceMappingURL=internal.js.map