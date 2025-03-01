import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name.js';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalBreadcrumbGroup from './internal';
export default function BreadcrumbGroup(_a) {
    var { items = [], expandAriaLabel = 'Show path' } = _a, props = __rest(_a, ["items", "expandAriaLabel"]);
    const baseComponentProps = useBaseComponent('BreadcrumbGroup');
    return React.createElement(InternalBreadcrumbGroup, Object.assign({ items: items, expandAriaLabel: expandAriaLabel }, props, baseComponentProps));
}
applyDisplayName(BreadcrumbGroup, 'BreadcrumbGroup');
//# sourceMappingURL=index.js.map