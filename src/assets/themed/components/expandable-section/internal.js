import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { useControllable } from '../internal/hooks/use-controllable';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { KeyCode } from '../internal/keycode';
import { fireNonCancelableEvent } from '../internal/events';
import styles from './styles.css.js';
import { ExpandableSectionContainer } from './expandable-section-container';
import { ExpandableSectionHeader } from './expandable-section-header';
export default function InternalExpandableSection(_a) {
    var { expanded: controlledExpanded, defaultExpanded, onChange, variant = 'default', children, header, headerText, headerCounter, headerDescription, headingTagOverride, disableContentPaddings, headerAriaLabel, __internalRootRef } = _a, props = __rest(_a, ["expanded", "defaultExpanded", "onChange", "variant", "children", "header", "headerText", "headerCounter", "headerDescription", "headingTagOverride", "disableContentPaddings", "headerAriaLabel", "__internalRootRef"]);
    const ref = useRef(null);
    const controlId = useUniqueId();
    const triggerControlId = `${controlId}-trigger`;
    const baseProps = getBaseProps(props);
    const [expanded, setExpanded] = useControllable(controlledExpanded, onChange, defaultExpanded, {
        componentName: 'ExpandableSection',
        controlledProp: 'expanded',
        changeHandler: 'onChange',
    });
    const onExpandChange = useCallback((expanded) => {
        setExpanded(expanded);
        fireNonCancelableEvent(onChange, { expanded });
    }, [onChange, setExpanded]);
    const onClick = useCallback(() => {
        onExpandChange(!expanded);
    }, [onExpandChange, expanded]);
    const onKeyUp = useCallback((event) => {
        const interactionKeys = [KeyCode.enter, KeyCode.space];
        if (interactionKeys.indexOf(event.keyCode) !== -1) {
            onExpandChange(!expanded);
        }
    }, [onExpandChange, expanded]);
    const onKeyDown = useCallback((event) => {
        if (event.keyCode === KeyCode.space) {
            // Prevent the page from scrolling when toggling the component with the space bar.
            event.preventDefault();
        }
    }, []);
    const triggerProps = {
        ariaControls: controlId,
        ariaLabel: headerAriaLabel,
        ariaLabelledBy: headerAriaLabel ? undefined : triggerControlId,
        onKeyUp,
        onKeyDown,
        onClick,
    };
    return (React.createElement(ExpandableSectionContainer, Object.assign({}, baseProps, { expanded: expanded, className: clsx(baseProps.className, styles.root), variant: variant, disableContentPaddings: disableContentPaddings, header: React.createElement(ExpandableSectionHeader, Object.assign({ id: triggerControlId, className: clsx(styles.header, styles[`header-${variant}`]), variant: variant, expanded: !!expanded, header: header, headerText: headerText, headerDescription: headerDescription, headerCounter: headerCounter, headingTagOverride: headingTagOverride }, triggerProps)), __internalRootRef: __internalRootRef }),
        React.createElement(CSSTransition, { in: expanded, timeout: 30, classNames: { enter: styles['content-enter'] }, nodeRef: ref },
            React.createElement("div", { id: controlId, ref: ref, className: clsx(styles.content, styles[`content-${variant}`], expanded && styles['content-expanded']), role: "group", "aria-label": triggerProps.ariaLabel, "aria-labelledby": triggerProps.ariaLabelledBy }, children))));
}
//# sourceMappingURL=internal.js.map