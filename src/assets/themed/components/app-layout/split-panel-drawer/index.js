// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import styles from './styles.css.js';
export function SideSplitPanelDrawer({ topOffset, bottomOffset, width, displayed, children }) {
    return (React.createElement("div", { className: clsx(displayed && styles['drawer-displayed']), style: { width } },
        React.createElement("div", { className: styles['drawer-content'], style: { width: width, top: topOffset, bottom: bottomOffset } }, children)));
}
//# sourceMappingURL=index.js.map