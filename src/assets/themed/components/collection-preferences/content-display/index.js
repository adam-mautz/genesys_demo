// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import styles from '../styles.css.js';
import { getSortedOptions } from './utils';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './sortable-item';
import useDragAndDropReorder from './use-drag-and-drop-reorder';
import useLiveAnnouncements from './use-live-announcements';
const componentPrefix = 'content-display';
const getClassName = (suffix) => styles[`${componentPrefix}-${suffix}`];
export default function ContentDisplayPreference({ title, description, options, value = options.map(({ id }) => ({
    id,
    visible: true,
})), onChange, liveAnnouncementDndStarted, liveAnnouncementDndItemReordered, liveAnnouncementDndItemCommitted, liveAnnouncementDndDiscarded, dragHandleAriaDescription, dragHandleAriaLabel, }) {
    const idPrefix = useUniqueId(componentPrefix);
    const onToggle = (option) => {
        onChange(value.map(item => (item.id === option.id ? Object.assign(Object.assign({}, item), { visible: !option.visible }) : item)));
    };
    const titleId = `${idPrefix}-title`;
    const descriptionId = `${idPrefix}-description`;
    const sortedOptions = getSortedOptions({ options, contentDisplay: value });
    const { activeItem, collisionDetection, handleKeyDown, sensors, setActiveItem } = useDragAndDropReorder({
        sortedOptions,
    });
    const announcements = useLiveAnnouncements({
        isDragging: activeItem !== null,
        liveAnnouncementDndStarted,
        liveAnnouncementDndItemReordered,
        liveAnnouncementDndItemCommitted,
        liveAnnouncementDndDiscarded,
        sortedOptions: value,
    });
    return (React.createElement("div", { className: styles[componentPrefix] },
        React.createElement("h3", { className: getClassName('title'), id: titleId }, title),
        React.createElement("p", { className: getClassName('description'), id: descriptionId }, description),
        React.createElement(DndContext, { sensors: sensors, collisionDetection: collisionDetection, accessibility: {
                announcements,
                restoreFocus: false,
                screenReaderInstructions: dragHandleAriaDescription ? { draggable: dragHandleAriaDescription } : undefined,
            }, onDragStart: ({ active }) => setActiveItem(active.id), onDragEnd: event => {
                setActiveItem(null);
                const { active, over } = event;
                if (over && active.id !== over.id) {
                    const oldIndex = value.findIndex(({ id }) => id === active.id);
                    const newIndex = value.findIndex(({ id }) => id === over.id);
                    onChange(arrayMove([...value], oldIndex, newIndex));
                }
            }, onDragCancel: () => setActiveItem(null) },
            React.createElement("ul", { className: getClassName('option-list'), "aria-describedby": descriptionId, "aria-labelledby": titleId, role: "list" },
                React.createElement(SortableContext, { items: sortedOptions.map(({ id }) => id), strategy: verticalListSortingStrategy }, sortedOptions.map(option => (React.createElement(SortableItem, { dragHandleAriaLabel: dragHandleAriaLabel, key: option.id, onKeyDown: handleKeyDown, onToggle: onToggle, option: option }))))))));
}
//# sourceMappingURL=index.js.map