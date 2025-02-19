// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isDevelopment } from './is-development';
const messageCache = {};
export function warnOnce(component, message) {
    if (isDevelopment) {
        const warning = `[AwsUi] [${component}] ${message}`;
        if (!messageCache[warning]) {
            messageCache[warning] = true;
            console.warn(warning);
        }
    }
}
//# sourceMappingURL=logging.js.map