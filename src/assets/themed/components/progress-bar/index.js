import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { getBaseProps } from '../internal/base-component';
import { warnOnce } from '../internal/logging';
import { fireNonCancelableEvent } from '../internal/events';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { Progress, ResultState, SmallText } from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { throttle } from '../internal/utils/throttle';
import LiveRegion from '../internal/components/live-region';
const ASSERTION_FREQUENCY = 5000; // interval in ms between progress announcements
export default function ProgressBar(_a) {
    var { value = 0, status = 'in-progress', variant = 'standalone', resultButtonText, label, description, additionalInfo, resultText, onResultButtonClick } = _a, rest = __rest(_a, ["value", "status", "variant", "resultButtonText", "label", "description", "additionalInfo", "resultText", "onResultButtonClick"]);
    const { __internalRootRef } = useBaseComponent('ProgressBar');
    const baseProps = getBaseProps(rest);
    const generatedName = useUniqueId('awsui-progress-bar-');
    const labelId = `${generatedName}-label`;
    const isInFlash = variant === 'flash';
    const isInProgressState = status === 'in-progress';
    const [assertion, setAssertion] = useState('');
    const throttledAssertion = useMemo(() => {
        return throttle((value) => {
            setAssertion(`${label !== null && label !== void 0 ? label : ''}: ${value}%`);
        }, ASSERTION_FREQUENCY);
    }, [label]);
    useEffect(() => {
        throttledAssertion(value);
    }, [throttledAssertion, value]);
    if (isInFlash && resultButtonText) {
        warnOnce('ProgressBar', 'The `resultButtonText` is ignored if you set `variant="flash"`, and the result button is not displayed. Use the `buttonText` property and the `onButtonClick` event listener of the flashbar item in which the progress bar component is embedded.');
    }
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, variant && styles[variant]), ref: __internalRootRef }),
        React.createElement("div", { className: isInFlash ? styles['flash-container'] : undefined },
            React.createElement("div", { className: clsx(styles['word-wrap'], styles[`label-${variant}`]), id: labelId }, label),
            description && React.createElement(SmallText, { color: isInFlash ? 'inherit' : undefined }, description),
            React.createElement("div", null, isInProgressState ? (React.createElement(React.Fragment, null,
                React.createElement(Progress, { value: value, labelId: labelId, isInFlash: isInFlash }),
                React.createElement(LiveRegion, { delay: 0 }, assertion))) : (React.createElement(ResultState, { resultText: resultText, isInFlash: isInFlash, resultButtonText: resultButtonText, status: status, onClick: () => {
                    fireNonCancelableEvent(onResultButtonClick);
                } })))),
        additionalInfo && React.createElement(SmallText, { color: isInFlash ? 'inherit' : undefined }, additionalInfo)));
}
applyDisplayName(ProgressBar, 'ProgressBar');
//# sourceMappingURL=index.js.map