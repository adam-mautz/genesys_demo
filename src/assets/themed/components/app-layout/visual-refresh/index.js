// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import AppBar from './app-bar';
import { AppLayoutInternalsProvider } from './context';
import Background from './background';
import Drawers from './drawers';
import Header from './header';
import Layout from './layout';
import Main from './main';
import Navigation from './navigation';
import Notifications from './notifications';
import SplitPanel from './split-panel';
import Tools from './tools';
import { useMobile } from '../../internal/hooks/use-mobile';
/**
 * In mobile viewports the AppBar position changes to sticky and is placed
 * above the notifications. This is handled by adjusting the row positions
 * in CSS for the AppBar and Notifications components relative to the grid
 * definition in the Layout component. In order to keep alignment between
 * the visual ordering and logical ordering of the document the logical order
 * of these components is also modified in the markup below.
 */
const AppLayoutWithRef = React.forwardRef(function AppLayout(props, ref) {
    const isMobile = useMobile();
    return (React.createElement(AppLayoutInternalsProvider, Object.assign({}, props, { ref: ref }),
        React.createElement(SplitPanel, null,
            React.createElement(Layout, null,
                React.createElement(Background, null),
                React.createElement(Navigation, null),
                isMobile && React.createElement(AppBar, null),
                React.createElement(Notifications, null),
                !isMobile && React.createElement(AppBar, null),
                React.createElement(Header, null),
                React.createElement(Main, null),
                React.createElement(SplitPanel.Bottom, null),
                React.createElement(Tools, null,
                    React.createElement(SplitPanel.Side, null)),
                React.createElement(Drawers, null)))));
});
export default AppLayoutWithRef;
//# sourceMappingURL=index.js.map