// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import { addMonths, endOfDay, isAfter, isBefore, isSameMonth, startOfDay, startOfMonth } from 'date-fns';
import styles from '../styles.css.js';
import SpaceBetween from '../../space-between/internal';
import CalendarHeader from './header';
import { Grids } from './grids';
import clsx from 'clsx';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import { getDateLabel, renderTimeLabel } from '../../calendar/utils/intl';
import LiveRegion from '../../internal/components/live-region';
import { normalizeLocale, normalizeStartOfWeek } from '../../internal/utils/locale';
import { parseDate, splitDateTime, formatDateTime } from '../../internal/utils/date-time';
import { getBaseDate } from '../../calendar/utils/navigation';
import { useMobile } from '../../internal/hooks/use-mobile/index.js';
import RangeInputs from './range-inputs.js';
import { findDateToFocus, findMonthToDisplay } from './utils';
export default function DateRangePickerCalendar({ value, setValue, locale = '', startOfWeek, isDateEnabled = () => true, i18nStrings, dateOnly = false, timeInputFormat = 'hh:mm:ss', customAbsoluteRangeControl, }) {
    const isSingleGrid = useMobile();
    const normalizedLocale = normalizeLocale('DateRangePicker', locale);
    const normalizedStartOfWeek = normalizeStartOfWeek(startOfWeek, normalizedLocale);
    const [announcement, setAnnouncement] = useState('');
    const [currentMonth, setCurrentMonth] = useState(() => findMonthToDisplay(value, isSingleGrid));
    const [focusedDate, setFocusedDate] = useState(() => {
        if (value.start.date) {
            const startDate = parseDate(value.start.date);
            if (isSameMonth(startDate, currentMonth)) {
                return startDate;
            }
            if (!isSingleGrid && isSameMonth(startDate, addMonths(currentMonth, -1))) {
                return startDate;
            }
        }
        return findDateToFocus(parseDate(value.start.date), currentMonth, isDateEnabled);
    });
    const updateCurrentMonth = (startDate) => {
        if (startDate.length >= 8) {
            const newCurrentMonth = startOfMonth(parseDate(startDate));
            setCurrentMonth(isSingleGrid ? newCurrentMonth : addMonths(newCurrentMonth, 1));
        }
    };
    // recommended to include the start/end time announced with the selection
    // because the user is not aware of the fact that a start/end time is also set as soon as they select a date
    const announceStart = (startDate) => {
        return (i18nStrings.startDateLabel +
            ', ' +
            getDateLabel(normalizedLocale, startDate) +
            ', ' +
            i18nStrings.startTimeLabel +
            ', ' +
            renderTimeLabel(normalizedLocale, startDate, timeInputFormat) +
            '. ');
    };
    const announceEnd = (endDate) => {
        return (i18nStrings.endDateLabel +
            ', ' +
            getDateLabel(normalizedLocale, endDate) +
            ', ' +
            i18nStrings.endTimeLabel +
            ', ' +
            renderTimeLabel(normalizedLocale, endDate, timeInputFormat) +
            '. ');
    };
    const announceRange = (startDate, endDate) => {
        if (!i18nStrings.renderSelectedAbsoluteRangeAriaLive) {
            return `${getDateLabel(normalizedLocale, startDate)} – ${getDateLabel(normalizedLocale, endDate)}`;
        }
        return i18nStrings.renderSelectedAbsoluteRangeAriaLive(getDateLabel(normalizedLocale, startDate), getDateLabel(normalizedLocale, endDate));
    };
    const onSelectDateHandler = (selectedDate) => {
        const { start, end } = value;
        let newStart = undefined;
        let newEnd = undefined;
        let announcement = '';
        // If both fields are empty, we set the start date
        if (!start.date && !end.date) {
            newStart = startOfDay(selectedDate);
            announcement = announceStart(newStart);
        }
        // If both fields are set, we start new
        else if (start.date && end.date) {
            newStart = startOfDay(selectedDate);
            newEnd = null;
            announcement = announceStart(newStart);
        }
        // If only the END date is empty, we fill it (and swap dates if needed)
        else if (start.date && !end.date) {
            const parsedStartDate = parseDate(start.date);
            if (isBefore(selectedDate, parsedStartDate)) {
                // The user has selected the range backwards, so we swap start and end
                newStart = startOfDay(selectedDate);
                newEnd = endOfDay(parsedStartDate);
                announcement = announceStart(newStart) + announceRange(newStart, newEnd);
            }
            else {
                newEnd = endOfDay(selectedDate);
                announcement = announceEnd(newEnd) + announceRange(parsedStartDate, newEnd);
            }
        }
        // If only the START date is empty, we fill it (and swap dates if needed)
        else if (!start.date && end.date) {
            const existingEndDate = parseDate(end.date);
            if (isAfter(selectedDate, existingEndDate)) {
                // The user has selected the range backwards, so we swap start and end
                newStart = startOfDay(existingEndDate);
                newEnd = endOfDay(selectedDate);
                announcement = announceEnd(newEnd) + announceRange(newStart, newEnd);
            }
            else {
                newStart = startOfDay(selectedDate);
                announcement = announceStart(newStart) + announceRange(newStart, existingEndDate);
            }
        }
        const formatValue = (date, previous) => {
            if (date === null) {
                // explicitly reset to empty
                return { date: '', time: '' };
            }
            else if (date === undefined) {
                // keep old value
                return previous;
            }
            return splitDateTime(formatDateTime(date));
        };
        setValue({
            start: formatValue(newStart, value.start),
            end: formatValue(newEnd, value.end),
        });
        setAnnouncement(announcement);
    };
    const onHeaderChangeMonthHandler = (newCurrentMonth) => {
        setCurrentMonth(newCurrentMonth);
        const newBaseDateMonth = isSingleGrid ? newCurrentMonth : addMonths(newCurrentMonth, -1);
        const newBaseDate = getBaseDate(newBaseDateMonth, isDateEnabled);
        setFocusedDate(newBaseDate);
    };
    const onChangeStartDate = (value) => {
        setValue((oldValue) => (Object.assign(Object.assign({}, oldValue), { start: Object.assign(Object.assign({}, oldValue.start), { date: value }) })));
        updateCurrentMonth(value);
    };
    const interceptedSetValue = newValue => {
        setValue(oldValue => {
            const updated = typeof newValue === 'function' ? newValue(oldValue) : newValue;
            updateCurrentMonth(updated.start.date);
            return updated;
        });
    };
    const headingIdPrefix = useUniqueId('date-range-picker-calendar-heading');
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: clsx(styles['calendar-container'], {
                [styles['one-grid']]: isSingleGrid,
            }) },
            React.createElement(SpaceBetween, { size: "s" },
                React.createElement("div", { className: clsx(styles.calendar, {
                        [styles['one-grid']]: isSingleGrid,
                    }) },
                    React.createElement(CalendarHeader, { baseDate: currentMonth, locale: normalizedLocale, onChangeMonth: onHeaderChangeMonthHandler, previousMonthLabel: i18nStrings.previousMonthAriaLabel, nextMonthLabel: i18nStrings.nextMonthAriaLabel, isSingleGrid: isSingleGrid, headingIdPrefix: headingIdPrefix }),
                    React.createElement(Grids, { isSingleGrid: isSingleGrid, locale: normalizedLocale, baseDate: currentMonth, focusedDate: focusedDate, onFocusedDateChange: setFocusedDate, isDateEnabled: isDateEnabled, onSelectDate: onSelectDateHandler, onChangeMonth: setCurrentMonth, startOfWeek: normalizedStartOfWeek, todayAriaLabel: i18nStrings.todayAriaLabel, selectedStartDate: parseDate(value.start.date, true), selectedEndDate: parseDate(value.end.date, true), headingIdPrefix: headingIdPrefix })),
                React.createElement(RangeInputs, { startDate: value.start.date, onChangeStartDate: onChangeStartDate, startTime: value.start.time, onChangeStartTime: value => setValue(oldValue => (Object.assign(Object.assign({}, oldValue), { start: Object.assign(Object.assign({}, oldValue.start), { time: value }) }))), endDate: value.end.date, onChangeEndDate: value => setValue(oldValue => (Object.assign(Object.assign({}, oldValue), { end: Object.assign(Object.assign({}, oldValue.end), { date: value }) }))), endTime: value.end.time, onChangeEndTime: value => setValue(oldValue => (Object.assign(Object.assign({}, oldValue), { end: Object.assign(Object.assign({}, oldValue.end), { time: value }) }))), i18nStrings: i18nStrings, dateOnly: dateOnly, timeInputFormat: timeInputFormat }),
                customAbsoluteRangeControl && React.createElement("div", null, customAbsoluteRangeControl(value, interceptedSetValue)))),
        React.createElement(LiveRegion, { className: styles['calendar-aria-live'] }, announcement)));
}
//# sourceMappingURL=index.js.map