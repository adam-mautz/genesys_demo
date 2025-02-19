import React from 'react';
export interface TokenListProps<Item> {
    alignment: 'vertical' | 'horizontal' | 'inline';
    items: readonly Item[];
    limit?: number;
    after?: React.ReactNode;
    renderItem: (item: Item, itemIndex: number) => React.ReactNode;
    i18nStrings?: I18nStrings;
    removedItemIndex?: null | number;
}
export interface I18nStrings {
    limitShowFewer?: string;
    limitShowMore?: string;
}
//# sourceMappingURL=interfaces.d.ts.map