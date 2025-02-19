import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import flattenChildren from 'react-keyed-flatten-children';
import InternalGrid from '../grid/internal';
import { getBaseProps } from '../internal/base-component';
import { repeat } from './util';
import styles from './styles.css.js';
export const COLUMN_TRIGGERS = ['default', 'xxs', 'xs'];
const COLUMN_DEFS = {
    1: { colspan: { default: 12, xxs: 12, xs: 12 } },
    2: { colspan: { default: 12, xxs: 6, xs: 6 } },
    3: { colspan: { default: 12, xxs: 6, xs: 4 } },
    4: { colspan: { default: 12, xxs: 6, xs: 3 } },
};
/**
 * A responsive grid layout.
 */
export default React.forwardRef(function ColumnLayout(_a, ref) {
    var _b;
    var { columns = 1, variant = 'default', borders = 'none', disableGutters = false, children, __breakpoint, __internalRootRef } = _a, restProps = __rest(_a, ["columns", "variant", "borders", "disableGutters", "children", "__breakpoint", "__internalRootRef"]);
    const baseProps = getBaseProps(restProps);
    const isTextGridVariant = variant === 'text-grid';
    const shouldDisableGutters = !isTextGridVariant && disableGutters;
    const shouldHaveHorizontalBorders = !isTextGridVariant && (borders === 'horizontal' || borders === 'all');
    const shouldHaveVerticalBorders = !isTextGridVariant && (borders === 'vertical' || borders === 'all');
    /*
     Flattening the children allows us to "see through" React Fragments and nested arrays.
     */
    const flattenedChildren = flattenChildren(children);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles['column-layout']), ref: __internalRootRef }),
        React.createElement(InternalGrid, { ref: ref, disableGutters: true, gridDefinition: repeat((_b = COLUMN_DEFS[columns]) !== null && _b !== void 0 ? _b : {}, flattenedChildren.length), className: clsx(styles.grid, styles[`grid-columns-${columns}`], styles[`grid-variant-${variant}`], {
                [styles['grid-horizontal-borders']]: shouldHaveHorizontalBorders,
                [styles['grid-vertical-borders']]: shouldHaveVerticalBorders,
                [styles['grid-no-gutters']]: shouldDisableGutters,
            }), __breakpoint: __breakpoint, __responsiveClassName: breakpoint => breakpoint && styles[`grid-breakpoint-${breakpoint}`] }, children)));
});
//# sourceMappingURL=internal.js.map