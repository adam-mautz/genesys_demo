import { AceModes } from './ace-modes';
import { findUpUntil } from '../internal/utils/dom';
export const DEFAULT_LIGHT_THEME = 'dawn';
export const DEFAULT_DARK_THEME = 'tomorrow_night_bright';
export function getDefaultConfig() {
    return {
        behavioursEnabled: true,
    };
}
export function getDefaultTheme(element) {
    const isDarkMode = !!findUpUntil(element, node => node.classList.contains('awsui-polaris-dark-mode') || node.classList.contains('awsui-dark-mode'));
    return isDarkMode ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
}
export function getAceTheme(theme) {
    return `ace/theme/${theme}`;
}
export function getLanguageLabel(language) {
    var _a;
    return ((_a = AceModes.filter((mode) => mode.value === language)[0]) === null || _a === void 0 ? void 0 : _a.label) || language;
}
//# sourceMappingURL=util.js.map