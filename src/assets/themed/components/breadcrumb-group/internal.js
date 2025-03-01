import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
import clsx from 'clsx';
import InternalIcon from '../icon/internal';
import InternalButtonDropdown from '../button-dropdown/internal';
import { InternalButton } from '../button/internal';
import { BreadcrumbItem } from './item/item';
import { fireCancelableEvent } from '../internal/events';
import { getBaseProps } from '../internal/base-component';
import { useMobile } from '../internal/hooks/use-mobile';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
const DropdownTrigger = (clickHandler, ref, isDisabled, isExpanded, ariaLabel) => {
    return (React.createElement(InternalButton, { disabled: isDisabled, onClick: event => {
            event.preventDefault();
            clickHandler();
        }, ref: ref, ariaExpanded: isExpanded, "aria-haspopup": true, ariaLabel: ariaLabel, variant: "breadcrumb-group", formAction: "none" }, "..."));
};
const EllipsisDropdown = ({ ariaLabel, dropdownItems, onDropdownItemClick, onDropdownItemFollow, }) => {
    return (React.createElement("li", { className: styles.ellipsis },
        React.createElement(InternalButtonDropdown, { ariaLabel: ariaLabel, items: dropdownItems, onItemClick: onDropdownItemClick, onItemFollow: onDropdownItemFollow, customTriggerBuilder: DropdownTrigger }),
        React.createElement("span", { className: styles.icon },
            React.createElement(InternalIcon, { name: "angle-right" }))));
};
export const getEventDetail = (item) => ({
    item,
    text: item.text,
    href: item.href,
});
export default function InternalBreadcrumbGroup(_a) {
    var { items = [], ariaLabel, expandAriaLabel, onClick, onFollow, __internalRootRef } = _a, props = __rest(_a, ["items", "ariaLabel", "expandAriaLabel", "onClick", "onFollow", "__internalRootRef"]);
    for (const item of items) {
        checkSafeUrl('BreadcrumbGroup', item.href);
    }
    const baseProps = getBaseProps(props);
    const isMobile = useMobile();
    let breadcrumbItems = items.map((item, index) => {
        return (React.createElement("li", { className: styles.item, key: index },
            React.createElement(BreadcrumbItem, { item: item, onClick: onClick, onFollow: onFollow, isCompressed: isMobile, isLast: index === items.length - 1, isDisplayed: !isMobile || index === items.length - 1 || index === 0 })));
    });
    const getEventItem = (e) => {
        const { id } = e.detail;
        return items[parseInt(id)];
    };
    // Add ellipsis
    if (breadcrumbItems.length >= 2) {
        const dropdownItems = items
            .slice(1, items.length - 1)
            .map((item, index) => ({
            id: (index + 1).toString(),
            text: item.text,
            href: item.href || '#',
        }));
        breadcrumbItems = [
            breadcrumbItems[0],
            React.createElement(EllipsisDropdown, { key: 'ellipsis', ariaLabel: expandAriaLabel, dropdownItems: dropdownItems, onDropdownItemClick: e => fireCancelableEvent(onClick, getEventDetail(getEventItem(e)), e), onDropdownItemFollow: e => fireCancelableEvent(onFollow, getEventDetail(getEventItem(e)), e) }),
            ...breadcrumbItems.slice(1),
        ];
    }
    return (React.createElement("nav", Object.assign({}, baseProps, { className: clsx(styles['breadcrumb-group'], isMobile && styles.mobile, items.length <= 2 && styles['mobile-short'], baseProps.className), "aria-label": ariaLabel || undefined, ref: __internalRootRef }),
        React.createElement("ol", { className: styles['breadcrumb-group-list'] }, breadcrumbItems)));
}
//# sourceMappingURL=internal.js.map