import { warnOnce } from '../internal/logging';
import { formatTimezoneOffset, parseTimezoneOffset, shiftTimezoneOffset } from '../internal/utils/date-time';
import { addMinutes } from 'date-fns';
/**
 * Appends a time zone offset to an offset-less date string.
 */
export function setTimeOffset(value, timeOffset) {
    if (!((value === null || value === void 0 ? void 0 : value.type) === 'absolute')) {
        return value;
    }
    return {
        type: 'absolute',
        startDate: value.startDate + formatTimezoneOffset(value.startDate, timeOffset.startDate),
        endDate: value.endDate + formatTimezoneOffset(value.endDate, timeOffset.endDate),
    };
}
/**
 * Re-formats an absolute date range so that it is expressed using the
 * target time offset. The returned value still represents the same range
 * in time, but contains no visible offset.
 */
export function shiftTimeOffset(value, timeOffset) {
    if (!value || value.type !== 'absolute') {
        return value;
    }
    /*
      This regex matches an ISO date-time with
      - optional seconds;
      - optional milliseconds;
      - optional time offset or 'Z'.
    */
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(\.\d{1,3})?(((\+|-)\d{2}(:\d{2})?)|Z)?$/;
    if (!dateTimeRegex.test(value.startDate) || !dateTimeRegex.test(value.endDate)) {
        warnOnce('DateRangePicker', 'You have provided a misformatted start or end date. The component will fall back to an empty value. ' +
            'Dates have to be ISO8601-formatted with an optional time zone offset.');
        return null;
    }
    return {
        type: 'absolute',
        startDate: shiftTimezoneOffset(value.startDate, timeOffset.startDate),
        endDate: shiftTimezoneOffset(value.endDate, timeOffset.endDate),
    };
}
export function normalizeTimeOffset(value, getTimeOffset, timeOffset) {
    if (value && value.type === 'absolute') {
        if (getTimeOffset) {
            return {
                startDate: getTimeOffset(parseDateUTC(value.startDate)),
                endDate: getTimeOffset(parseDateUTC(value.endDate)),
            };
        }
        else if (timeOffset !== undefined) {
            return { startDate: timeOffset, endDate: timeOffset };
        }
    }
    return { startDate: undefined, endDate: undefined };
}
/*
  Before the getTimeOffset function is used there is no information on the preferred time offset.
  
  Besides, the ISO date string might or might not contain the offset:
  - 2021-02-03T01:02:03
  - 2021-02-03T01:02:03Z
  - 2021-02-03T01:02:03+01:00
  
  For every value above the date is converted to UTC and the following is true:
  date.getUTCFullYear() === 2021
  date.getUTCMonth() === 1
  date.getUTCDate() === 3
  date.getUTCHours() === 1
  date.getUTCMinutes() === 2
  date.getUTCSeconds() === 3
*/
function parseDateUTC(isoDateString) {
    const date = new Date(isoDateString);
    return addMinutes(date, parseTimezoneOffset(isoDateString));
}
//# sourceMappingURL=time-offset.js.map