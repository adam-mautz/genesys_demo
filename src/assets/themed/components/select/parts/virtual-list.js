// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useMergeRefs } from '../../internal/hooks/use-merge-refs';
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import OptionsList from '../../internal/components/options-list';
import { renderOptions } from '../utils/render-options';
import { useVirtual } from 'react-virtual';
import { useContainerQuery } from '../../internal/hooks/container-queries';
import styles from './styles.css.js';
const VirtualList = (props, ref) => {
    return props.menuProps.open ? React.createElement(VirtualListOpen, Object.assign({}, props, { ref: ref })) : React.createElement(VirtualListClosed, Object.assign({}, props, { ref: ref }));
};
const VirtualListOpen = forwardRef(({ menuProps, getOptionProps, filteredOptions, filteringValue, highlightType, checkboxes, hasDropdownStatus, listBottom, useInteractiveGroups, screenReaderContent, }, ref) => {
    // update component, when it gets wider or narrower to reposition items
    const [width, menuMeasureRef] = useContainerQuery(rect => rect.width, []);
    const menuRefObject = useRef(null);
    const menuRef = useMergeRefs(menuMeasureRef, menuRefObject, menuProps.ref);
    const { virtualItems, totalSize, scrollToIndex } = useVirtual({
        size: filteredOptions.length,
        parentRef: menuRefObject,
        // estimateSize is a dependency of measurements memo. We update it to force full recalculation
        // when the height of any option could have changed:
        // 1: because the component got resized (width property got updated)
        // 2: because the option changed its content (filteringValue property controls the highlight and the visibility of hidden tags)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        estimateSize: useCallback(() => 31, [width, filteringValue]),
        overscan: 5,
    });
    useImperativeHandle(ref, () => (index) => {
        if (highlightType === 'keyboard') {
            scrollToIndex(index);
        }
    }, [highlightType, scrollToIndex]);
    const finalOptions = renderOptions({
        options: virtualItems.map(({ index }) => filteredOptions[index]),
        getOptionProps,
        filteringValue,
        highlightType,
        checkboxes,
        hasDropdownStatus,
        virtualItems,
        useInteractiveGroups,
        screenReaderContent,
        ariaSetsize: filteredOptions.length,
    });
    return (React.createElement(OptionsList, Object.assign({}, menuProps, { ref: menuRef }),
        React.createElement("div", { "aria-hidden": "true", key: "total-size", className: styles['layout-strut'], style: { height: totalSize } }),
        finalOptions,
        listBottom ? (React.createElement("li", { role: "option", className: styles['list-bottom'] }, listBottom)) : null));
});
const VirtualListClosed = forwardRef(({ menuProps, listBottom }, ref) => {
    useImperativeHandle(ref, () => () => { }, []);
    return (React.createElement(OptionsList, Object.assign({}, menuProps, { ref: menuProps.ref }), listBottom ? (React.createElement("li", { role: "option", className: styles['list-bottom'] }, listBottom)) : null));
});
export default forwardRef(VirtualList);
//# sourceMappingURL=virtual-list.js.map