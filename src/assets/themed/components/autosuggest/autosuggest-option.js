import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import OptionComponent from '../internal/components/option';
import SelectableItem from '../internal/components/selectable-item';
import { getBaseProps } from '../internal/base-component';
import { getTestOptionIndexes } from '../internal/components/options-list/utils/test-indexes';
import styles from './styles.css.js';
const AutosuggestOption = (_a, ref) => {
    var { nativeAttributes = {}, highlightText, option, highlighted, highlightType, current, enteredTextLabel, virtualPosition, padBottom, screenReaderContent, ariaSetsize, ariaPosinset } = _a, rest = __rest(_a, ["nativeAttributes", "highlightText", "option", "highlighted", "highlightType", "current", "enteredTextLabel", "virtualPosition", "padBottom", "screenReaderContent", "ariaSetsize", "ariaPosinset"]);
    const baseProps = getBaseProps(rest);
    const useEntered = 'type' in option && option.type === 'use-entered';
    const isParent = 'type' in option && option.type === 'parent';
    const isChild = 'type' in option && option.type === 'child';
    const { throughIndex, inGroupIndex, groupIndex } = getTestOptionIndexes(option) || {};
    let optionContent;
    if (useEntered) {
        optionContent = enteredTextLabel(option.value || '');
        // we don't want fancy generated content for screenreader for the "Use..." option,
        // just the visible text is fine
        screenReaderContent = undefined;
    }
    else if (isParent) {
        optionContent = option.label;
    }
    else {
        const a11yProperties = {};
        if (nativeAttributes['aria-label']) {
            a11yProperties['aria-label'] = nativeAttributes['aria-label'];
        }
        optionContent = (React.createElement("div", Object.assign({}, a11yProperties),
            React.createElement(OptionComponent, { option: option, highlightedOption: highlighted, highlightText: highlightText })));
    }
    return (React.createElement(SelectableItem, Object.assign({}, baseProps, { className: styles.option, ariaSelected: current, highlighted: highlighted, disabled: option.disabled, hasBackground: useEntered, isParent: isParent, isChild: isChild, virtualPosition: virtualPosition, "data-test-index": throughIndex, "data-in-group-index": inGroupIndex, "data-group-index": groupIndex, ref: ref, padBottom: padBottom, screenReaderContent: screenReaderContent, ariaSetsize: ariaSetsize, ariaPosinset: ariaPosinset, highlightType: highlightType }), optionContent));
};
export default React.memo(React.forwardRef(AutosuggestOption));
//# sourceMappingURL=autosuggest-option.js.map