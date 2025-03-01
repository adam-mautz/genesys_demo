// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from '../styles.css.js';
import InternalFormField from '../../form-field/internal';
import InternalDateInput from '../../date-input/internal';
import InternalTimeInput from '../../time-input/internal';
export default function RangeInputs({ startDate, onChangeStartDate, startTime, onChangeStartTime, endDate, onChangeEndDate, endTime, onChangeEndTime, i18nStrings, dateOnly, timeInputFormat, }) {
    return (React.createElement(InternalFormField, { constraintText: i18nStrings.dateTimeConstraintText },
        React.createElement("div", { className: styles['date-and-time-container'] },
            React.createElement("div", { className: styles['date-and-time-wrapper'] },
                React.createElement(InternalFormField, { label: i18nStrings.startDateLabel, stretch: true },
                    React.createElement(InternalDateInput, { value: startDate, className: styles['start-date-input'], onChange: event => onChangeStartDate(event.detail.value), placeholder: "YYYY/MM/DD" })),
                !dateOnly && (React.createElement(InternalFormField, { label: i18nStrings.startTimeLabel, stretch: true },
                    React.createElement(InternalTimeInput, { value: startTime, onChange: event => onChangeStartTime(event.detail.value), format: timeInputFormat, placeholder: timeInputFormat, className: styles['start-time-input'] })))),
            React.createElement("div", { className: styles['date-and-time-wrapper'] },
                React.createElement(InternalFormField, { label: i18nStrings.endDateLabel, stretch: true },
                    React.createElement(InternalDateInput, { value: endDate, className: styles['end-date-input'], onChange: event => onChangeEndDate(event.detail.value), placeholder: "YYYY/MM/DD" })),
                !dateOnly && (React.createElement(InternalFormField, { label: i18nStrings.endTimeLabel, stretch: true },
                    React.createElement(InternalTimeInput, { value: endTime, onChange: event => onChangeEndTime(event.detail.value), format: timeInputFormat, placeholder: timeInputFormat, className: styles['end-time-input'] })))))));
}
//# sourceMappingURL=range-inputs.js.map