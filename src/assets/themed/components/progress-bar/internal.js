// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalBox from '../box/internal';
import { InternalButton } from '../button/internal';
import InternalStatusIndicator from '../status-indicator/internal';
import styles from './styles.css.js';
const MAX_VALUE = 100;
const clamp = (value, lowerLimit, upperLimit) => {
    return Math.max(Math.min(value, upperLimit), lowerLimit);
};
export const Progress = ({ value, isInFlash, labelId }) => {
    const roundedValue = Math.round(value);
    const progressValue = clamp(roundedValue, 0, MAX_VALUE);
    return (React.createElement("div", { className: styles['progress-container'] },
        React.createElement("progress", { className: clsx(styles.progress, progressValue >= MAX_VALUE && styles.complete, isInFlash && styles['progress-in-flash']), "aria-valuenow": progressValue, "aria-valuemin": 0, max: MAX_VALUE, value: progressValue, "aria-labelledby": labelId }),
        React.createElement("span", { "aria-hidden": "true", className: styles['percentage-container'] },
            React.createElement(InternalBox, { className: styles.percentage, variant: "small", color: isInFlash ? 'inherit' : undefined }, `${progressValue}%`))));
};
export const SmallText = ({ color, children }) => {
    return (React.createElement(InternalBox, { className: styles['word-wrap'], variant: "small", display: "block", color: color }, children));
};
const ResultButton = ({ onClick, children }) => {
    return (React.createElement("div", { className: styles['result-button'] },
        React.createElement(InternalButton, { formAction: "none", onClick: onClick }, children)));
};
export const ResultState = ({ isInFlash, resultText, resultButtonText, status, onClick }) => {
    const hasResultButton = !!resultButtonText;
    if (isInFlash) {
        return (React.createElement("div", { className: styles[`result-container-${status}`], "aria-live": "polite", "aria-atomic": "true" },
            React.createElement("span", { className: styles['result-text'] }, resultText)));
    }
    return (React.createElement("div", { className: styles[`result-container-${status}`], "aria-live": "polite", "aria-atomic": "true" },
        React.createElement("span", { className: clsx(hasResultButton && styles['with-result-button']) },
            React.createElement(InternalStatusIndicator, { type: status === 'success' ? 'success' : 'error' },
                React.createElement("span", { className: styles['result-text'] }, resultText))),
        hasResultButton && React.createElement(ResultButton, { onClick: onClick }, resultButtonText)));
};
//# sourceMappingURL=internal.js.map