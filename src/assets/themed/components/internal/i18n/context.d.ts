import React from 'react';
export type CustomHandler<T> = (formatFn: (args: Record<string, string | number>) => string) => T;
export interface FormatFunction {
    (namespace: string, component: string, key: string, provided: string): string;
    (namespace: string, component: string, key: string, provided: string | undefined): string | undefined;
    <T>(namespace: string, component: string, key: string, provided: T, handler?: CustomHandler<T>): T;
}
export interface InternalI18nContextProps {
    locale: string | null;
    format: FormatFunction;
}
export declare const InternalI18nContext: React.Context<InternalI18nContextProps>;
export declare function useLocale(): string | null;
export interface ComponentFormatFunction {
    (key: string, provided: string): string;
    (key: string, provided: string | undefined): string | undefined;
    <T>(key: string, provided: T, handler?: CustomHandler<T>): T;
}
export declare function useInternalI18n(componentName: string): ComponentFormatFunction;
//# sourceMappingURL=context.d.ts.map