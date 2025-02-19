// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Finds the longest property the filtering text starts from.
export function matchFilteringProperty(filteringProperties, filteringText) {
    let maxLength = 0;
    let matchedProperty = null;
    for (const property of filteringProperties) {
        if ((property.propertyLabel.length >= maxLength && startsWith(filteringText, property.propertyLabel)) ||
            (property.propertyLabel.length > maxLength &&
                startsWith(filteringText.toLowerCase(), property.propertyLabel.toLowerCase()))) {
            maxLength = property.propertyLabel.length;
            matchedProperty = property;
        }
    }
    return matchedProperty;
}
// Finds the longest operator the filtering text starts from.
export function matchOperator(allowedOperators, filteringText) {
    filteringText = filteringText.toLowerCase();
    let maxLength = 0;
    let matchedOperator = null;
    for (const operator of allowedOperators) {
        if (operator.length > maxLength && startsWith(filteringText, operator.toLowerCase())) {
            maxLength = operator.length;
            matchedOperator = operator;
        }
    }
    return matchedOperator;
}
// Finds if the filtering text matches any operator prefix.
export function matchOperatorPrefix(allowedOperators, filteringText) {
    if (filteringText.trim().length === 0) {
        return '';
    }
    for (const operator of allowedOperators) {
        if (startsWith(operator.toLowerCase(), filteringText.toLowerCase())) {
            return filteringText;
        }
    }
    return null;
}
export function matchTokenValue(token, filteringOptions) {
    var _a, _b;
    const propertyOptions = filteringOptions.filter(option => option.propertyKey === token.propertyKey);
    const bestMatch = Object.assign({}, token);
    for (const option of propertyOptions) {
        if ((option.label && option.label === token.value) || (!option.label && option.value === token.value)) {
            // exact match found: return it
            return Object.assign(Object.assign({}, token), { value: option.value });
        }
        if (token.value.toLowerCase() === ((_b = (_a = option.label) !== null && _a !== void 0 ? _a : option.value) !== null && _b !== void 0 ? _b : '').toLowerCase()) {
            // non-exact match: save and keep running in case exact match found later
            bestMatch.value = option.value;
        }
    }
    return bestMatch;
}
export function trimStart(source) {
    let spacesLength = 0;
    for (let i = 0; i < source.length; i++) {
        if (source[i] === ' ') {
            spacesLength++;
        }
        else {
            break;
        }
    }
    return source.slice(spacesLength);
}
export function trimFirstSpace(source) {
    return source[0] === ' ' ? source.slice(1) : source;
}
function startsWith(source, target) {
    return source.indexOf(target) === 0;
}
//# sourceMappingURL=utils.js.map