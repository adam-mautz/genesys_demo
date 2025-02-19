// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import { containsOrEqual } from '../../internal/utils/dom';
import { useStableEventHandler } from '../../internal/hooks/use-stable-event-handler';
export function useClickAway(onClick) {
    const awayRef = useRef(null);
    const onClickStable = useStableEventHandler(onClick);
    useEffect(() => {
        function handleClick(event) {
            if (!containsOrEqual(awayRef.current, event.target)) {
                onClickStable();
            }
        }
        // contains returns wrong result if the next render would remove the element
        // but capture phase happens before the render, so returns correct result
        // Ref: https://github.com/facebook/react/issues/20325
        document.addEventListener('click', handleClick, { capture: true });
        return () => document.removeEventListener('click', handleClick, { capture: true });
    }, [onClickStable]);
    return awayRef;
}
export function ClickAway({ onClick, children }) {
    const onClickStable = useStableEventHandler(onClick);
    const ref = useRef(null);
    useEffect(() => {
        function handleClick(event) {
            if (!containsOrEqual(ref.current, event.target)) {
                onClickStable();
            }
        }
        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, [onClickStable]);
    return React.createElement("span", { ref: ref }, children);
}
//# sourceMappingURL=click-away.js.map