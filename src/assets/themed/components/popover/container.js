// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { getContainingBlock, nodeContains } from '../internal/utils/dom';
import { useResizeObserver } from '../internal/hooks/container-queries';
import { calculatePosition } from './utils/positions';
import styles from './styles.css.js';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
const INITIAL_STYLES = { position: 'absolute', top: -9999, left: -9999 };
export default function PopoverContainer({ position, trackRef, trackKey, arrow, children, zIndex, renderWithPortal, size, fixedWidth, variant, }) {
    const bodyRef = useRef(null);
    const contentRef = useRef(null);
    const popoverRef = useRef(null);
    const arrowRef = useRef(null);
    const [popoverStyle, setPopoverStyle] = useState(INITIAL_STYLES);
    const [internalPosition, setInternalPosition] = useState(null);
    const isRefresh = useVisualRefresh();
    // Store the handler in a ref so that it can still be replaced from outside of the listener closure.
    const positionHandlerRef = useRef(() => { });
    // Updates the position handler.
    const updatePositionHandler = useCallback(() => {
        if (!trackRef.current || !popoverRef.current || !bodyRef.current || !contentRef.current || !arrowRef.current) {
            return;
        }
        // Get important elements
        const popover = popoverRef.current;
        const body = bodyRef.current;
        const arrow = arrowRef.current;
        const document = popover.ownerDocument;
        const track = trackRef.current;
        // If the popover body isn't being rendered for whatever reason (e.g. "display: none" or JSDOM),
        // or track does not belong to the document - bail on calculating dimensions.
        if (popover.offsetWidth === 0 || popover.offsetHeight === 0 || !nodeContains(document.body, track)) {
            return;
        }
        // Imperatively move body off-screen to give it room to expand.
        // Not doing this in React because this recalculation should happen
        // in the span of a single frame without rerendering anything.
        const prevTop = popover.style.top;
        const prevLeft = popover.style.left;
        popover.style.top = '0';
        popover.style.left = '0';
        // Imperatively remove body styles that can remain from the previous computation.
        body.style.maxHeight = '';
        body.style.overflowX = '';
        body.style.overflowY = '';
        // Get rects representing key elements
        // Use getComputedStyle for arrowRect to avoid modifications made by transform
        const viewportRect = getViewportRect(document.defaultView);
        const trackRect = track.getBoundingClientRect();
        const arrowRect = {
            width: parseFloat(getComputedStyle(arrow).width),
            height: parseFloat(getComputedStyle(arrow).height),
        };
        const containingBlock = getContainingBlock(popover);
        const containingBlockRect = containingBlock ? containingBlock.getBoundingClientRect() : viewportRect;
        const bodyBorderWidth = getBorderWidth(body);
        const contentRect = contentRef.current.getBoundingClientRect();
        const contentBoundingBox = {
            width: contentRect.width + 2 * bodyBorderWidth,
            height: contentRect.height + 2 * bodyBorderWidth,
        };
        // Calculate the arrow direction and viewport-relative position of the popover.
        const { scrollable, internalPosition: newInternalPosition, boundingOffset, } = calculatePosition(position, trackRect, arrowRect, contentBoundingBox, containingBlock ? containingBlockRect : getDocumentRect(document), viewportRect, renderWithPortal);
        // Get the position of the popover relative to the offset parent.
        const popoverOffset = toRelativePosition(boundingOffset, containingBlockRect);
        // Cache the distance between the trigger and the popover (which stays the same as you scroll),
        // and use that to recalculate the new popover position.
        const trackRelativeOffset = toRelativePosition(popoverOffset, toRelativePosition(trackRect, containingBlockRect));
        // Bring back the container to its original position to prevent any flashing.
        popover.style.top = prevTop;
        popover.style.left = prevLeft;
        // Allow popover body to scroll if can't fit the popover into the container/viewport otherwise.
        if (scrollable) {
            body.style.maxHeight = boundingOffset.height + 'px';
            body.style.overflowX = 'hidden';
            body.style.overflowY = 'auto';
        }
        // Position the popover
        setInternalPosition(newInternalPosition);
        setPopoverStyle({ top: popoverOffset.top, left: popoverOffset.left });
        positionHandlerRef.current = () => {
            const newTrackOffset = toRelativePosition(track.getBoundingClientRect(), containingBlock ? containingBlock.getBoundingClientRect() : viewportRect);
            setPopoverStyle({
                top: newTrackOffset.top + trackRelativeOffset.top,
                left: newTrackOffset.left + trackRelativeOffset.left,
            });
        };
    }, [position, trackRef, renderWithPortal]);
    // Recalculate position when properties change.
    useLayoutEffect(() => {
        updatePositionHandler();
    }, [updatePositionHandler, trackKey]);
    // Recalculate position when content size changes.
    useResizeObserver(contentRef, () => updatePositionHandler());
    // Recalculate position on DOM events.
    useLayoutEffect(() => {
        /*
          This is a heuristic. Some layout changes are caused by user clicks (e.g. toggling the tools panel, submitting a form),
          and by tracking the click event we can adapt the popover's position to the new layout.
    
          TODO: extend this to Enter and Spacebar?
        */
        const updatePosition = () => requestAnimationFrame(() => updatePositionHandler());
        const refreshPosition = () => requestAnimationFrame(() => positionHandlerRef.current());
        window.addEventListener('click', updatePosition);
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', refreshPosition, true);
        return () => {
            window.removeEventListener('click', updatePosition);
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', refreshPosition, true);
        };
    }, [updatePositionHandler]);
    return (React.createElement("div", { ref: popoverRef, style: Object.assign(Object.assign({}, popoverStyle), { zIndex }), className: clsx(styles.container, isRefresh && styles.refresh) },
        React.createElement("div", { ref: arrowRef, className: clsx(styles[`container-arrow`], styles[`container-arrow-position-${internalPosition}`]), "aria-hidden": true }, arrow(internalPosition)),
        React.createElement("div", { ref: bodyRef, className: clsx(styles['container-body'], styles[`container-body-size-${size}`], {
                [styles['fixed-width']]: fixedWidth,
                [styles[`container-body-variant-${variant}`]]: variant,
            }) },
            React.createElement("div", { ref: contentRef }, children))));
}
function getBorderWidth(element) {
    return parseInt(getComputedStyle(element).borderWidth) || 0;
}
/**
 * Convert a viewport-relative offset to an element-relative offset.
 */
function toRelativePosition(element, parent) {
    return {
        top: element.top - parent.top,
        left: element.left - parent.left,
    };
}
/**
 * Get a BoundingOffset that represents the visible viewport.
 */
function getViewportRect(window) {
    return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    };
}
function getDocumentRect(document) {
    const { top, left } = document.documentElement.getBoundingClientRect();
    return {
        top,
        left,
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
    };
}
//# sourceMappingURL=container.js.map