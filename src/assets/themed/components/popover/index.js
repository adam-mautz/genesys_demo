import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalPopover from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { isDevelopment } from '../internal/is-development';
import { warnOnce } from '../internal/logging';
export default function Popover(_a) {
    var { position = 'right', size = 'medium', fixedWidth = false, triggerType = 'text', dismissButton = true, renderWithPortal = false, header } = _a, rest = __rest(_a, ["position", "size", "fixedWidth", "triggerType", "dismissButton", "renderWithPortal", "header"]);
    if (isDevelopment) {
        if (dismissButton && !header) {
            warnOnce('Popover', `You should provide a \`header\` when \`dismissButton\` is true.`);
        }
    }
    const baseComponentProps = useBaseComponent('Popover');
    const externalProps = getExternalProps(rest);
    return (React.createElement(InternalPopover, Object.assign({ header: header, position: position, size: size, fixedWidth: fixedWidth, triggerType: triggerType, dismissButton: dismissButton, renderWithPortal: renderWithPortal }, externalProps, baseComponentProps)));
}
applyDisplayName(Popover, 'Popover');
//# sourceMappingURL=index.js.map