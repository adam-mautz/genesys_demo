// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
import { createSingletonHandler } from './use-singleton-handler';
const useEventListenersSingleton = createSingletonHandler(setTarget => {
    function handleMouseDown(event) {
        setTarget(event.target);
    }
    function handleKeyDown() {
        setTarget(null);
    }
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('keydown', handleKeyDown);
    };
});
/**
 * Captures last mouse down target and clears it on keydown.
 * @returns a callback to get the last detected mouse down target.
 */
export default function useMouseDownTarget() {
    const mouseDownTargetRef = useRef(null);
    useEventListenersSingleton(target => {
        mouseDownTargetRef.current = target;
    });
    return () => mouseDownTargetRef.current;
}
//# sourceMappingURL=use-mouse-down-target.js.map