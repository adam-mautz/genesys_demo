import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import InternalIcon from '../icon/internal';
import styles from './styles.css.js';
import { getBaseProps } from '../internal/base-component';
import { fireCancelableEvent, isPlainLeftClick } from '../internal/events';
import useForwardFocus from '../internal/hooks/forward-focus';
import { KeyCode } from '../internal/keycode';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
const InternalLink = React.forwardRef((_a, ref) => {
    var { variant = 'secondary', fontSize = 'body-m', color = 'normal', external = false, target, href, rel, ariaLabel, externalIconAriaLabel, onFollow, children, __internalRootRef = null } = _a, props = __rest(_a, ["variant", "fontSize", "color", "external", "target", "href", "rel", "ariaLabel", "externalIconAriaLabel", "onFollow", "children", "__internalRootRef"]);
    checkSafeUrl('Link', href);
    const isButton = !href;
    const specialStyles = ['top-navigation', 'link', 'recovery'];
    const hasSpecialStyle = specialStyles.indexOf(variant) > -1;
    const baseProps = getBaseProps(props);
    const anchorTarget = target !== null && target !== void 0 ? target : (external ? '_blank' : undefined);
    const anchorRel = rel !== null && rel !== void 0 ? rel : (anchorTarget === '_blank' ? 'noopener noreferrer' : undefined);
    const fireFollowEvent = (event) => {
        fireCancelableEvent(onFollow, { href, external, target: anchorTarget }, event);
    };
    const handleLinkClick = (event) => {
        if (isPlainLeftClick(event)) {
            fireFollowEvent(event);
        }
    };
    const handleButtonClick = (event) => {
        fireFollowEvent(event);
    };
    const handleButtonKeyDown = (event) => {
        if (event.keyCode === KeyCode.space || event.keyCode === KeyCode.enter) {
            event.preventDefault();
            fireFollowEvent(event);
        }
    };
    const linkRef = useRef(null);
    const isVisualRefresh = useVisualRefresh();
    useForwardFocus(ref, linkRef);
    // Visual refresh should only add styles to buttons that don't already have unique styles (e.g. primary/secondary variants)
    const applyButtonStyles = isButton && isVisualRefresh && !hasSpecialStyle;
    const sharedProps = Object.assign(Object.assign({}, baseProps), { 
        // https://github.com/microsoft/TypeScript/issues/36659
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: useMergeRefs(linkRef, __internalRootRef), className: clsx(styles.link, baseProps.className, applyButtonStyles ? styles.button : null, styles[getVariantStyle(variant)], styles[getFontSizeStyle(variant, fontSize)], styles[getColorStyle(variant, color)]), 'aria-label': ariaLabel });
    const content = (React.createElement(React.Fragment, null,
        children,
        external && (React.createElement("span", { className: styles['icon-wrapper'] },
            "\u00A0",
            React.createElement("span", { className: styles.icon, "aria-label": externalIconAriaLabel, role: externalIconAriaLabel ? 'img' : undefined },
                React.createElement(InternalIcon, { name: "external", size: "inherit" }))))));
    if (isButton) {
        return (React.createElement("a", Object.assign({}, sharedProps, { role: "button", tabIndex: 0, onKeyDown: handleButtonKeyDown, onClick: handleButtonClick }), content));
    }
    return (
    // we dynamically set proper rel in the code above
    // eslint-disable-next-line react/jsx-no-target-blank
    React.createElement("a", Object.assign({}, sharedProps, { target: anchorTarget, rel: anchorRel, href: href, onClick: handleLinkClick }), content));
});
function getVariantStyle(variant) {
    return `variant-${variant.replace(/^awsui-/, '')}`;
}
function getFontSizeStyle(variant, fontSize) {
    switch (variant) {
        case 'info':
            return 'font-size-body-s';
        case 'awsui-value-large':
            return 'font-size-display-l';
        default:
            return `font-size-${fontSize}`;
    }
}
function getColorStyle(variant, color) {
    return `color-${variant === 'info' ? 'normal' : color}`;
}
export default InternalLink;
//# sourceMappingURL=internal.js.map