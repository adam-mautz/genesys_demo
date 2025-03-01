import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { fireCancelableEvent, isPlainLeftClick } from '../../../internal/events';
import { useUniqueId } from '../../../internal/hooks/use-unique-id';
import InternalIcon from '../../../icon/internal';
import { useNavigate } from './router';
import styles from '../../styles.css.js';
const ListItem = ({ children, startIcon, endIcon }) => {
    return (React.createElement(React.Fragment, null,
        startIcon && React.createElement("span", { className: styles['overflow-menu-list-item-icon'] }, startIcon),
        React.createElement("span", { className: styles['overflow-menu-list-item-text'] }, children),
        endIcon && endIcon));
};
const LinkItem = forwardRef(({ children, external, href, target, rel, startIcon, endIcon, onClick, context, testId }, ref) => {
    const anchorTarget = target !== null && target !== void 0 ? target : (external ? '_blank' : undefined);
    const anchorRel = rel !== null && rel !== void 0 ? rel : (anchorTarget === '_blank' ? 'noopener noreferrer' : undefined);
    return (React.createElement("a", Object.assign({ ref: ref, onClick: onClick, className: clsx(styles['overflow-menu-control'], styles['overflow-menu-control-link'], context && styles[`overflow-menu-control-${context}`]), href: href, target: anchorTarget, rel: anchorRel }, (testId ? { 'data-testid': testId } : {})),
        React.createElement(ListItem, { startIcon: startIcon, endIcon: endIcon }, children)));
});
const ButtonItem = forwardRef(({ children, startIcon, endIcon, onClick, testId }, ref) => {
    return (React.createElement("button", Object.assign({ ref: ref, className: styles['overflow-menu-control'], onClick: onClick }, (typeof testId === 'string' ? { 'data-testid': testId } : {})),
        React.createElement(ListItem, { startIcon: startIcon, endIcon: endIcon }, children)));
});
const NavigationItem = forwardRef((_a, ref) => {
    var { startIcon, children, index, testId } = _a, definition = __rest(_a, ["startIcon", "children", "index", "testId"]);
    const navigate = useNavigate();
    return (React.createElement(ButtonItem, { ref: ref, startIcon: startIcon, endIcon: React.createElement(InternalIcon, { name: "angle-right" }), testId: testId, onClick: () => navigate('dropdown-menu', {
            definition,
            headerText: definition.text || definition.title,
            headerSecondaryText: definition.description,
            utilityIndex: index,
        }) }, children));
});
const ExpandableItem = (_a) => {
    var { children, onItemClick } = _a, definition = __rest(_a, ["children", "onItemClick"]);
    const [expanded, setExpanded] = useState(false);
    const headerId = useUniqueId('overflow-menu-item');
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: clsx(styles['overflow-menu-control'], styles['overflow-menu-control-expandable-menu-trigger']), onClick: () => setExpanded(value => !value), "aria-expanded": expanded },
            React.createElement(ListItem, { endIcon: React.createElement("span", { className: clsx(styles.icon, expanded && styles.expanded) },
                    React.createElement(InternalIcon, { name: "caret-up-filled" })) },
                React.createElement("span", { id: headerId }, children))),
        expanded && (React.createElement("ul", { className: clsx(styles['overflow-menu-list'], styles['overflow-menu-list-submenu']), "aria-labelledby": headerId }, definition.items.map((item, index) => {
            const isGroup = typeof item.items !== 'undefined';
            return (React.createElement("li", { key: index, className: clsx(styles[`overflow-menu-list-item`], styles[`overflow-menu-list-item-dropdown-menu`]) }, dropdownComponentFactory(item, isGroup, onItemClick)));
        })))));
};
function utilityComponentFactory(utility, index, ref) {
    const label = utility.text || utility.title;
    const hasIcon = !!utility.iconName || !!utility.iconUrl || !!utility.iconAlt || !!utility.iconSvg;
    const startIcon = hasIcon && (React.createElement(InternalIcon, { name: utility.iconName, url: utility.iconUrl, alt: utility.iconAlt, svg: utility.iconSvg }));
    switch (utility.type) {
        case 'button': {
            const handleClick = (event) => {
                if (Boolean(utility.href) && isPlainLeftClick(event)) {
                    fireCancelableEvent(utility.onFollow, { href: utility.href, target: utility.target }, event);
                }
                fireCancelableEvent(utility.onClick, {}, event);
            };
            const content = (React.createElement(React.Fragment, null,
                label,
                utility.external && (React.createElement(React.Fragment, null,
                    ' ',
                    React.createElement("span", { "aria-label": utility.externalIconAriaLabel, role: utility.externalIconAriaLabel ? 'img' : undefined },
                        React.createElement(InternalIcon, { name: "external", size: "normal" }))))));
            if (!utility.href) {
                return (React.createElement(ButtonItem, { ref: ref, startIcon: startIcon, onClick: handleClick, testId: `__${index}` }, content));
            }
            return (React.createElement(LinkItem, { ref: ref, startIcon: startIcon, href: utility.href, external: utility.external, target: utility.target, rel: utility.rel, testId: `__${index}`, onClick: handleClick }, content));
        }
        case 'menu-dropdown': {
            return (React.createElement(NavigationItem, Object.assign({ ref: ref, startIcon: startIcon, index: index }, utility, { testId: `__${index}` }), label));
        }
    }
}
function dropdownComponentFactory(item, expandable, onItemClick) {
    const label = item.text;
    const hasIcon = !!item.iconName || !!item.iconUrl || !!item.iconAlt || !!item.iconSvg;
    const startIcon = hasIcon && (React.createElement(InternalIcon, { name: item.iconName, url: item.iconUrl, alt: item.iconAlt, svg: item.iconSvg }));
    if (expandable) {
        return (React.createElement(ExpandableItem, Object.assign({}, item, { onItemClick: onItemClick }), label));
    }
    return (React.createElement(LinkItem, { startIcon: startIcon, href: item.href, external: item.external, context: "dropdown-menu", testId: item.id, onClick: event => onItemClick(event, item) },
        label,
        item.external && (React.createElement(React.Fragment, null,
            ' ',
            React.createElement("span", { "aria-label": item.externalIconAriaLabel, role: item.externalIconAriaLabel ? 'img' : undefined },
                React.createElement(InternalIcon, { name: "external", size: "normal" }))))));
}
export const UtilityMenuItem = forwardRef((_a, ref) => {
    var { index } = _a, props = __rest(_a, ["index"]);
    return (React.createElement("li", { className: clsx(styles[`overflow-menu-list-item`], styles[`overflow-menu-list-item-utility`]) }, utilityComponentFactory(props, index, ref)));
});
export const SubmenuItem = (props) => {
    const expandable = typeof props.items !== 'undefined';
    return (React.createElement("li", { className: clsx(styles[`overflow-menu-list-item`], styles[`overflow-menu-list-item-submenu`], expandable && styles[`overflow-menu-list-item-expandable`]) }, dropdownComponentFactory(props, expandable, props.onClick)));
};
//# sourceMappingURL=menu-item.js.map