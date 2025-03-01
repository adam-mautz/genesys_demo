import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import { InternalButton } from '../button/internal';
import { getBaseProps } from '../internal/base-component';
import { useSplitPanelContext } from '../internal/context/split-panel-context';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import ResizeHandler from './icons/resize-handler';
import PreferencesModal from './preferences-modal';
import { usePointerEvents } from './utils/use-pointer-events';
import { useKeyboardEvents } from './utils/use-keyboard-events';
import styles from './styles.css.js';
import useBaseComponent from '../internal/hooks/use-base-component';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { AppLayoutContext } from '../internal/context/app-layout-context';
import { getLimitedValue } from './utils/size-utils';
import { Transition } from '../internal/components/transition';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { SplitPanelContentSide } from './side';
import { SplitPanelContentBottom } from './bottom';
const MIN_HEIGHT = 160;
const MIN_WIDTH = 280;
export default function SplitPanel(_a) {
    var { header, children, hidePreferencesButton = false, closeBehavior = 'collapse', i18nStrings } = _a, restProps = __rest(_a, ["header", "children", "hidePreferencesButton", "closeBehavior", "i18nStrings"]);
    const isRefresh = useVisualRefresh();
    const { __internalRootRef } = useBaseComponent('SplitPanel');
    const { size, getMaxWidth, getMaxHeight, position, topOffset, bottomOffset, rightOffset, contentWidthStyles, isOpen, isForcedPosition, onPreferencesChange, onResize, onToggle, reportSize, setSplitPanelToggle, refs, } = useSplitPanelContext();
    const baseProps = getBaseProps(restProps);
    const [isPreferencesOpen, setPreferencesOpen] = useState(false);
    const [relativeSize, setRelativeSize] = useState(0);
    const [maxSize, setMaxSize] = useState(size);
    const minSize = position === 'bottom' ? MIN_HEIGHT : MIN_WIDTH;
    const cappedSize = getLimitedValue(minSize, size, maxSize);
    const appLayoutMaxWidth = isRefresh && position === 'bottom' ? contentWidthStyles : undefined;
    useEffect(() => {
        setSplitPanelToggle({ displayed: closeBehavior === 'collapse', ariaLabel: i18nStrings.openButtonAriaLabel });
    }, [setSplitPanelToggle, i18nStrings.openButtonAriaLabel, closeBehavior]);
    useEffect(() => {
        // effects are called inside out in the components tree
        // wait one frame to allow app-layout to complete its calculations
        const handle = requestAnimationFrame(() => {
            const maxSize = position === 'bottom' ? getMaxHeight() : getMaxWidth();
            setRelativeSize(((size - minSize) / (maxSize - minSize)) * 100);
            setMaxSize(maxSize);
        });
        return () => cancelAnimationFrame(handle);
    }, [size, minSize, position, getMaxHeight, getMaxWidth]);
    useEffect(() => {
        reportSize(cappedSize);
    }, [reportSize, cappedSize]);
    useEffect(() => {
        const handler = () => setMaxSize(position === 'bottom' ? getMaxHeight() : getMaxWidth());
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, [position, getMaxWidth, getMaxHeight]);
    const setSidePanelWidth = (width) => {
        const maxWidth = getMaxWidth();
        const size = getLimitedValue(MIN_WIDTH, width, maxWidth);
        if (isOpen && maxWidth >= MIN_WIDTH) {
            onResize({ size });
        }
    };
    const setBottomPanelHeight = (height) => {
        const maxHeight = getMaxHeight();
        const size = getLimitedValue(MIN_HEIGHT, height, maxHeight);
        if (isOpen && maxHeight >= MIN_HEIGHT) {
            onResize({ size });
        }
    };
    const splitPanelRefObject = useRef(null);
    const sizeControlProps = {
        position,
        splitPanelRef: splitPanelRefObject,
        handleRef: refs.slider,
        setSidePanelWidth,
        setBottomPanelHeight,
    };
    const onSliderPointerDown = usePointerEvents(sizeControlProps);
    const onKeyDown = useKeyboardEvents(sizeControlProps);
    const wrappedChildren = (React.createElement(AppLayoutContext.Provider, { value: {
            stickyOffsetTop: topOffset,
            stickyOffsetBottom: bottomOffset,
            hasBreadcrumbs: false,
        } }, children));
    const panelHeaderId = useUniqueId('split-panel-header');
    const wrappedHeader = (React.createElement("div", { className: styles.header, style: appLayoutMaxWidth },
        React.createElement("h2", { className: styles['header-text'], id: panelHeaderId }, header),
        React.createElement("div", { className: styles['header-actions'] },
            !hidePreferencesButton && isOpen && (React.createElement(React.Fragment, null,
                React.createElement(InternalButton, { className: styles['preferences-button'], iconName: "settings", variant: "icon", onClick: () => setPreferencesOpen(true), formAction: "none", ariaLabel: i18nStrings.preferencesTitle, ref: refs.preferences }),
                React.createElement("span", { className: styles.divider }))),
            isOpen ? (React.createElement(InternalButton, { className: styles['close-button'], iconName: isRefresh && closeBehavior === 'collapse' ? (position === 'side' ? 'angle-right' : 'angle-down') : 'close', variant: "icon", onClick: onToggle, formAction: "none", ariaLabel: i18nStrings.closeButtonAriaLabel, ariaExpanded: isOpen })) : position === 'side' ? null : (React.createElement(InternalButton, { className: styles['open-button'], iconName: "angle-up", variant: "icon", formAction: "none", ariaLabel: i18nStrings.openButtonAriaLabel, ref: refs.toggle, ariaExpanded: isOpen })))));
    const resizeHandle = (React.createElement("div", { ref: refs.slider, role: "slider", tabIndex: 0, "aria-label": i18nStrings.resizeHandleAriaLabel, "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": position === 'bottom' ? relativeSize : 100 - relativeSize, className: clsx(styles.slider, styles[`slider-${position}`]), onKeyDown: onKeyDown, onPointerDown: onSliderPointerDown },
        React.createElement(ResizeHandler, { className: clsx(styles['slider-icon'], styles[`slider-icon-${position}`]) })));
    /*
      This effect forces the browser to recalculate the layout
      whenever the split panel might have moved.
  
      This is needed as a workaround for a bug in Safari, which does
      not automatically calculate the new position of the split panel
      _content_ when the split panel moves.
    */
    useLayoutEffect(() => {
        const root = __internalRootRef.current;
        if (root) {
            const property = 'transform';
            const temporaryValue = 'translateZ(0)';
            const valueBefore = root.style[property];
            root.style[property] = temporaryValue;
            // This line forces the browser to recalculate the layout
            void root.offsetHeight;
            root.style[property] = valueBefore;
        }
    }, [rightOffset, __internalRootRef]);
    const mergedRef = useMergeRefs(splitPanelRefObject, __internalRootRef);
    if (closeBehavior === 'hide' && !isOpen) {
        return React.createElement(React.Fragment, null);
    }
    /**
     * The AppLayout factor moved the circular buttons out of the
     * SplitPanel and into the Tools component. This conditional
     * is still needed for the early return to prevent execution
     * of the following code.
     */
    if (isRefresh && !isOpen && position === 'side') {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(Transition, { in: isOpen !== null && isOpen !== void 0 ? isOpen : false }, (state, transitioningElementRef) => (React.createElement(React.Fragment, null,
        position === 'side' && (React.createElement(SplitPanelContentSide, { resizeHandle: resizeHandle, baseProps: baseProps, isOpen: isOpen, splitPanelRef: mergedRef, cappedSize: cappedSize, onToggle: onToggle, i18nStrings: i18nStrings, toggleRef: refs.toggle, header: wrappedHeader, panelHeaderId: panelHeaderId }, wrappedChildren)),
        position === 'bottom' && (React.createElement(SplitPanelContentBottom, { resizeHandle: resizeHandle, baseProps: baseProps, isOpen: isOpen, splitPanelRef: mergedRef, cappedSize: cappedSize, onToggle: onToggle, header: wrappedHeader, panelHeaderId: panelHeaderId, state: state, transitioningElementRef: transitioningElementRef, appLayoutMaxWidth: appLayoutMaxWidth }, wrappedChildren)),
        isPreferencesOpen && (React.createElement(PreferencesModal, { visible: true, preferences: { position }, disabledSidePosition: position === 'bottom' && isForcedPosition, isRefresh: isRefresh, i18nStrings: {
                header: i18nStrings.preferencesTitle,
                confirm: i18nStrings.preferencesConfirm,
                cancel: i18nStrings.preferencesCancel,
                positionLabel: i18nStrings.preferencesPositionLabel,
                positionDescription: i18nStrings.preferencesPositionDescription,
                positionBottom: i18nStrings.preferencesPositionBottom,
                positionSide: i18nStrings.preferencesPositionSide,
            }, onConfirm: preferences => {
                onPreferencesChange(Object.assign({}, preferences));
                setPreferencesOpen(false);
            }, onDismiss: () => {
                setPreferencesOpen(false);
            } }))))));
}
applyDisplayName(SplitPanel, 'SplitPanel');
//# sourceMappingURL=index.js.map