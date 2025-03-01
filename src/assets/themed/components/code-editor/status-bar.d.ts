import React from 'react';
import { CodeEditorProps } from './interfaces';
interface StatusBarProps {
    languageLabel: string;
    cursorPosition: string;
    paneStatus: string;
    isTabFocused: boolean;
    paneId?: string;
    i18nStrings: CodeEditorProps.I18nStrings;
    errorCount: number;
    warningCount: number;
    isRefresh: boolean;
    errorsTabRef?: React.RefObject<HTMLButtonElement>;
    warningsTabRef?: React.RefObject<HTMLButtonElement>;
    onErrorPaneToggle: () => void;
    onWarningPaneToggle: () => void;
    onTabFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onTabBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onPreferencesOpen: () => void;
    onHeightChange?: (height: number | null) => void;
}
export declare const StatusBar: ({ errorsTabRef, warningsTabRef, ...restProps }: StatusBarProps) => JSX.Element;
export {};
//# sourceMappingURL=status-bar.d.ts.map