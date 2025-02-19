import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalForm from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Form(_a) {
    var { variant = 'full-page' } = _a, props = __rest(_a, ["variant"]);
    const baseComponentProps = useBaseComponent('Form');
    return React.createElement(InternalForm, Object.assign({ variant: variant }, props, baseComponentProps));
}
applyDisplayName(Form, 'Form');
//# sourceMappingURL=index.js.map