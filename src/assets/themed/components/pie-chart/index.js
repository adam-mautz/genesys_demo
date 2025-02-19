import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { useControllable } from '../internal/hooks/use-controllable';
import { fireNonCancelableEvent } from '../internal/events';
import Legend from '../internal/components/chart-legend';
import Filter from '../internal/components/chart-filter';
import InternalSpaceBetween from '../space-between/internal';
import InternalBox from '../box/internal';
import InternalPieChart from './pie-chart';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import createCategoryColorScale from '../internal/utils/create-category-color-scale';
import useContainerWidth from '../internal/utils/use-container-width';
import { nodeContains } from '../internal/utils/dom';
const PieChart = function PieChart(_a) {
    var { variant = 'pie', size = 'medium', hideTitles = false, hideDescriptions = false, hideLegend = false, hideFilter = false, statusType = 'finished', data: externalData = [], i18nStrings = {}, highlightedSegment: controlledHighlightedSegment, visibleSegments: controlledVisibleSegments, onHighlightChange: controlledOnHighlightChange, onFilterChange, additionalFilters, legendTitle, detailPopoverSize = 'medium' } = _a, props = __rest(_a, ["variant", "size", "hideTitles", "hideDescriptions", "hideLegend", "hideFilter", "statusType", "data", "i18nStrings", "highlightedSegment", "visibleSegments", "onHighlightChange", "onFilterChange", "additionalFilters", "legendTitle", "detailPopoverSize"]);
    const { __internalRootRef = null } = useBaseComponent('PieChart');
    const baseProps = getBaseProps(props);
    const isEmpty = !externalData || externalData.length === 0;
    const containerAttr = Object.assign(Object.assign({}, baseProps), { className: clsx(baseProps.className, styles.root) });
    const containerRef = useRef(null);
    const [containerWidth, measureRef] = useContainerWidth();
    const data = useMemo(() => {
        const colors = createCategoryColorScale(externalData, undefined, it => it.color || null);
        return externalData.map((datum, i) => ({
            index: i,
            color: colors[i],
            datum,
        }));
    }, [externalData]);
    const [highlightedSegment = null, setHighlightedSegment] = useControllable(controlledHighlightedSegment, controlledOnHighlightChange, null, {
        componentName: 'PieChart',
        controlledProp: 'highlightedSegment',
        changeHandler: 'onHighlightChange',
    });
    const [legendSegment, setLegendSegment] = useState(highlightedSegment);
    useEffect(() => {
        setLegendSegment(controlledHighlightedSegment || null);
    }, [controlledHighlightedSegment]);
    const [visibleSegments, setVisibleSegments] = useControllable(controlledVisibleSegments, onFilterChange, externalData, {
        componentName: 'PieChart',
        controlledProp: 'visibleSegments',
        changeHandler: 'onFilterChange',
    });
    const [pinnedSegment, setPinnedSegment] = useState(null);
    const visibleData = useMemo(() => data.filter(d => (visibleSegments === null || visibleSegments === void 0 ? void 0 : visibleSegments.indexOf(d.datum)) !== -1), [data, visibleSegments]);
    const filterItems = data === null || data === void 0 ? void 0 : data.map(data => ({
        label: data.datum.title,
        color: data.color,
        type: 'rectangle',
        datum: data.datum,
    }));
    const legendItems = filterItems.filter(d => (visibleSegments === null || visibleSegments === void 0 ? void 0 : visibleSegments.indexOf(d.datum)) !== -1);
    const filterChange = useCallback((selectedSeries) => {
        setVisibleSegments(selectedSeries);
        fireNonCancelableEvent(onFilterChange, {
            visibleSegments: selectedSeries,
        });
    }, [setVisibleSegments, onFilterChange]);
    const onHighlightChange = useCallback((segment) => {
        setLegendSegment(segment);
        setHighlightedSegment(segment);
        fireNonCancelableEvent(controlledOnHighlightChange, { highlightedSegment: segment });
    }, [controlledOnHighlightChange, setHighlightedSegment]);
    const onBlur = (event) => {
        if (event.relatedTarget && !nodeContains(containerRef.current, event.relatedTarget)) {
            highlightedSegment && onHighlightChange(null);
            setLegendSegment(null);
        }
    };
    const mergedRef = useMergeRefs(containerRef, measureRef, __internalRootRef);
    return (React.createElement("div", Object.assign({}, containerAttr, { ref: mergedRef, onBlur: onBlur }),
        statusType === 'finished' && !isEmpty && (additionalFilters || !hideFilter) && (React.createElement(InternalBox, { className: styles['filter-container'], margin: { bottom: 'l' } },
            React.createElement(InternalSpaceBetween, { size: "l", direction: "horizontal", className: clsx({
                    [styles['has-default-filter']]: !hideFilter,
                }) },
                !hideFilter && (React.createElement(Filter, { series: filterItems, onChange: filterChange, selectedSeries: visibleSegments, i18nStrings: i18nStrings })),
                additionalFilters))),
        React.createElement(InternalPieChart, Object.assign({}, props, { variant: variant, size: size, data: externalData, visibleData: visibleData, width: containerWidth, statusType: statusType, hideTitles: hideTitles, hideDescriptions: hideDescriptions, hideLegend: hideLegend, hideFilter: hideFilter, additionalFilters: additionalFilters, i18nStrings: i18nStrings, onHighlightChange: onHighlightChange, highlightedSegment: highlightedSegment, legendSegment: legendSegment, pinnedSegment: pinnedSegment, setPinnedSegment: setPinnedSegment, detailPopoverSize: detailPopoverSize })),
        !hideLegend && !isEmpty && statusType === 'finished' && (React.createElement(InternalBox, { margin: { top: 'm' } },
            React.createElement(Legend, { series: legendItems, highlightedSeries: legendSegment, legendTitle: legendTitle, ariaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.legendAriaLabel, onHighlightChange: onHighlightChange, plotContainerRef: containerRef })))));
};
applyDisplayName(PieChart, 'PieChart');
export default PieChart;
//# sourceMappingURL=index.js.map