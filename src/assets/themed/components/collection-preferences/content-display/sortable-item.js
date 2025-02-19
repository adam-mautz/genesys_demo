// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import styles from '../styles.css.js';
import DragHandle from '../../internal/drag-handle';
import InternalToggle from '../../toggle/internal';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
const componentPrefix = 'sortable-item';
const getClassName = (suffix) => styles[`${componentPrefix}-${suffix}`];
export function SortableItem({ dragHandleAriaLabel, onKeyDown, onToggle, option, }) {
    var _a, _b, _c, _d, _e;
    const { isDragging, isSorting, listeners, over, rect, setNodeRef, transform } = useSortable({
        id: option.id,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };
    const idPrefix = useUniqueId(componentPrefix);
    const controlId = `${idPrefix}-control-${option.id}`;
    const dragHandleAttributes = {
        ['aria-label']: [dragHandleAriaLabel, option.label].join(', '),
    };
    const combinedListeners = Object.assign(Object.assign({}, listeners), { onKeyDown: (event) => {
            if (onKeyDown) {
                onKeyDown(event);
            }
            if (listeners === null || listeners === void 0 ? void 0 : listeners.onKeyDown) {
                listeners.onKeyDown(event);
            }
        } });
    // The placeholder is rendered from within the dragged item, but is shown at the position of the displaced item.
    // Therefore, we need to translate it by the right amount.
    // Unfortunately we can't use dnd-kit's recommended approach of using a drag overlay
    // because it renders out of place when drag and drop is used in our modal.
    const placeholderOffsetY = isDragging && ((_a = over === null || over === void 0 ? void 0 : over.rect) === null || _a === void 0 ? void 0 : _a.top) !== undefined && ((_b = rect.current) === null || _b === void 0 ? void 0 : _b.top) !== undefined
        ? over.rect.top > ((_c = rect.current) === null || _c === void 0 ? void 0 : _c.top)
            ? over.rect.bottom - ((_d = rect.current) === null || _d === void 0 ? void 0 : _d.bottom)
            : over.rect.top - ((_e = rect.current) === null || _e === void 0 ? void 0 : _e.top)
        : undefined;
    const placeholderStyle = placeholderOffsetY ? { transform: `translateY(${placeholderOffsetY}px)` } : undefined;
    return (React.createElement("li", { className: clsx(styles['content-display-option'], styles['sortable-item']) },
        isDragging && React.createElement("div", { className: getClassName('placeholder'), style: placeholderStyle }),
        React.createElement("div", { ref: setNodeRef, className: clsx(getClassName('content'), styles.draggable, isDragging && styles.active, isSorting && styles.sorting), style: style },
            React.createElement(DragHandle, { attributes: dragHandleAttributes, hideFocus: isDragging, listeners: combinedListeners }),
            React.createElement("label", { className: getClassName('label'), htmlFor: controlId }, option.label),
            React.createElement("div", { className: getClassName('toggle') },
                React.createElement(InternalToggle, { checked: !!option.visible, onChange: () => onToggle(option), disabled: option.alwaysVisible === true, controlId: controlId })))));
}
//# sourceMappingURL=sortable-item.js.map