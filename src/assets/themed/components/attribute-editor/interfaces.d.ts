import React from 'react';
import { BaseComponentProps } from '../internal/base-component';
import { NonCancelableEventHandler } from '../internal/events';
export interface AttributeEditorForwardRefType {
    <T>(props: AttributeEditorProps<T> & {
        ref?: React.Ref<AttributeEditorProps.Ref>;
    }): JSX.Element;
}
export declare namespace AttributeEditorProps {
    interface IsItemRemovableFunction<T> {
        (item: T): boolean;
    }
    type FieldRenderable<T> = (item: T, itemIndex: number) => React.ReactNode;
    interface FieldDefinition<T> {
        label?: React.ReactNode;
        info?: React.ReactNode;
        control?: FieldRenderable<T> | React.ReactNode;
        errorText?: FieldRenderable<T> | React.ReactNode;
        constraintText?: FieldRenderable<T> | React.ReactNode;
    }
    interface RemoveButtonClickDetail {
        itemIndex: number;
    }
    interface Ref {
        /**
         * Focuses the 'remove' button for the given row index.
         */
        focusRemoveButton(itemIndex: number): void;
        /**
         * Focuses the 'add' button. Use this, for example, after a user removes the last row.
         */
        focusAddButton(): void;
    }
    interface I18nStrings<T = any> {
        errorIconAriaLabel?: string;
        itemRemovedAriaLive?: string;
        removeButtonAriaLabel?: (item: T) => string;
    }
}
export interface AttributeEditorProps<T> extends BaseComponentProps {
    /**
     * Displayed when there are no items to display.
     */
    empty?: React.ReactNode;
    /**
     * Displayed below the add button. Use it for additional information related to the attribute editor.
     */
    additionalInfo?: React.ReactNode;
    /**
     * Specifies the text that's displayed in the add button.
     */
    addButtonText: string;
    /**
     * Specifies the text that's displayed in the remove button.
     */
    removeButtonText: string;
    /**
     * Specifies the items that serve as the data source for all rows.
     * The display of a row is handled by the `definition` property.
     */
    items?: ReadonlyArray<T>;
    /**
     * Function that determines whether an item is removable. When this function returns `false`, the remove
     * button is not rendered and the user can't remove the item.
     * By default, all items are removable.
     */
    isItemRemovable?: AttributeEditorProps.IsItemRemovableFunction<T>;
    /**
     * Determines whether the add button is disabled.
     */
    disableAddButton?: boolean;
    /**
     * Defines the editor configuration. Each object in the array represents one form field in the row.
     * * `label` (ReactNode) - Text label for the form field.
     * * `info` (ReactNode) - Info link for the form field.
     * * `errorText` ((item, itemIndex) => ReactNode) - Error message text to display as a control validation message.
     *    It renders the form field as invalid if the returned value is not `null` or `undefined`.
     * * `constraintText` ((item, itemIndex) => ReactNode) - Text to display as a constraint message below the field.
     * * `control` ((item, itemIndex) => ReactNode) - A control to use as the input for the field.
     *
     * A maximum of four fields are supported.
     */
    definition: ReadonlyArray<AttributeEditorProps.FieldDefinition<T>>;
    /**
     * Called when add button is clicked.
     */
    onAddButtonClick?: NonCancelableEventHandler;
    /**
     * Called when remove button is clicked.
     * The event `detail` contains the index of the corresponding item.
     */
    onRemoveButtonClick?: NonCancelableEventHandler<AttributeEditorProps.RemoveButtonClickDetail>;
    /**
     * An object containing all the necessary localized strings required by the component.
     */
    i18nStrings?: AttributeEditorProps.I18nStrings<T>;
}
//# sourceMappingURL=interfaces.d.ts.map