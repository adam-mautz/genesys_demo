// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useState } from 'react';
import InternalBox from '../../box/internal';
import InternalFormField from '../../form-field/internal';
import InternalInput from '../../input/internal';
import InternalRadioGroup from '../../radio-group/internal';
import InternalSelect from '../../select/internal';
import InternalSpaceBetween from '../../space-between/internal';
import styles from './styles.css.js';
const dayUnits = ['day', 'week', 'month', 'year'];
const units = ['second', 'minute', 'hour', ...dayUnits];
const CUSTOM_OPTION_SELECT_KEY = 'awsui-internal-custom-duration-key';
export default function RelativeRangePicker({ dateOnly, options: clientOptions = [], initialSelection: initialRange, onChange: onChangeRangeSize, i18nStrings, isSingleGrid, }) {
    var _a;
    const radioOptions = clientOptions.map(option => ({
        value: option.key,
        label: i18nStrings.formatRelativeRange(option),
    }));
    radioOptions.push({
        value: CUSTOM_OPTION_SELECT_KEY,
        label: i18nStrings.customRelativeRangeOptionLabel,
        description: i18nStrings.customRelativeRangeOptionDescription,
    });
    const [selectedRadio, setSelectedRadio] = useState(() => {
        var _a;
        if (initialRange && !initialRange.key) {
            return CUSTOM_OPTION_SELECT_KEY;
        }
        return (_a = initialRange === null || initialRange === void 0 ? void 0 : initialRange.key) !== null && _a !== void 0 ? _a : null;
    });
    const [customDuration, setCustomDuration] = useState(() => {
        if (initialRange) {
            return initialRange.amount;
        }
        // NaN represents an empty duration
        return NaN;
    });
    const initialCustomTimeUnit = dateOnly ? 'day' : 'minute';
    const [customUnitOfTime, setCustomUnitOfTime] = useState((_a = initialRange === null || initialRange === void 0 ? void 0 : initialRange.unit) !== null && _a !== void 0 ? _a : initialCustomTimeUnit);
    const showRadioControl = clientOptions.length > 0;
    const showCustomControls = clientOptions.length === 0 || selectedRadio === CUSTOM_OPTION_SELECT_KEY;
    return (React.createElement("div", null,
        React.createElement(InternalSpaceBetween, { size: "xs", direction: "vertical" },
            showRadioControl && (React.createElement(InternalFormField, { label: i18nStrings.relativeRangeSelectionHeading },
                React.createElement(InternalRadioGroup, { className: styles['relative-range-radio-group'], onChange: ({ detail }) => {
                        setSelectedRadio(detail.value);
                        if (detail.value === CUSTOM_OPTION_SELECT_KEY) {
                            setCustomDuration(NaN);
                            setCustomUnitOfTime(initialCustomTimeUnit);
                            onChangeRangeSize({
                                amount: NaN,
                                unit: initialCustomTimeUnit,
                                type: 'relative',
                            });
                        }
                        else {
                            const option = clientOptions.filter(o => o.key === detail.value)[0];
                            onChangeRangeSize(option);
                        }
                    }, value: selectedRadio, items: radioOptions }))),
            showCustomControls && (React.createElement(InternalSpaceBetween, { direction: "vertical", size: "xs" },
                !showRadioControl && (React.createElement(InternalBox, { fontSize: "body-m", color: "text-body-secondary" }, i18nStrings.customRelativeRangeOptionDescription)),
                React.createElement("div", { className: clsx(styles['custom-range'], {
                        [styles['custom-range--no-padding']]: !showRadioControl,
                    }) },
                    React.createElement("div", { className: clsx(styles['custom-range-form-controls'], {
                            [styles.vertical]: isSingleGrid,
                        }) },
                        React.createElement("div", { className: styles['custom-range-duration'] },
                            React.createElement(InternalFormField, { label: i18nStrings.customRelativeRangeDurationLabel },
                                React.createElement(InternalInput, { type: "number", className: styles['custom-range-duration-input'], value: isNaN(customDuration) || customDuration === 0 ? '' : customDuration === null || customDuration === void 0 ? void 0 : customDuration.toString(), onChange: e => {
                                        const amount = Number(e.detail.value);
                                        setCustomDuration(amount);
                                        onChangeRangeSize({ amount, unit: customUnitOfTime, type: 'relative' });
                                    }, placeholder: i18nStrings.customRelativeRangeDurationPlaceholder, __inheritFormFieldProps: true }))),
                        React.createElement("div", { className: styles['custom-range-unit'] },
                            React.createElement(InternalFormField, { label: i18nStrings.customRelativeRangeUnitLabel },
                                React.createElement(InternalSelect, { className: styles['custom-range-unit-select'], selectedOption: {
                                        value: customUnitOfTime,
                                        label: i18nStrings.formatUnit(customUnitOfTime, customDuration),
                                    }, onChange: e => {
                                        const { value: unit } = e.detail.selectedOption;
                                        setCustomUnitOfTime(unit);
                                        onChangeRangeSize({ amount: customDuration, unit, type: 'relative' });
                                    }, options: (dateOnly ? dayUnits : units).map(unit => ({
                                        value: unit,
                                        label: i18nStrings.formatUnit(unit, customDuration),
                                    })), renderHighlightedAriaLive: option => option.label || option.value || '' }))))))))));
}
//# sourceMappingURL=index.js.map