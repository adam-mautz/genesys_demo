// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { useAppLayoutInternals } from './context';
import styles from './styles.css.js';
/**
 * The CSS class 'awsui-context-content-header' needs to be added to the root element so
 * that the design tokens used are overridden with the appropriate values.
 */
export default function Header() {
    const { breadcrumbs, contentHeader, hasDrawerViewportOverlay, hasNotificationsContent } = useAppLayoutInternals();
    if (!contentHeader) {
        return null;
    }
    return (React.createElement("header", { className: clsx(styles.content, {
            [styles['has-breadcrumbs']]: breadcrumbs,
            [styles['has-notifications-content']]: hasNotificationsContent,
            [styles.unfocusable]: hasDrawerViewportOverlay,
        }, 'awsui-context-content-header') }, contentHeader));
}
//# sourceMappingURL=header.js.map