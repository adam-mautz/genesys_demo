// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { KeyCode } from '../internal/keycode';
import { scrollElementIntoView } from '../internal/utils/scrollable-containers';
import FocusLock from '../internal/components/focus-lock';
import { InternalButton } from '../button/internal';
import { ResizableBox } from './resizable-box';
import styles from './styles.css.js';
const ANNOTATION_ITEM_HEIGHT = 31;
const PANE_ANNOTATIONS_PADDING = 12;
const MIN_HEIGHT = 3 * ANNOTATION_ITEM_HEIGHT + 2 * PANE_ANNOTATIONS_PADDING;
export const Pane = ({ id, visible, annotations, highlighted, onClose, onAnnotationClick, onAnnotationClear, cursorPositionLabel, closeButtonAriaLabel, }) => {
    const [paneHeight, setPaneHeight] = useState(MIN_HEIGHT);
    const listRef = useRef(null);
    const [isFocusTrapActive, setFocusTrapActive] = useState(false);
    useEffect(() => {
        var _a;
        if (!highlighted) {
            return;
        }
        const { row, column } = highlighted;
        const highlightedAnnotationIndex = annotations.indexOf(annotations.filter(a => a.row === row && a.column === column)[0]);
        if (highlightedAnnotationIndex > -1) {
            const errorItem = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.children[highlightedAnnotationIndex];
            scrollElementIntoView(errorItem);
        }
    }, [highlighted, annotations]);
    useEffect(() => {
        if (!visible) {
            setFocusTrapActive(false);
        }
    }, [visible]);
    const onItemFocus = () => {
        setFocusTrapActive(true);
        onAnnotationClear();
    };
    const onItemClick = (annotation) => {
        setFocusTrapActive(false);
        onAnnotationClick(annotation);
    };
    const onItemKeyDown = (annotation, event) => {
        if (event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) {
            event.preventDefault();
            setFocusTrapActive(false);
            onAnnotationClick(annotation);
        }
    };
    const onEscKeyDown = (event) => {
        if (event.keyCode === KeyCode.escape) {
            event.preventDefault();
            setFocusTrapActive(false);
            onClose();
        }
    };
    if (!visible) {
        return null;
    }
    return (React.createElement("div", { id: id, className: styles.pane, onKeyDown: onEscKeyDown, role: "tabpanel" },
        React.createElement(ResizableBox, { height: paneHeight, minHeight: MIN_HEIGHT, onResize: newHeight => setPaneHeight(newHeight) },
            React.createElement(FocusLock, { disabled: !isFocusTrapActive, className: styles['focus-lock'], autoFocus: true },
                React.createElement("div", { className: styles.pane__list, tabIndex: -1 },
                    React.createElement("table", { className: styles.pane__table, role: "presentation" },
                        React.createElement("colgroup", null,
                            React.createElement("col", { style: { width: 1 } /* shrink to fit content */ }),
                            React.createElement("col", { style: { width: 'auto' } })),
                        React.createElement("tbody", { ref: listRef }, annotations.map((annotation, i) => (React.createElement("tr", { key: i, className: clsx(styles.pane__item, {
                                [styles['pane__item--highlighted']]: annotation === highlighted,
                            }), onFocus: onItemFocus, onMouseOver: onAnnotationClear, onClick: onItemClick.bind(null, annotation), onKeyDown: onItemKeyDown.bind(null, annotation), tabIndex: 0, role: "link" },
                            React.createElement("td", { className: clsx(styles.pane__location, styles.pane__cell), tabIndex: -1 }, cursorPositionLabel((annotation.row || 0) + 1, (annotation.column || 0) + 1)),
                            React.createElement("td", { className: clsx(styles.pane__description, styles.pane__cell), tabIndex: -1 }, annotation.text))))))),
                React.createElement("div", { className: styles['pane__close-container'] },
                    React.createElement(InternalButton, { formAction: "none", variant: "icon", iconName: "close", onClick: onClose, ariaLabel: closeButtonAriaLabel }))))));
};
//# sourceMappingURL=pane.js.map