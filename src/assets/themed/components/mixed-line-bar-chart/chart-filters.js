// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import clsx from 'clsx';
import InternalSpaceBetween from '../space-between/internal';
import Filter from '../internal/components/chart-filter';
import { chartLegendMap } from './utils';
import styles from './styles.css.js';
export default function InternalChartFilters({ series, visibleSeries, onChange, i18nStrings, hideFilter, additionalFilters, }) {
    const filterItems = useMemo(() => series.map(({ series, color }) => ({
        label: series.title,
        type: chartLegendMap[series.type],
        color,
        datum: series,
    })), [series]);
    return (React.createElement(InternalSpaceBetween, { size: "l", direction: "horizontal", className: clsx({
            [styles['has-default-filter']]: !hideFilter,
        }) },
        !hideFilter && (React.createElement(Filter, { series: filterItems, onChange: onChange, selectedSeries: visibleSeries, i18nStrings: i18nStrings })),
        additionalFilters));
}
//# sourceMappingURL=chart-filters.js.map