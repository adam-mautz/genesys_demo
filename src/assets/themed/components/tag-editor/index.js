import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useImperativeHandle, useLayoutEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import { useStableEventHandler } from '../internal/hooks/use-stable-event-handler';
import InternalAttributeEditor from '../attribute-editor/internal';
import InternalStatusIndicator from '../status-indicator/internal';
import InternalBox from '../box/internal';
import { FormFieldError } from '../form-field/internal';
import { TagControl, UndoButton } from './internal';
import { validate } from './validation';
import { findIndex, useMemoizedArray } from './utils';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import LiveRegion from '../internal/components/live-region';
const isItemRemovable = ({ tag }) => !tag.markedForRemoval;
const TagEditor = React.forwardRef((_a, ref) => {
    var _b, _c;
    var { tags = [], i18nStrings, loading = false, tagLimit = 50, allowedCharacterPattern, keysRequest, valuesRequest, onChange } = _a, restProps = __rest(_a, ["tags", "i18nStrings", "loading", "tagLimit", "allowedCharacterPattern", "keysRequest", "valuesRequest", "onChange"]);
    const baseComponentProps = useBaseComponent('TagEditor');
    const remainingTags = tagLimit - tags.filter(tag => !tag.markedForRemoval).length;
    const attributeEditorRef = useRef(null);
    const keyInputRefs = useRef([]);
    const valueInputRefs = useRef([]);
    const undoButtonRefs = useRef([]);
    const initialKeyOptionsRef = useRef([]);
    const keyDirtyStateRef = useRef([]);
    const focusEventRef = useRef();
    useLayoutEffect(() => {
        var _a;
        (_a = focusEventRef.current) === null || _a === void 0 ? void 0 : _a.apply(undefined);
        focusEventRef.current = undefined;
    });
    const errors = validate(tags, keyDirtyStateRef.current, i18nStrings, allowedCharacterPattern ? new RegExp(allowedCharacterPattern) : undefined);
    const internalTags = useMemoizedArray(tags.map((tag, i) => ({ tag, error: errors[i] })), (prev, next) => {
        var _a, _b, _c, _d;
        return prev.tag === next.tag && ((_a = prev.error) === null || _a === void 0 ? void 0 : _a.key) === ((_b = next.error) === null || _b === void 0 ? void 0 : _b.key) && ((_c = prev.error) === null || _c === void 0 ? void 0 : _c.value) === ((_d = next.error) === null || _d === void 0 ? void 0 : _d.value);
    });
    useImperativeHandle(ref, () => ({
        focus() {
            var _a, _b;
            const errorIndex = findIndex(internalTags, ({ error }) => (error === null || error === void 0 ? void 0 : error.key) || (error === null || error === void 0 ? void 0 : error.value));
            if (errorIndex !== -1) {
                const refArray = ((_a = internalTags[errorIndex].error) === null || _a === void 0 ? void 0 : _a.key) ? keyInputRefs : valueInputRefs;
                (_b = refArray.current[errorIndex]) === null || _b === void 0 ? void 0 : _b.focus();
            }
        },
    }), [internalTags]);
    const validateAndFire = useCallback((newTags) => {
        fireNonCancelableEvent(onChange, {
            tags: newTags,
            valid: !validate(newTags, keyDirtyStateRef.current, i18nStrings, allowedCharacterPattern ? new RegExp(allowedCharacterPattern) : undefined).some(error => error),
        });
    }, [onChange, i18nStrings, allowedCharacterPattern]);
    const onAddButtonClick = () => {
        validateAndFire([...tags, { key: '', value: '', existing: false }]);
        focusEventRef.current = () => {
            var _a;
            (_a = keyInputRefs.current[tags.length]) === null || _a === void 0 ? void 0 : _a.focus();
        };
    };
    const onRemoveButtonClick = useStableEventHandler(({ detail }) => {
        var _a, _b, _c, _d, _e;
        const existing = tags[detail.itemIndex].existing;
        validateAndFire([
            ...tags.slice(0, detail.itemIndex),
            ...(existing ? [Object.assign(Object.assign({}, tags[detail.itemIndex]), { markedForRemoval: true })] : []),
            ...tags.slice(detail.itemIndex + 1),
        ]);
        if (existing) {
            focusEventRef.current = () => {
                var _a;
                (_a = undoButtonRefs.current[detail.itemIndex]) === null || _a === void 0 ? void 0 : _a.focus();
            };
        }
        else {
            keyDirtyStateRef.current.splice(detail.itemIndex, 1);
            const nextKey = keyInputRefs.current[detail.itemIndex + 1];
            if (nextKey) {
                // if next key is present, focus _current_ key which will be replaced by next after state update
                (_a = keyInputRefs.current[detail.itemIndex]) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else if (detail.itemIndex > 0) {
                // otherwise focus previous key/value/undo button
                const previousIsExisting = tags[detail.itemIndex - 1].existing;
                if (previousIsExisting) {
                    if (tags[detail.itemIndex - 1].markedForRemoval) {
                        (_b = undoButtonRefs.current[detail.itemIndex - 1]) === null || _b === void 0 ? void 0 : _b.focus();
                    }
                    else {
                        (_c = valueInputRefs.current[detail.itemIndex - 1]) === null || _c === void 0 ? void 0 : _c.focus();
                    }
                }
                else {
                    (_d = keyInputRefs.current[detail.itemIndex - 1]) === null || _d === void 0 ? void 0 : _d.focus();
                }
            }
            else {
                // or the 'add' button
                (_e = attributeEditorRef.current) === null || _e === void 0 ? void 0 : _e.focusAddButton();
            }
        }
    });
    const onKeyChange = useStableEventHandler((value, row) => {
        keyDirtyStateRef.current[row] = true;
        validateAndFire([...tags.slice(0, row), Object.assign(Object.assign({}, tags[row]), { key: value }), ...tags.slice(row + 1)]);
    });
    const onKeyBlur = useStableEventHandler((row) => {
        keyDirtyStateRef.current[row] = true;
        // Force re-render by providing a new array reference
        validateAndFire([...tags]);
    });
    const onValueChange = useStableEventHandler((value, row) => {
        validateAndFire([...tags.slice(0, row), Object.assign(Object.assign({}, tags[row]), { value }), ...tags.slice(row + 1)]);
    });
    const onUndoRemoval = useStableEventHandler((row) => {
        validateAndFire([...tags.slice(0, row), Object.assign(Object.assign({}, tags[row]), { markedForRemoval: false }), ...tags.slice(row + 1)]);
        focusEventRef.current = () => {
            var _a;
            (_a = attributeEditorRef.current) === null || _a === void 0 ? void 0 : _a.focusRemoveButton(row);
        };
    });
    const definition = useMemo(() => [
        {
            label: i18nStrings.keyHeader,
            control: ({ tag }, row) => (React.createElement(TagControl, { row: row, value: tag.key, readOnly: tag.existing, limit: 200, defaultOptions: [], placeholder: i18nStrings.keyPlaceholder, errorText: i18nStrings.keysSuggestionError, loadingText: i18nStrings.keysSuggestionLoading, suggestionText: i18nStrings.keySuggestion, tooManySuggestionText: i18nStrings.tooManyKeysSuggestion, enteredTextLabel: i18nStrings.enteredKeyLabel, clearAriaLabel: i18nStrings.clearAriaLabel, onRequest: keysRequest, onChange: onKeyChange, onBlur: onKeyBlur, initialOptionsRef: initialKeyOptionsRef, ref: ref => {
                    keyInputRefs.current[row] = ref;
                } })),
            errorText: ({ error }) => error === null || error === void 0 ? void 0 : error.key,
        },
        {
            label: (React.createElement(React.Fragment, null,
                i18nStrings.valueHeader,
                " - ",
                React.createElement("i", null, i18nStrings.optional))),
            control: ({ tag }, row) => {
                var _a;
                return tag.markedForRemoval ? (React.createElement("div", { role: "alert" },
                    React.createElement(InternalBox, { margin: { top: 'xxs' } },
                        i18nStrings.undoPrompt,
                        ' ',
                        React.createElement(UndoButton, { onClick: () => onUndoRemoval(row), ref: elem => {
                                undoButtonRefs.current[row] = elem;
                            } }, i18nStrings.undoButton)))) : (React.createElement(TagControl, { row: row, value: tag.value, readOnly: false, limit: 200, defaultOptions: (_a = tag.valueSuggestionOptions) !== null && _a !== void 0 ? _a : [], placeholder: i18nStrings.valuePlaceholder, errorText: i18nStrings.valuesSuggestionError, loadingText: i18nStrings.valuesSuggestionLoading, suggestionText: i18nStrings.valueSuggestion, tooManySuggestionText: i18nStrings.tooManyValuesSuggestion, enteredTextLabel: i18nStrings.enteredValueLabel, clearAriaLabel: i18nStrings.clearAriaLabel, filteringKey: tag.key, onRequest: valuesRequest && (value => valuesRequest(tag.key, value)), onChange: onValueChange, ref: ref => {
                        valueInputRefs.current[row] = ref;
                    } }));
            },
            errorText: ({ error }) => error === null || error === void 0 ? void 0 : error.value,
        },
    ], [i18nStrings, keysRequest, onKeyChange, onKeyBlur, valuesRequest, onValueChange, onUndoRemoval]);
    const forwardedI18nStrings = useMemo(() => ({
        errorIconAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorIconAriaLabel,
        itemRemovedAriaLive: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.itemRemovedAriaLive,
        removeButtonAriaLabel: i18nStrings.removeButtonAriaLabel && (({ tag }) => i18nStrings.removeButtonAriaLabel(tag)),
    }), [i18nStrings]);
    if (loading) {
        return (React.createElement("div", { className: styles.root, ref: baseComponentProps.__internalRootRef },
            React.createElement(InternalStatusIndicator, { className: styles.loading, type: "loading" },
                React.createElement(LiveRegion, { visible: true }, i18nStrings.loading))));
    }
    const baseProps = getBaseProps(restProps);
    return (React.createElement(InternalAttributeEditor, Object.assign({}, baseProps, baseComponentProps, { ref: attributeEditorRef, className: clsx(styles.root, baseProps.className), items: internalTags, isItemRemovable: isItemRemovable, onAddButtonClick: onAddButtonClick, onRemoveButtonClick: onRemoveButtonClick, addButtonText: i18nStrings.addButton, removeButtonText: i18nStrings.removeButton, disableAddButton: remainingTags <= 0, empty: i18nStrings.emptyTags, additionalInfo: remainingTags < 0 ? (React.createElement(FormFieldError, { errorIconAriaLabel: i18nStrings.errorIconAriaLabel }, (_b = i18nStrings.tagLimitExceeded(tagLimit)) !== null && _b !== void 0 ? _b : '')) : remainingTags === 0 ? ((_c = i18nStrings.tagLimitReached(tagLimit)) !== null && _c !== void 0 ? _c : '') : (i18nStrings.tagLimit(remainingTags, tagLimit)), definition: definition, i18nStrings: forwardedI18nStrings })));
});
applyDisplayName(TagEditor, 'TagEditor');
export default TagEditor;
//# sourceMappingURL=index.js.map