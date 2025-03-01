// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import { arc } from 'd3-shape';
import { dimensionsBySize, refreshDimensionsBySize } from './utils';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
import clsx from 'clsx';
export default function Segments({ pieData, highlightedSegment, size, variant, focusedSegmentRef, popoverTrackRef, segmentAriaRoleDescription, onMouseDown, onMouseOver, onMouseOut, }) {
    const isRefresh = useVisualRefresh();
    const { arcFactory, highlightedArcFactory } = useMemo(() => {
        const dimensions = isRefresh ? refreshDimensionsBySize[size] : dimensionsBySize[size];
        const radius = dimensions.outerRadius;
        const innerRadius = variant === 'pie' ? 0 : dimensions.innerRadius;
        const cornerRadius = dimensions.cornerRadius || 0;
        const arcFactory = arc()
            .innerRadius(innerRadius)
            .outerRadius(radius)
            .cornerRadius(cornerRadius);
        const highlightedArcFactory = arc()
            .innerRadius(radius + 4)
            .outerRadius(radius + 6);
        return {
            arcFactory,
            highlightedArcFactory,
        };
    }, [size, variant, isRefresh]);
    const centroid = useMemo(() => {
        for (const datum of pieData) {
            if (datum.data.datum === highlightedSegment) {
                const [centroidLeft, centroidTop] = arcFactory.centroid(datum);
                return { cx: centroidLeft, cy: centroidTop };
            }
        }
        return null;
    }, [highlightedSegment, pieData, arcFactory]);
    return (React.createElement("g", { onMouseLeave: event => onMouseOut(event) },
        pieData.map(datum => {
            const isHighlighted = highlightedSegment === datum.data.datum;
            const isDimmed = highlightedSegment !== null && !isHighlighted;
            const arcPath = arcFactory(datum) || undefined;
            const highlightedPath = highlightedArcFactory(datum) || undefined;
            return (React.createElement("g", { key: datum.data.index, onMouseDown: e => {
                    onMouseDown(datum.data);
                    e.preventDefault();
                }, onMouseOver: () => onMouseOver(datum.data), className: clsx(styles.segment, {
                    [styles['segment--highlighted']]: isHighlighted,
                    [styles['segment--dimmed']]: isDimmed,
                }), ref: isHighlighted ? focusedSegmentRef : undefined, "aria-label": `${datum.data.datum.title} (${datum.data.datum.value})`, role: "button", "aria-roledescription": segmentAriaRoleDescription },
                React.createElement("path", { d: arcPath, fill: datum.data.color, className: styles.segment__path, "aria-hidden": "true" }),
                React.createElement("path", { d: highlightedPath, fill: datum.data.color, className: clsx(styles.segment__path, styles.segment__highlight), "aria-hidden": "true" })));
        }),
        React.createElement("circle", Object.assign({}, centroid, { ref: popoverTrackRef, r: "1", opacity: "0", "aria-hidden": "true" }))));
}
//# sourceMappingURL=segments.js.map