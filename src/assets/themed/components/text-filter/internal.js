import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import InternalInput from '../input/internal';
import { getBaseProps } from '../internal/base-component';
import useForwardFocus from '../internal/hooks/forward-focus';
import { fireNonCancelableEvent } from '../internal/events';
import styles from './styles.css.js';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { SearchResults } from './search-results';
const InternalTextFilter = React.forwardRef((_a, ref) => {
    var { filteringText, filteringAriaLabel, filteringPlaceholder, filteringClearAriaLabel, disabled, countText, onChange, onDelayedChange, __internalRootRef } = _a, rest = __rest(_a, ["filteringText", "filteringAriaLabel", "filteringPlaceholder", "filteringClearAriaLabel", "disabled", "countText", "onChange", "onDelayedChange", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const inputRef = useRef(null);
    useForwardFocus(ref, inputRef);
    const searchResultsId = useUniqueId('text-filter-search-results');
    const showResults = filteringText && countText && !disabled;
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement(InternalInput, { ref: inputRef, className: styles.input, type: "search", ariaLabel: filteringAriaLabel, placeholder: filteringPlaceholder, value: filteringText, disabled: disabled, autoComplete: false, ariaDescribedby: showResults ? searchResultsId : undefined, clearAriaLabel: filteringClearAriaLabel, onChange: event => fireNonCancelableEvent(onChange, { filteringText: event.detail.value }), __onDelayedInput: event => fireNonCancelableEvent(onDelayedChange, { filteringText: event.detail.value }) }),
        showResults ? React.createElement(SearchResults, { id: searchResultsId }, countText) : null));
});
export default InternalTextFilter;
//# sourceMappingURL=internal.js.map