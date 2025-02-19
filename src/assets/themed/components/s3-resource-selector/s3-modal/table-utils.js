const defaultLabels = {
    labelNotSorted: () => '',
    labelSortedDescending: () => '',
    labelSortedAscending: () => '',
};
export function includes(array, item) {
    return !!array && array.indexOf(item) > -1;
}
export const compareDates = (itemA, itemB) => {
    const timeA = itemA ? new Date(itemA).getTime() : 0;
    const timeB = itemB ? new Date(itemB).getTime() : 0;
    return timeA - timeB;
};
export function getColumnAriaLabel(i18nStrings = defaultLabels, columnName = '') {
    return ({ sorted, descending }) => {
        if (!sorted) {
            return i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelNotSorted(columnName);
        }
        if (descending) {
            return i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelSortedDescending(columnName);
        }
        return i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelSortedAscending(columnName);
    };
}
//# sourceMappingURL=table-utils.js.map