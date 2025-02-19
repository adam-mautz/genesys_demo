import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { isDevelopment } from '../internal/is-development';
import { getBaseProps } from '../internal/base-component';
import InternalBox from '../box/internal';
import ChartStatusContainer, { getChartStatus } from '../internal/components/chart-status-container';
import AreaChartFilter from './elements/area-chart-filter';
import AreaChartLegend from './elements/area-chart-legend';
import InternalSpaceBetween from '../space-between/internal';
import ChartContainer from './chart-container';
import cartesianStyles from '../internal/components/cartesian-chart/styles.css.js';
import styles from './styles.css.js';
import useChartModel from './model/use-chart-model';
import useFilterProps from './model/use-filter-props';
import useHighlightProps from './model/use-highlight-props';
import { isSeriesValid } from './model/utils';
import { warnOnce } from '../internal/logging';
import { nodeContains } from '../internal/utils/dom';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
export default function InternalAreaChart(_a) {
    var { height, xScaleType, yScaleType, xDomain, yDomain, highlightedSeries: controlledHighlightedSeries, visibleSeries: controlledVisibleSeries, series: externalSeries, onFilterChange: controlledOnVisibleChange, onHighlightChange: controlledOnHighlightChange, i18nStrings, ariaLabel, ariaLabelledby, ariaDescription, xTitle, yTitle, hideFilter, additionalFilters, hideLegend, legendTitle, statusType, detailPopoverSize, empty, noMatch, errorText, loadingText, recoveryText, onRecoveryClick, __internalRootRef = null } = _a, props = __rest(_a, ["height", "xScaleType", "yScaleType", "xDomain", "yDomain", "highlightedSeries", "visibleSeries", "series", "onFilterChange", "onHighlightChange", "i18nStrings", "ariaLabel", "ariaLabelledby", "ariaDescription", "xTitle", "yTitle", "hideFilter", "additionalFilters", "hideLegend", "legendTitle", "statusType", "detailPopoverSize", "empty", "noMatch", "errorText", "loadingText", "recoveryText", "onRecoveryClick", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    const containerRef = useRef(null);
    const popoverRef = useRef(null);
    if (isDevelopment) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!isSeriesValid(externalSeries)) {
                warnOnce('AreaChart', "The `series` property violates the component's constraints: all `area` " +
                    'series must have `data` arrays of the same length and with the same x-values.');
            }
        }, [externalSeries]);
    }
    const [width, setWidth] = useState(0);
    const [visibleSeries, setVisibleSeries] = useFilterProps(externalSeries, controlledVisibleSeries, controlledOnVisibleChange);
    const [highlightedSeries, setHighlightedSeries] = useHighlightProps(externalSeries, controlledHighlightedSeries, controlledOnHighlightChange);
    const model = useChartModel({
        externalSeries,
        visibleSeries,
        setVisibleSeries,
        highlightedSeries,
        setHighlightedSeries,
        xDomain,
        yDomain,
        xScaleType,
        yScaleType,
        height,
        width,
        popoverRef,
    });
    const { isEmpty, isNoMatch, showChart } = getChartStatus({
        externalData: externalSeries,
        visibleData: visibleSeries,
        statusType,
    });
    const showFilters = statusType === 'finished' && (!isEmpty || isNoMatch) && (additionalFilters || !hideFilter);
    const showLegend = !hideLegend && !isEmpty && statusType === 'finished';
    const reserveLegendSpace = !showChart && !hideLegend;
    const reserveFilterSpace = !showChart && !isNoMatch && (!hideFilter || additionalFilters);
    useEffect(() => {
        const onKeyDown = model.handlers.onDocumentKeyDown;
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [model.handlers.onDocumentKeyDown]);
    const onBlur = (event) => {
        if (event.relatedTarget && !nodeContains(containerRef.current, event.relatedTarget)) {
            model.handlers.onContainerBlur();
        }
    };
    const mergedRef = useMergeRefs(containerRef, __internalRootRef);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: mergedRef, onBlur: onBlur }),
        showFilters && (React.createElement(InternalBox, { className: cartesianStyles['filter-container'], margin: { bottom: 'l' } },
            React.createElement(InternalSpaceBetween, { size: "l", direction: "horizontal", className: clsx({ [styles['has-default-filter']]: !hideFilter }) },
                !hideFilter && (React.createElement(AreaChartFilter, { model: model, filterLabel: i18nStrings.filterLabel, filterPlaceholder: i18nStrings.filterPlaceholder, filterSelectedAriaLabel: i18nStrings.filterSelectedAriaLabel })),
                additionalFilters))),
        React.createElement("div", { className: clsx(styles.content, {
                [styles['content--reserve-filter']]: reserveFilterSpace,
                [styles['content--reserve-legend']]: reserveLegendSpace,
            }), style: { minHeight: height } },
            React.createElement(ChartStatusContainer, { isEmpty: isEmpty, isNoMatch: isNoMatch, showChart: showChart, statusType: statusType, empty: empty, noMatch: noMatch, loadingText: loadingText, errorText: errorText, recoveryText: recoveryText, onRecoveryClick: onRecoveryClick }),
            showChart && (React.createElement(ChartContainer, { model: model, autoWidth: setWidth, detailPopoverSize: detailPopoverSize, xTitle: xTitle, yTitle: yTitle, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, i18nStrings: i18nStrings }))),
        showLegend && (React.createElement(InternalBox, { margin: { top: 'm' } },
            React.createElement(AreaChartLegend, { plotContainerRef: containerRef, model: model, legendTitle: legendTitle, ariaLabel: i18nStrings.legendAriaLabel })))));
}
//# sourceMappingURL=internal.js.map