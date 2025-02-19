import React from 'react';
import InternalIcon from '../icon/internal';
import clsx from 'clsx';
import styles from './styles.css.js';
import InternalHeader from '../header/internal';
import ScreenreaderOnly from '../internal/components/screenreader-only';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { isDevelopment } from '../internal/is-development';
import { warnOnce } from '../internal/logging';
const ExpandableDefaultHeader = ({ id, className, onClick, ariaLabel, ariaControls, expanded, children, icon, onKeyUp, onKeyDown, variant, }) => {
    return (React.createElement("div", { id: id, role: "button", className: className, tabIndex: 0, onKeyUp: onKeyUp, onKeyDown: onKeyDown, onClick: onClick, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": expanded },
        React.createElement("div", { className: clsx(styles['icon-container'], styles[`icon-container-${variant}`]) }, icon),
        children));
};
const ExpandableNavigationHeader = ({ id, className, onClick, ariaLabelledBy, ariaLabel, ariaControls, expanded, children, icon, }) => {
    return (React.createElement("div", { id: id, className: className, onClick: onClick },
        React.createElement("button", { className: styles['icon-container'], "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": expanded, type: "button" }, icon),
        children));
};
const ExpandableHeaderTextWrapper = ({ id, className, onClick, ariaLabel, ariaControls, expanded, children, icon, headerDescription, headerCounter, variant, headingTagOverride, onKeyUp, onKeyDown, }) => {
    const screenreaderContentId = useUniqueId('expandable-section-header-content-');
    const isContainer = variant === 'container';
    const HeadingTag = headingTagOverride || 'div';
    const headerButton = (React.createElement("span", { className: isContainer ? styles['header-container-button'] : styles['header-button'], role: "button", tabIndex: 0, onKeyUp: onKeyUp, onKeyDown: onKeyDown, "aria-label": ariaLabel, "aria-labelledby": ariaLabel || !isContainer ? undefined : screenreaderContentId, "aria-controls": ariaControls, "aria-expanded": expanded },
        React.createElement("span", { className: clsx(styles['icon-container'], styles[`icon-container-${variant}`]) }, icon),
        React.createElement("span", null, children)));
    return (React.createElement("div", { id: id, className: className, onClick: onClick },
        isContainer ? (React.createElement(InternalHeader, { variant: "h2", description: headerDescription, counter: headerCounter, headingTagOverride: headingTagOverride }, headerButton)) : (React.createElement(HeadingTag, { className: styles['header-wrapper'] }, headerButton)),
        isContainer && (React.createElement(ScreenreaderOnly, { id: screenreaderContentId },
            children,
            " ",
            headerCounter,
            " ",
            headerDescription))));
};
export const ExpandableSectionHeader = ({ id, className, variant, header, headerText, headerDescription, headerCounter, headingTagOverride, expanded, ariaControls, ariaLabel, ariaLabelledBy, onKeyUp, onKeyDown, onClick, }) => {
    const icon = (React.createElement(InternalIcon, { size: variant === 'container' ? 'medium' : 'normal', className: clsx(styles.icon, expanded && styles.expanded), name: "caret-down-filled" }));
    const defaultHeaderProps = {
        id: id,
        icon: icon,
        expanded: expanded,
        ariaControls: ariaControls,
        ariaLabel: ariaLabel,
        onClick: onClick,
        variant,
    };
    const triggerClassName = clsx(styles.trigger, styles[`trigger-${variant}`], expanded && styles['trigger-expanded']);
    if (variant === 'navigation') {
        return (React.createElement(ExpandableNavigationHeader, Object.assign({ className: clsx(className, triggerClassName), ariaLabelledBy: ariaLabelledBy }, defaultHeaderProps), headerText !== null && headerText !== void 0 ? headerText : header));
    }
    if (headerText) {
        return (React.createElement(ExpandableHeaderTextWrapper, Object.assign({ className: clsx(className, triggerClassName, expanded && styles.expanded), headerDescription: headerDescription, headerCounter: headerCounter, headingTagOverride: headingTagOverride, onKeyUp: onKeyUp, onKeyDown: onKeyDown }, defaultHeaderProps), headerText));
    }
    if (variant === 'container' && header && isDevelopment) {
        warnOnce('ExpandableSection', 'Use `headerText` instead of `header` to provide the button within the heading for a11y.');
    }
    return (React.createElement(ExpandableDefaultHeader, Object.assign({ className: clsx(className, triggerClassName, styles.focusable, expanded && styles.expanded), onKeyUp: onKeyUp, onKeyDown: onKeyDown }, defaultHeaderProps), header));
};
//# sourceMappingURL=expandable-section-header.js.map