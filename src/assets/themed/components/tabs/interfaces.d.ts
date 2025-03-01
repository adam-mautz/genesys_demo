/// <reference types="react" />
import { BaseComponentProps } from '../internal/base-component';
import { NonCancelableEventHandler } from '../internal/events';
export interface TabsProps extends BaseComponentProps {
    /**
     * Specifies the tabs to display. Each tab object has the following properties:
     *
     * - `id` (string) - The tab identifier. This value needs to be passed to the Tabs component as `activeTabId` to select this tab.
     * - `label` (ReactNode) - Tab label shown in the UI.
     * - `content` (ReactNode) - (Optional) Tab content to render in the container.
     * - `disabled` (boolean) - (Optional) Specifies if this tab is disabled.
     * - `href` (string) - (Optional) You can use this parameter to change the default `href` of the internal tab anchor. The
     *    `click` event default behavior is prevented, unless the user clicks the tab with a key modifier (that is, CTRL,
     *    ALT, SHIFT, META). This enables the user to open new browser tabs with an initially selected component tab,
     *    if your application routing can handle such deep links. You can manually update routing on the current page
     *    using the `activeTabHref` property of the `change` event's detail.
     */
    tabs: ReadonlyArray<TabsProps.Tab>;
    /**
     * The possible visual variants of tabs are the following:
     * * `default` - Use in any context.
     * * `container` - Use this variant to have the tabs displayed within a container header.
     * * `stacked` - Use this variant directly adjacent to other stacked containers (such as a container, table).
     */
    variant?: TabsProps.Variant;
    /**
     * Called whenever the user selects a different tab.
     * The event's `detail` contains the new `activeTabId`.
     */
    onChange?: NonCancelableEventHandler<TabsProps.ChangeDetail>;
    /**
     * The `id` of the currently active tab.
     * * If you don't set this property, the component activates the first tab and switches tabs automatically when a tab header is clicked (that is, uncontrolled behavior).
     * * If you explicitly set this property, you must set define an `onChange` handler to update the property when a tab header is clicked (that is, controlled behavior).
     */
    activeTabId?: string;
    /**
     * Provides an `aria-label` to the tab container.
     * Don't use `ariaLabel` and `ariaLabelledby` at the same time.
     */
    ariaLabel?: string;
    /**
     * Sets the `aria-labelledby` property on the tab container.
     * If there's a visible label element that you can reference, use this instead of `ariaLabel`.
     * Don't use `ariaLabel` and `ariaLabelledby` at the same time.
     */
    ariaLabelledby?: string;
    /**
     * Determines whether the tab content has padding. If `true`, removes the default padding from the tab content area.
     */
    disableContentPaddings?: boolean;
    /**
     * An object containing all the necessary localized strings required by the component.
     */
    i18nStrings?: TabsProps.I18nStrings;
}
export declare namespace TabsProps {
    type Variant = 'default' | 'container' | 'stacked';
    interface Tab {
        /**
         * The tab id. This value will be need to be passed to the Tabs component as `activeTabId` to select this tab.
         */
        id: string;
        /**
         * Tab label shown in the UI.
         */
        label: React.ReactNode;
        /**
         * Tab content to render in the container.
         */
        content?: React.ReactNode;
        /**
         * Whether this tab is disabled.
         */
        disabled?: boolean;
        /**
         * You can use this parameter to change the default `href` of the internal tab anchor. The
         * `click` event default behavior is prevented, unless the user clicks the tab with a key modifier (CTRL,
         * ALT, SHIFT, META). This allows to open new browser tabs with an initially selected component tab,
         * when the routing can handle such deep links. You can manually update routing on the current page
         * using the `activeTabHref` property of the `change` event's detail.
         */
        href?: string;
    }
    interface ChangeDetail {
        /**
         * The ID of the clicked tab.
         */
        activeTabId: string;
        /**
         * The `href` attribute of the clicked tab, if defined.
         */
        activeTabHref?: string;
    }
    interface I18nStrings {
        /**
         * ARIA label for the scroll left button that appears when the tab header is wider than the container.
         */
        scrollLeftAriaLabel: string;
        /**
         * ARIA label for the scroll right button that appears when the tab header is wider than the container.
         */
        scrollRightAriaLabel: string;
    }
}
//# sourceMappingURL=interfaces.d.ts.map