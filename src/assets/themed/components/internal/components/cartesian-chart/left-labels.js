// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useRef } from 'react';
import clsx from 'clsx';
import { TICK_LENGTH, TICK_MARGIN } from './constants';
import styles from './styles.css.js';
import { formatTicks, getVisibleTicks } from './label-utils';
const OFFSET_PX = 12;
export default memo(LeftLabels);
// Renders the visible tick labels on the left axis, as well as their grid lines.
function LeftLabels({ axis = 'y', width, height, scale, ticks, tickFormatter, title, ariaRoleDescription, }) {
    const virtualTextRef = useRef(null);
    const yOffset = axis === 'x' && scale.isCategorical() ? Math.max(0, scale.d3Scale.bandwidth() - 1) / 2 : 0;
    const cacheRef = useRef({});
    const getLabelSpace = (label) => {
        if (cacheRef.current[label] !== undefined) {
            return cacheRef.current[label];
        }
        if (virtualTextRef.current && virtualTextRef.current.getBBox) {
            virtualTextRef.current.textContent = label;
            cacheRef.current[label] = virtualTextRef.current.getBBox().height;
            return cacheRef.current[label];
        }
        return 0;
    };
    const formattedTicks = formatTicks({ ticks, scale, getLabelSpace, tickFormatter });
    if (virtualTextRef.current) {
        virtualTextRef.current.textContent = '';
    }
    const from = 0 - OFFSET_PX - yOffset;
    const until = height + OFFSET_PX - yOffset;
    const visibleTicks = getVisibleTicks(formattedTicks, from, until);
    return (React.createElement("g", { className: clsx(styles['labels-left']), "aria-label": title, role: "list", "aria-roledescription": ariaRoleDescription, "aria-hidden": true },
        visibleTicks.map(({ position, lines }, index) => isFinite(position) && (React.createElement("g", { key: index, role: "listitem", transform: `translate(0,${position + yOffset})`, className: clsx(styles.ticks, axis === 'x' ? styles['ticks--x'] : styles['ticks--y']) },
            axis === 'y' && (React.createElement("line", { className: clsx(styles.grid, styles.ticks_line), x1: -TICK_LENGTH, y1: 0, x2: width, y2: 0, "aria-hidden": "true" })),
            React.createElement("text", { className: styles.ticks__text, x: -(TICK_LENGTH + TICK_MARGIN), y: 0 }, lines.join(' '))))),
        React.createElement("text", { ref: virtualTextRef, x: 0, y: 0, style: { visibility: 'hidden' }, "aria-hidden": "true" })));
}
//# sourceMappingURL=left-labels.js.map