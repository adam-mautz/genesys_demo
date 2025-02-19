// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import clsx from 'clsx';
import InternalCheckbox from '../checkbox/internal';
import InternalColumnLayout from '../column-layout/internal';
import InternalFormField from '../form-field/internal';
import InternalRadioGroup from '../radio-group/internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import styles from './styles.css.js';
export const copyPreferences = ({ pageSize, wrapLines, stripedRows, contentDensity, visibleContent, contentDisplay, custom, }) => ({
    pageSize,
    wrapLines,
    stripedRows,
    contentDensity,
    visibleContent,
    contentDisplay,
    custom,
});
export const mergePreferences = (newPref, oldPref) => {
    const newObj = Object.assign({}, oldPref);
    const prefNames = [
        'pageSize',
        'wrapLines',
        'stripedRows',
        'contentDensity',
        'visibleContent',
        'custom',
        'contentDisplay',
    ];
    for (const prefName of prefNames) {
        if (newPref[prefName] !== undefined) {
            newObj[prefName] = newPref[prefName];
        }
    }
    return newObj;
};
export const ModalContentLayout = ({ left, right }) => {
    const [breakpoint, ref] = useContainerBreakpoints(['xs']);
    const smallContainer = breakpoint === 'default';
    if (smallContainer) {
        return (React.createElement("div", { ref: ref },
            left && React.createElement("div", null, left),
            right && React.createElement("div", { className: clsx(left && styles['second-column-small']) }, right)));
    }
    const columns = left && right ? 2 : 1;
    return (React.createElement("div", { ref: ref },
        React.createElement(InternalColumnLayout, { columns: columns, variant: "text-grid" },
            left && React.createElement("div", null, left),
            right && React.createElement("div", null, right))));
};
export const PageSizePreference = ({ title, options, value, onChange }) => (React.createElement("div", { className: styles['page-size'] },
    React.createElement(InternalFormField, { label: title, stretch: true, className: styles['page-size-form-field'] },
        React.createElement(InternalRadioGroup, { className: styles['page-size-radio-group'], value: `${value}`, items: options.map(({ label, value }) => ({ label, value: `${value}` })), onChange: ({ detail }) => onChange(parseInt(detail.value, 10)) }))));
export const WrapLinesPreference = ({ label, description, value, onChange }) => (React.createElement(InternalCheckbox, { checked: !!value, description: description, onChange: ({ detail }) => onChange(detail.checked), className: styles['wrap-lines'] }, label));
export const StripedRowsPreference = ({ label, description, value, onChange }) => (React.createElement(InternalCheckbox, { checked: !!value, description: description, onChange: ({ detail }) => onChange(detail.checked), className: styles['striped-rows'] }, label));
export const ContentDensityPreference = ({ label, description, value, onChange }) => (React.createElement(InternalCheckbox, { checked: value === 'compact', description: description, onChange: ({ detail }) => onChange(detail.checked ? 'compact' : 'comfortable'), className: styles['content-density'] }, label));
export const CustomPreference = ({ value, customPreference, onChange }) => {
    const [customState, setCustomState] = useState(value);
    if (customPreference) {
        return (React.createElement("div", { className: styles.custom }, customPreference(customState, value => {
            // prevent value to be treated as a functional callback
            setCustomState(() => value);
            onChange(value);
        })));
    }
    return null;
};
//# sourceMappingURL=utils.js.map