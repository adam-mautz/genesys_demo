import { KeyCode } from '../../internal/keycode';
const KEYBOARD_SINGLE_STEP_SIZE = 10;
const KEYBOARD_MULTIPLE_STEPS_SIZE = 60;
const getCurrentSize = (splitPanelRef) => {
    if (!splitPanelRef || !splitPanelRef.current) {
        return {
            splitPanelHeight: 0,
            splitPanelWidth: 0,
        };
    }
    const safeParseFloat = (size = '') => parseFloat(size) || 0;
    return {
        splitPanelHeight: safeParseFloat(splitPanelRef.current.style.height),
        splitPanelWidth: safeParseFloat(splitPanelRef.current.style.width),
    };
};
export const useKeyboardEvents = ({ position, setSidePanelWidth, setBottomPanelHeight, splitPanelRef, }) => {
    return (event) => {
        let setSizeFunction;
        let currentSize;
        let maxSize;
        const { splitPanelHeight, splitPanelWidth } = getCurrentSize(splitPanelRef);
        if (position === 'side') {
            setSizeFunction = setSidePanelWidth;
            currentSize = splitPanelWidth;
            // don't need the exact max size as it's constrained in the set size function
            maxSize = window.innerWidth;
        }
        else {
            setSizeFunction = setBottomPanelHeight;
            currentSize = splitPanelHeight;
            // don't need the exact max size as it's constrained in the set size function
            maxSize = window.innerHeight;
        }
        const primaryGrowKey = position === 'bottom' ? KeyCode.up : KeyCode.left;
        const primaryShrinkKey = position === 'bottom' ? KeyCode.down : KeyCode.right;
        const altGrowKey = position === 'bottom' ? KeyCode.right : KeyCode.down;
        const altShrinkKey = position === 'bottom' ? KeyCode.left : KeyCode.up;
        let isEventHandled = true;
        switch (event.keyCode) {
            case primaryGrowKey:
            case altGrowKey:
                setSizeFunction(currentSize + KEYBOARD_SINGLE_STEP_SIZE);
                break;
            case primaryShrinkKey:
            case altShrinkKey:
                setSizeFunction(currentSize - KEYBOARD_SINGLE_STEP_SIZE);
                break;
            case KeyCode.pageUp:
                setSizeFunction(currentSize + KEYBOARD_MULTIPLE_STEPS_SIZE);
                break;
            case KeyCode.pageDown:
                setSizeFunction(currentSize - KEYBOARD_MULTIPLE_STEPS_SIZE);
                break;
            case KeyCode.home:
                setSizeFunction(maxSize);
                break;
            case KeyCode.end:
                setSizeFunction(0);
                break;
            default:
                isEventHandled = false;
        }
        if (isEventHandled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
};
//# sourceMappingURL=use-keyboard-events.js.map