import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalColumnLayout, { COLUMN_TRIGGERS } from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function ColumnLayout(_a) {
    var { columns = 1, variant = 'default', borders = 'none', disableGutters = false } = _a, props = __rest(_a, ["columns", "variant", "borders", "disableGutters"]);
    const baseComponentProps = useBaseComponent('ColumnLayout');
    const [breakpoint, ref] = useContainerBreakpoints(COLUMN_TRIGGERS);
    const externalProps = getExternalProps(props);
    return (React.createElement(InternalColumnLayout, Object.assign({ columns: columns, variant: variant, borders: borders, disableGutters: disableGutters }, externalProps, baseComponentProps, { __breakpoint: breakpoint, ref: ref })));
}
applyDisplayName(ColumnLayout, 'ColumnLayout');
//# sourceMappingURL=index.js.map