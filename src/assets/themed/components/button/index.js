import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import { InternalButton } from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
const Button = React.forwardRef((_a, ref) => {
    var { children, iconName, iconAlign = 'left', iconUrl, iconSvg, iconAlt, variant = 'normal', loading = false, loadingText, disabled = false, wrapText = true, href, target, rel, download, formAction = 'submit', ariaLabel, onClick, onFollow, ariaExpanded, form } = _a, props = __rest(_a, ["children", "iconName", "iconAlign", "iconUrl", "iconSvg", "iconAlt", "variant", "loading", "loadingText", "disabled", "wrapText", "href", "target", "rel", "download", "formAction", "ariaLabel", "onClick", "onFollow", "ariaExpanded", "form"]);
    const baseComponentProps = useBaseComponent('Button');
    const baseProps = getBaseProps(props);
    return (React.createElement(InternalButton, Object.assign({}, baseProps, baseComponentProps, { ref: ref, iconName: iconName, iconAlign: iconAlign, iconUrl: iconUrl, iconSvg: iconSvg, iconAlt: iconAlt, variant: variant, loading: loading, loadingText: loadingText, disabled: disabled, wrapText: wrapText, href: href, target: target, rel: rel, download: download, formAction: formAction, ariaLabel: ariaLabel, onClick: onClick, onFollow: onFollow, ariaExpanded: ariaExpanded, form: form }), children));
});
applyDisplayName(Button, 'Button');
export default Button;
//# sourceMappingURL=index.js.map