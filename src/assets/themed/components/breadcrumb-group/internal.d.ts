/// <reference types="react" />
import { BreadcrumbGroupProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { SomeRequired } from '../internal/types';
export declare const getEventDetail: <T extends BreadcrumbGroupProps.Item>(item: T) => {
    item: T;
    text: string;
    href: string;
};
type InternalBreadcrumbGroupProps<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item> = SomeRequired<BreadcrumbGroupProps<T>, 'expandAriaLabel'> & InternalBaseComponentProps;
export default function InternalBreadcrumbGroup<T extends BreadcrumbGroupProps.Item = BreadcrumbGroupProps.Item>({ items, ariaLabel, expandAriaLabel, onClick, onFollow, __internalRootRef, ...props }: InternalBreadcrumbGroupProps<T>): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map