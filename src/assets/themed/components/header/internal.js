import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useContext } from 'react';
import { getBaseProps } from '../internal/base-component';
import { StickyHeaderContext } from '../container/use-sticky-header';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
export default function InternalHeader(_a) {
    var { variant, headingTagOverride, children, actions, counter, description, info, __internalRootRef = null, __disableActionsWrapping } = _a, restProps = __rest(_a, ["variant", "headingTagOverride", "children", "actions", "counter", "description", "info", "__internalRootRef", "__disableActionsWrapping"]);
    const HeadingTag = headingTagOverride !== null && headingTagOverride !== void 0 ? headingTagOverride : (variant === 'awsui-h1-sticky' ? 'h1' : variant);
    const { isStuck } = useContext(StickyHeaderContext);
    const baseProps = getBaseProps(restProps);
    const isRefresh = useVisualRefresh();
    const dynamicVariant = isStuck ? 'h2' : 'h1';
    const variantOverride = variant === 'awsui-h1-sticky' ? (isRefresh ? dynamicVariant : 'h2') : variant;
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className, styles[`root-variant-${variantOverride}`], isRefresh && styles[`root-variant-${variantOverride}-refresh`], !actions && [styles[`root-no-actions`]], description && [styles[`root-has-description`]], __disableActionsWrapping && [styles['root-no-wrap']]), ref: __internalRootRef }),
        React.createElement("div", { className: clsx(styles.main, styles[`main-variant-${variantOverride}`], isRefresh && styles[`main-variant-${variantOverride}-refresh`]) },
            React.createElement("div", { className: clsx(styles.title, styles[`title-variant-${variantOverride}`], isRefresh && styles[`title-variant-${variantOverride}-refresh`]) },
                React.createElement(HeadingTag, { className: clsx(styles.heading, styles[`heading-variant-${variantOverride}`]) },
                    React.createElement("span", { className: clsx(styles['heading-text'], styles[`heading-text-variant-${variantOverride}`]) }, children),
                    counter !== undefined && React.createElement("span", { className: styles.counter },
                        " ",
                        counter)),
                info && React.createElement("span", { className: styles.info }, info)),
            description && (React.createElement("p", { className: clsx(styles.description, styles[`description-variant-${variantOverride}`], isRefresh && styles[`description-variant-${variantOverride}-refresh`]) }, description))),
        actions && (React.createElement("div", { className: clsx(styles.actions, styles[`actions-variant-${variantOverride}`], isRefresh && styles[`actions-variant-${variantOverride}-refresh`]) }, actions))));
}
//# sourceMappingURL=internal.js.map