"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideNavigationWrapper = exports.SelectWrapper = exports.SegmentedControlWrapper = exports.S3ResourceSelectorWrapper = exports.RadioGroupWrapper = exports.PropertyFilterWrapper = exports.ProgressBarWrapper = exports.PopoverWrapper = exports.PieChartWrapper = exports.PaginationWrapper = exports.MultiselectWrapper = exports.ModalWrapper = exports.MixedLineBarChartWrapper = exports.LinkWrapper = exports.LineChartWrapper = exports.InputWrapper = exports.IconWrapper = exports.HotspotWrapper = exports.HelpPanelWrapper = exports.HeaderWrapper = exports.GridWrapper = exports.FormFieldWrapper = exports.FormWrapper = exports.FlashbarWrapper = exports.FileUploadWrapper = exports.ExpandableSectionWrapper = exports.DateRangePickerWrapper = exports.DatePickerWrapper = exports.DateInputWrapper = exports.ContentLayoutWrapper = exports.ContainerWrapper = exports.ColumnLayoutWrapper = exports.CollectionPreferencesWrapper = exports.CodeEditorWrapper = exports.CheckboxWrapper = exports.CardsWrapper = exports.CalendarWrapper = exports.ButtonDropdownWrapper = exports.ButtonWrapper = exports.BreadcrumbGroupWrapper = exports.BoxWrapper = exports.BarChartWrapper = exports.BadgeWrapper = exports.AutosuggestWrapper = exports.AttributeEditorWrapper = exports.AreaChartWrapper = exports.AppLayoutWrapper = exports.AnnotationWrapper = exports.AlertWrapper = exports.ElementWrapper = void 0;
exports.WizardWrapper = exports.TutorialPanelWrapper = exports.TopNavigationWrapper = exports.TokenGroupWrapper = exports.ToggleWrapper = exports.TimeInputWrapper = exports.TilesWrapper = exports.TextareaWrapper = exports.TextFilterWrapper = exports.TextContentWrapper = exports.TagEditorWrapper = exports.TabsWrapper = exports.TableWrapper = exports.StatusIndicatorWrapper = exports.SplitPanelWrapper = exports.SpinnerWrapper = exports.SpaceBetweenWrapper = void 0;
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
Object.defineProperty(exports, "ElementWrapper", { enumerable: true, get: function () { return dom_1.ElementWrapper; } });
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const alert_1 = require("./alert");
exports.AlertWrapper = alert_1.default;
const annotation_1 = require("./annotation");
exports.AnnotationWrapper = annotation_1.default;
const app_layout_1 = require("./app-layout");
exports.AppLayoutWrapper = app_layout_1.default;
const area_chart_1 = require("./area-chart");
exports.AreaChartWrapper = area_chart_1.default;
const attribute_editor_1 = require("./attribute-editor");
exports.AttributeEditorWrapper = attribute_editor_1.default;
const autosuggest_1 = require("./autosuggest");
exports.AutosuggestWrapper = autosuggest_1.default;
const badge_1 = require("./badge");
exports.BadgeWrapper = badge_1.default;
const bar_chart_1 = require("./bar-chart");
exports.BarChartWrapper = bar_chart_1.default;
const box_1 = require("./box");
exports.BoxWrapper = box_1.default;
const breadcrumb_group_1 = require("./breadcrumb-group");
exports.BreadcrumbGroupWrapper = breadcrumb_group_1.default;
const button_1 = require("./button");
exports.ButtonWrapper = button_1.default;
const button_dropdown_1 = require("./button-dropdown");
exports.ButtonDropdownWrapper = button_dropdown_1.default;
const calendar_1 = require("./calendar");
exports.CalendarWrapper = calendar_1.default;
const cards_1 = require("./cards");
exports.CardsWrapper = cards_1.default;
const checkbox_1 = require("./checkbox");
exports.CheckboxWrapper = checkbox_1.default;
const code_editor_1 = require("./code-editor");
exports.CodeEditorWrapper = code_editor_1.default;
const collection_preferences_1 = require("./collection-preferences");
exports.CollectionPreferencesWrapper = collection_preferences_1.default;
const column_layout_1 = require("./column-layout");
exports.ColumnLayoutWrapper = column_layout_1.default;
const container_1 = require("./container");
exports.ContainerWrapper = container_1.default;
const content_layout_1 = require("./content-layout");
exports.ContentLayoutWrapper = content_layout_1.default;
const date_input_1 = require("./date-input");
exports.DateInputWrapper = date_input_1.default;
const date_picker_1 = require("./date-picker");
exports.DatePickerWrapper = date_picker_1.default;
const date_range_picker_1 = require("./date-range-picker");
exports.DateRangePickerWrapper = date_range_picker_1.default;
const expandable_section_1 = require("./expandable-section");
exports.ExpandableSectionWrapper = expandable_section_1.default;
const file_upload_1 = require("./file-upload");
exports.FileUploadWrapper = file_upload_1.default;
const flashbar_1 = require("./flashbar");
exports.FlashbarWrapper = flashbar_1.default;
const form_1 = require("./form");
exports.FormWrapper = form_1.default;
const form_field_1 = require("./form-field");
exports.FormFieldWrapper = form_field_1.default;
const grid_1 = require("./grid");
exports.GridWrapper = grid_1.default;
const header_1 = require("./header");
exports.HeaderWrapper = header_1.default;
const help_panel_1 = require("./help-panel");
exports.HelpPanelWrapper = help_panel_1.default;
const hotspot_1 = require("./hotspot");
exports.HotspotWrapper = hotspot_1.default;
const icon_1 = require("./icon");
exports.IconWrapper = icon_1.default;
const input_1 = require("./input");
exports.InputWrapper = input_1.default;
const line_chart_1 = require("./line-chart");
exports.LineChartWrapper = line_chart_1.default;
const link_1 = require("./link");
exports.LinkWrapper = link_1.default;
const mixed_line_bar_chart_1 = require("./mixed-line-bar-chart");
exports.MixedLineBarChartWrapper = mixed_line_bar_chart_1.default;
const modal_1 = require("./modal");
exports.ModalWrapper = modal_1.default;
const multiselect_1 = require("./multiselect");
exports.MultiselectWrapper = multiselect_1.default;
const pagination_1 = require("./pagination");
exports.PaginationWrapper = pagination_1.default;
const pie_chart_1 = require("./pie-chart");
exports.PieChartWrapper = pie_chart_1.default;
const popover_1 = require("./popover");
exports.PopoverWrapper = popover_1.default;
const progress_bar_1 = require("./progress-bar");
exports.ProgressBarWrapper = progress_bar_1.default;
const property_filter_1 = require("./property-filter");
exports.PropertyFilterWrapper = property_filter_1.default;
const radio_group_1 = require("./radio-group");
exports.RadioGroupWrapper = radio_group_1.default;
const s3_resource_selector_1 = require("./s3-resource-selector");
exports.S3ResourceSelectorWrapper = s3_resource_selector_1.default;
const segmented_control_1 = require("./segmented-control");
exports.SegmentedControlWrapper = segmented_control_1.default;
const select_1 = require("./select");
exports.SelectWrapper = select_1.default;
const side_navigation_1 = require("./side-navigation");
exports.SideNavigationWrapper = side_navigation_1.default;
const space_between_1 = require("./space-between");
exports.SpaceBetweenWrapper = space_between_1.default;
const spinner_1 = require("./spinner");
exports.SpinnerWrapper = spinner_1.default;
const split_panel_1 = require("./split-panel");
exports.SplitPanelWrapper = split_panel_1.default;
const status_indicator_1 = require("./status-indicator");
exports.StatusIndicatorWrapper = status_indicator_1.default;
const table_1 = require("./table");
exports.TableWrapper = table_1.default;
const tabs_1 = require("./tabs");
exports.TabsWrapper = tabs_1.default;
const tag_editor_1 = require("./tag-editor");
exports.TagEditorWrapper = tag_editor_1.default;
const text_content_1 = require("./text-content");
exports.TextContentWrapper = text_content_1.default;
const text_filter_1 = require("./text-filter");
exports.TextFilterWrapper = text_filter_1.default;
const textarea_1 = require("./textarea");
exports.TextareaWrapper = textarea_1.default;
const tiles_1 = require("./tiles");
exports.TilesWrapper = tiles_1.default;
const time_input_1 = require("./time-input");
exports.TimeInputWrapper = time_input_1.default;
const toggle_1 = require("./toggle");
exports.ToggleWrapper = toggle_1.default;
const token_group_1 = require("./token-group");
exports.TokenGroupWrapper = token_group_1.default;
const top_navigation_1 = require("./top-navigation");
exports.TopNavigationWrapper = top_navigation_1.default;
const tutorial_panel_1 = require("./tutorial-panel");
exports.TutorialPanelWrapper = tutorial_panel_1.default;
const wizard_1 = require("./wizard");
exports.WizardWrapper = wizard_1.default;
dom_1.ElementWrapper.prototype.findAlert = function (selector) {
    const rootSelector = `.${alert_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, alert_1.default);
};
dom_1.ElementWrapper.prototype.findAnnotation = function (selector) {
    const rootSelector = `.${annotation_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, annotation_1.default);
};
dom_1.ElementWrapper.prototype.findAppLayout = function (selector) {
    const rootSelector = `.${app_layout_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, app_layout_1.default);
};
dom_1.ElementWrapper.prototype.findAreaChart = function (selector) {
    const rootSelector = `.${area_chart_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, area_chart_1.default);
};
dom_1.ElementWrapper.prototype.findAttributeEditor = function (selector) {
    const rootSelector = `.${attribute_editor_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, attribute_editor_1.default);
};
dom_1.ElementWrapper.prototype.findAutosuggest = function (selector) {
    const rootSelector = `.${autosuggest_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, autosuggest_1.default);
};
dom_1.ElementWrapper.prototype.findBadge = function (selector) {
    const rootSelector = `.${badge_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, badge_1.default);
};
dom_1.ElementWrapper.prototype.findBarChart = function (selector) {
    const rootSelector = `.${bar_chart_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, bar_chart_1.default);
};
dom_1.ElementWrapper.prototype.findBox = function (selector) {
    const rootSelector = `.${box_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, box_1.default);
};
dom_1.ElementWrapper.prototype.findBreadcrumbGroup = function (selector) {
    const rootSelector = `.${breadcrumb_group_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, breadcrumb_group_1.default);
};
dom_1.ElementWrapper.prototype.findButton = function (selector) {
    const rootSelector = `.${button_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, button_1.default);
};
dom_1.ElementWrapper.prototype.findButtonDropdown = function (selector) {
    const rootSelector = `.${button_dropdown_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, button_dropdown_1.default);
};
dom_1.ElementWrapper.prototype.findCalendar = function (selector) {
    const rootSelector = `.${calendar_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, calendar_1.default);
};
dom_1.ElementWrapper.prototype.findCards = function (selector) {
    const rootSelector = `.${cards_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, cards_1.default);
};
dom_1.ElementWrapper.prototype.findCheckbox = function (selector) {
    const rootSelector = `.${checkbox_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, checkbox_1.default);
};
dom_1.ElementWrapper.prototype.findCodeEditor = function (selector) {
    const rootSelector = `.${code_editor_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, code_editor_1.default);
};
dom_1.ElementWrapper.prototype.findCollectionPreferences = function (selector) {
    const rootSelector = `.${collection_preferences_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, collection_preferences_1.default);
};
dom_1.ElementWrapper.prototype.findColumnLayout = function (selector) {
    const rootSelector = `.${column_layout_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, column_layout_1.default);
};
dom_1.ElementWrapper.prototype.findContainer = function (selector) {
    const rootSelector = `.${container_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, container_1.default);
};
dom_1.ElementWrapper.prototype.findContentLayout = function (selector) {
    const rootSelector = `.${content_layout_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, content_layout_1.default);
};
dom_1.ElementWrapper.prototype.findDateInput = function (selector) {
    const rootSelector = `.${date_input_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, date_input_1.default);
};
dom_1.ElementWrapper.prototype.findDatePicker = function (selector) {
    const rootSelector = `.${date_picker_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, date_picker_1.default);
};
dom_1.ElementWrapper.prototype.findDateRangePicker = function (selector) {
    const rootSelector = `.${date_range_picker_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, date_range_picker_1.default);
};
dom_1.ElementWrapper.prototype.findExpandableSection = function (selector) {
    const rootSelector = `.${expandable_section_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, expandable_section_1.default);
};
dom_1.ElementWrapper.prototype.findFileUpload = function (selector) {
    const rootSelector = `.${file_upload_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, file_upload_1.default);
};
dom_1.ElementWrapper.prototype.findFlashbar = function (selector) {
    const rootSelector = `.${flashbar_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, flashbar_1.default);
};
dom_1.ElementWrapper.prototype.findForm = function (selector) {
    const rootSelector = `.${form_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, form_1.default);
};
dom_1.ElementWrapper.prototype.findFormField = function (selector) {
    const rootSelector = `.${form_field_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, form_field_1.default);
};
dom_1.ElementWrapper.prototype.findGrid = function (selector) {
    const rootSelector = `.${grid_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, grid_1.default);
};
dom_1.ElementWrapper.prototype.findHeader = function (selector) {
    const rootSelector = `.${header_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, header_1.default);
};
dom_1.ElementWrapper.prototype.findHelpPanel = function (selector) {
    const rootSelector = `.${help_panel_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, help_panel_1.default);
};
dom_1.ElementWrapper.prototype.findHotspot = function (selector) {
    const rootSelector = `.${hotspot_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, hotspot_1.default);
};
dom_1.ElementWrapper.prototype.findIcon = function (selector) {
    const rootSelector = `.${icon_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, icon_1.default);
};
dom_1.ElementWrapper.prototype.findInput = function (selector) {
    const rootSelector = `.${input_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, input_1.default);
};
dom_1.ElementWrapper.prototype.findLineChart = function (selector) {
    const rootSelector = `.${line_chart_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, line_chart_1.default);
};
dom_1.ElementWrapper.prototype.findLink = function (selector) {
    const rootSelector = `.${link_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, link_1.default);
};
dom_1.ElementWrapper.prototype.findMixedLineBarChart = function (selector) {
    const rootSelector = `.${mixed_line_bar_chart_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, mixed_line_bar_chart_1.default);
};
dom_1.ElementWrapper.prototype.findModal = function (selector) {
    const rootSelector = `.${modal_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, modal_1.default);
};
dom_1.ElementWrapper.prototype.findMultiselect = function (selector) {
    const rootSelector = `.${multiselect_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, multiselect_1.default);
};
dom_1.ElementWrapper.prototype.findPagination = function (selector) {
    const rootSelector = `.${pagination_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, pagination_1.default);
};
dom_1.ElementWrapper.prototype.findPieChart = function (selector) {
    const rootSelector = `.${pie_chart_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, pie_chart_1.default);
};
dom_1.ElementWrapper.prototype.findPopover = function (selector) {
    const rootSelector = `.${popover_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, popover_1.default);
};
dom_1.ElementWrapper.prototype.findProgressBar = function (selector) {
    const rootSelector = `.${progress_bar_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, progress_bar_1.default);
};
dom_1.ElementWrapper.prototype.findPropertyFilter = function (selector) {
    const rootSelector = `.${property_filter_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, property_filter_1.default);
};
dom_1.ElementWrapper.prototype.findRadioGroup = function (selector) {
    const rootSelector = `.${radio_group_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, radio_group_1.default);
};
dom_1.ElementWrapper.prototype.findS3ResourceSelector = function (selector) {
    const rootSelector = `.${s3_resource_selector_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, s3_resource_selector_1.default);
};
dom_1.ElementWrapper.prototype.findSegmentedControl = function (selector) {
    const rootSelector = `.${segmented_control_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, segmented_control_1.default);
};
dom_1.ElementWrapper.prototype.findSelect = function (selector) {
    const rootSelector = `.${select_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, select_1.default);
};
dom_1.ElementWrapper.prototype.findSideNavigation = function (selector) {
    const rootSelector = `.${side_navigation_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, side_navigation_1.default);
};
dom_1.ElementWrapper.prototype.findSpaceBetween = function (selector) {
    const rootSelector = `.${space_between_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, space_between_1.default);
};
dom_1.ElementWrapper.prototype.findSpinner = function (selector) {
    const rootSelector = `.${spinner_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, spinner_1.default);
};
dom_1.ElementWrapper.prototype.findSplitPanel = function (selector) {
    const rootSelector = `.${split_panel_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, split_panel_1.default);
};
dom_1.ElementWrapper.prototype.findStatusIndicator = function (selector) {
    const rootSelector = `.${status_indicator_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, status_indicator_1.default);
};
dom_1.ElementWrapper.prototype.findTable = function (selector) {
    const rootSelector = `.${table_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, table_1.default);
};
dom_1.ElementWrapper.prototype.findTabs = function (selector) {
    const rootSelector = `.${tabs_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, tabs_1.default);
};
dom_1.ElementWrapper.prototype.findTagEditor = function (selector) {
    const rootSelector = `.${tag_editor_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, tag_editor_1.default);
};
dom_1.ElementWrapper.prototype.findTextContent = function (selector) {
    const rootSelector = `.${text_content_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, text_content_1.default);
};
dom_1.ElementWrapper.prototype.findTextFilter = function (selector) {
    const rootSelector = `.${text_filter_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, text_filter_1.default);
};
dom_1.ElementWrapper.prototype.findTextarea = function (selector) {
    const rootSelector = `.${textarea_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, textarea_1.default);
};
dom_1.ElementWrapper.prototype.findTiles = function (selector) {
    const rootSelector = `.${tiles_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, tiles_1.default);
};
dom_1.ElementWrapper.prototype.findTimeInput = function (selector) {
    const rootSelector = `.${time_input_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, time_input_1.default);
};
dom_1.ElementWrapper.prototype.findToggle = function (selector) {
    const rootSelector = `.${toggle_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, toggle_1.default);
};
dom_1.ElementWrapper.prototype.findTokenGroup = function (selector) {
    const rootSelector = `.${token_group_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, token_group_1.default);
};
dom_1.ElementWrapper.prototype.findTopNavigation = function (selector) {
    const rootSelector = `.${top_navigation_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, top_navigation_1.default);
};
dom_1.ElementWrapper.prototype.findTutorialPanel = function (selector) {
    const rootSelector = `.${tutorial_panel_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, tutorial_panel_1.default);
};
dom_1.ElementWrapper.prototype.findWizard = function (selector) {
    const rootSelector = `.${wizard_1.default.rootSelector}`;
    // casting to 'any' is needed to avoid this issue with generics
    // https://github.com/microsoft/TypeScript/issues/29132
    return this.findComponent(selector ? (0, utils_1.appendSelector)(selector, rootSelector) : rootSelector, wizard_1.default);
};
function wrapper(root = document.body) {
    if (document && document.body && !document.body.contains(root)) {
        console.warn('[AwsUi] [test-utils] provided element is not part of the document body, interactions may work incorrectly');
    }
    return new dom_1.ElementWrapper(root);
}
exports.default = wrapper;
//# sourceMappingURL=index.js.map