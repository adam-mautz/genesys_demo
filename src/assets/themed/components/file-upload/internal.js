// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React, { useRef, useState } from 'react';
import { FileOption } from './file-option';
import InternalSpaceBetween from '../space-between/internal';
import styles from './styles.css.js';
import { fireNonCancelableEvent } from '../internal/events';
import { getBaseProps } from '../internal/base-component';
import checkControlled from '../internal/hooks/check-controlled';
import clsx from 'clsx';
import { warnOnce } from '../internal/logging';
import { Dropzone, useDropzoneVisible } from './dropzone';
import FileInput from './file-input';
import TokenList from '../internal/components/token-list';
import { Token } from '../token-group/token';
import { ConstraintText, FormFieldError } from '../form-field/internal';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { joinStrings } from '../internal/utils/strings';
import { useFormFieldContext } from '../contexts/form-field';
import InternalBox from '../box/internal';
export default React.forwardRef(InternalFileUpload);
function InternalFileUpload(_a, externalRef) {
    var _b;
    var { accept, ariaRequired, multiple = false, onChange, value, tokenLimit, showFileSize, showFileLastModified, showFileThumbnail, i18nStrings, __internalRootRef = null, constraintText, errorText, fileErrors } = _a, restProps = __rest(_a, ["accept", "ariaRequired", "multiple", "onChange", "value", "tokenLimit", "showFileSize", "showFileLastModified", "showFileThumbnail", "i18nStrings", "__internalRootRef", "constraintText", "errorText", "fileErrors"]);
    const baseProps = getBaseProps(restProps);
    const metadata = { showFileSize, showFileLastModified, showFileThumbnail };
    const errorId = useUniqueId('error-');
    const constraintTextId = useUniqueId('constraint-text-');
    const fileInputRef = useRef(null);
    const ref = useMergeRefs(fileInputRef, externalRef);
    const [removedFileIndex, setRemovedFileIndex] = useState(null);
    checkControlled('FileUpload', 'value', value, 'onChange', onChange);
    if (!multiple && value.length > 1) {
        warnOnce('FileUpload', 'Value must be an array of size 0 or 1 when `multiple=false`.');
    }
    const handleFilesChange = (newFiles) => {
        const newValue = multiple ? [...value, ...newFiles] : newFiles[0] ? newFiles : [...value];
        fireNonCancelableEvent(onChange, { value: newValue });
    };
    const onFileRemove = (removeFileIndex) => {
        var _a;
        const newValue = value.filter((_, fileIndex) => fileIndex !== removeFileIndex);
        fireNonCancelableEvent(onChange, { value: newValue });
        setRemovedFileIndex(removeFileIndex);
        if (value.length === 1) {
            (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const isDropzoneVisible = useDropzoneVisible();
    const formFieldContext = useFormFieldContext(restProps);
    const ariaDescribedBy = joinStrings((_b = restProps.ariaDescribedby) !== null && _b !== void 0 ? _b : formFieldContext.ariaDescribedby, errorText ? errorId : undefined, constraintText ? constraintTextId : undefined);
    const hasError = Boolean(errorText || (fileErrors === null || fileErrors === void 0 ? void 0 : fileErrors.filter(Boolean).length));
    const invalid = restProps.invalid || formFieldContext.invalid || hasError;
    return (React.createElement(InternalSpaceBetween, Object.assign({}, baseProps, { size: "xs", className: clsx(baseProps.className, styles.root), __internalRootRef: __internalRootRef }),
        React.createElement(InternalBox, null,
            isDropzoneVisible ? (React.createElement(Dropzone, { onChange: handleFilesChange }, i18nStrings.dropzoneText(multiple))) : (React.createElement(FileInput, Object.assign({ ref: ref, accept: accept, ariaRequired: ariaRequired, multiple: multiple, onChange: handleFilesChange, value: value }, restProps, { ariaDescribedby: ariaDescribedBy, invalid: invalid }), i18nStrings.uploadButtonText(multiple))),
            (constraintText || errorText) && (React.createElement("div", { className: styles.hints },
                errorText && (React.createElement(FormFieldError, { id: errorId, errorIconAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorIconAriaLabel }, errorText)),
                constraintText && (React.createElement(ConstraintText, { id: constraintTextId, hasError: !!errorText }, constraintText))))),
        !multiple && value.length > 0 ? (React.createElement(InternalBox, null,
            React.createElement(Token, { ariaLabel: value[0].name, dismissLabel: i18nStrings.removeFileAriaLabel(0), onDismiss: () => onFileRemove(0), errorText: fileErrors === null || fileErrors === void 0 ? void 0 : fileErrors[0], errorIconAriaLabel: i18nStrings.errorIconAriaLabel, "data-index": 0 },
                React.createElement(FileOption, { file: value[0], metadata: metadata, i18nStrings: i18nStrings })))) : null,
        multiple && value.length > 0 ? (React.createElement(InternalBox, null,
            React.createElement(TokenList, { alignment: "vertical", items: value, renderItem: (file, fileIndex) => (React.createElement(Token, { ariaLabel: file.name, dismissLabel: i18nStrings.removeFileAriaLabel(fileIndex), onDismiss: () => onFileRemove(fileIndex), errorText: fileErrors === null || fileErrors === void 0 ? void 0 : fileErrors[fileIndex], errorIconAriaLabel: i18nStrings.errorIconAriaLabel, "data-index": fileIndex },
                    React.createElement(FileOption, { file: file, metadata: metadata, i18nStrings: i18nStrings }))), limit: tokenLimit, i18nStrings: {
                    limitShowFewer: i18nStrings.limitShowFewer,
                    limitShowMore: i18nStrings.limitShowMore,
                }, removedItemIndex: removedFileIndex }))) : null));
}
//# sourceMappingURL=internal.js.map