// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import { useMutationObserver } from '../../hooks/use-mutation-observer';
import { useStableEventHandler } from '../../hooks/use-stable-event-handler';
import styles from './styles.css.js';
function setIfChanged(oldValue, newValue, setter) {
    if (oldValue !== newValue) {
        setter(newValue);
    }
}
export default function DarkRibbon({ children, isRefresh, hasPlainStyling }) {
    const containerRef = useRef(null);
    const fillRef = useRef(null);
    const syncSizes = useStableEventHandler((from, to) => {
        // JSDOM calls mutation observer callback even if attribute did not change
        // https://github.com/jsdom/jsdom/issues/3305
        // To prevent infinite loops, we need to check the values before setting
        const size = from.getBoundingClientRect();
        const { height: oldHeight, left: oldLeft, right: oldRight } = to.style;
        setIfChanged(oldHeight, `${size.height}px`, newHeight => (to.style.height = newHeight));
        setIfChanged(oldLeft, `${-1 * size.left}px`, newLeft => (to.style.left = newLeft));
        setIfChanged(oldRight, `${-1 * (document.body.clientWidth - size.right)}px`, newRight => (to.style.right = newRight));
    });
    useMutationObserver(containerRef, node => {
        if (fillRef.current) {
            syncSizes(node, fillRef.current);
        }
    });
    useEffect(() => {
        const handler = () => {
            if (containerRef.current && fillRef.current) {
                syncSizes(containerRef.current, fillRef.current);
            }
        };
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, [syncSizes]);
    if (hasPlainStyling === true || !isRefresh) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement("div", { ref: containerRef, className: "awsui-context-content-header" },
        React.createElement("div", { ref: fillRef, className: styles['background-fill'] }),
        React.createElement("div", { className: styles.content }, children)));
}
//# sourceMappingURL=index.js.map