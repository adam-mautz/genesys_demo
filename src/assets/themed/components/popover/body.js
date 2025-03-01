// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { KeyCode } from '../internal/keycode';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { InternalButton } from '../button/internal';
import FocusLock from '../internal/components/focus-lock';
import styles from './styles.css.js';
export default function PopoverBody({ dismissButton: showDismissButton, dismissAriaLabel, header, children, onDismiss, variant, overflowVisible, className, ariaLabelledby, }) {
    const labelledById = useUniqueId('awsui-popover-');
    const dismissButtonFocused = useRef(false);
    const dismissButtonRef = useRef(null);
    const onKeyDown = useCallback((event) => {
        if (event.keyCode === KeyCode.escape) {
            onDismiss();
        }
    }, [onDismiss]);
    // Implement our own auto-focus rather than using FocusLock's,
    // because we also want to focus the dismiss button when it
    // is added dyamically (e.g. in chart popovers)
    useEffect(() => {
        var _a;
        if (showDismissButton && !dismissButtonFocused.current) {
            (_a = dismissButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
        dismissButtonFocused.current = showDismissButton;
    }, [showDismissButton]);
    const dismissButton = (showDismissButton !== null && showDismissButton !== void 0 ? showDismissButton : null) && (React.createElement("div", { className: styles.dismiss },
        React.createElement(InternalButton, { variant: "icon", formAction: "none", iconName: "close", className: styles['dismiss-control'], ariaLabel: dismissAriaLabel, onClick: () => onDismiss(), ref: dismissButtonRef })));
    const isDialog = showDismissButton;
    const shouldTrapFocus = showDismissButton && variant !== 'annotation';
    const dialogProps = isDialog
        ? {
            role: 'dialog',
            'aria-modal': shouldTrapFocus ? true : undefined,
            'aria-labelledby': ariaLabelledby !== null && ariaLabelledby !== void 0 ? ariaLabelledby : (header ? labelledById : undefined),
        }
        : {};
    return (React.createElement("div", Object.assign({ className: clsx(styles.body, className, {
            [styles['body-overflow-visible']]: overflowVisible === 'both',
        }), onKeyDown: onKeyDown }, dialogProps),
        React.createElement(FocusLock, { disabled: !shouldTrapFocus, autoFocus: false },
            header && (React.createElement("div", { className: clsx(styles['header-row'], showDismissButton && styles['has-dismiss']) },
                dismissButton,
                React.createElement("div", { className: styles.header, id: labelledById },
                    React.createElement("h2", null, header)))),
            React.createElement("div", { className: !header && showDismissButton ? styles['has-dismiss'] : undefined },
                !header && dismissButton,
                React.createElement("div", { className: clsx(styles.content, { [styles['content-overflow-visible']]: !!overflowVisible }) }, children)))));
}
//# sourceMappingURL=body.js.map