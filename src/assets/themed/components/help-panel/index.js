import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import InternalStatusIndicator from '../status-indicator/internal';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import LiveRegion from '../internal/components/live-region';
export default function HelpPanel(_a) {
    var { header, footer, children, loading, loadingText } = _a, restProps = __rest(_a, ["header", "footer", "children", "loading", "loadingText"]);
    const { __internalRootRef } = useBaseComponent('HelpPanel');
    const baseProps = getBaseProps(restProps);
    const containerProps = Object.assign(Object.assign({}, baseProps), { className: clsx(baseProps.className, styles['help-panel']) });
    return loading ? (React.createElement("div", Object.assign({}, containerProps, { ref: __internalRootRef }),
        React.createElement(InternalStatusIndicator, { type: "loading" },
            React.createElement(LiveRegion, { visible: true }, loadingText)))) : (React.createElement("div", Object.assign({}, containerProps, { ref: __internalRootRef }),
        header && React.createElement("div", { className: clsx(styles.header) }, header),
        React.createElement("div", { className: clsx(styles.content) }, children),
        footer && React.createElement("div", { className: styles.footer }, footer)));
}
applyDisplayName(HelpPanel, 'HelpPanel');
//# sourceMappingURL=index.js.map