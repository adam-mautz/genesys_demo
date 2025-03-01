"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../table/styles.selectors.js");
const styles_selectors_js_2 = require("../../../table/header-cell/styles.selectors.js");
const styles_selectors_js_3 = require("../../../table/body-cell/styles.selectors.js");
const styles_selectors_js_4 = require("../../../table/selection-control/styles.selectors.js");
const styles_selectors_js_5 = require("../../../table/resizer/styles.selectors.js");
const collection_preferences_1 = require("../collection-preferences");
const container_1 = require("../container");
const pagination_1 = require("../pagination");
const text_filter_1 = require("../text-filter");
const property_filter_1 = require("../property-filter");
class TableWrapper extends selectors_1.ComponentWrapper {
    constructor() {
        super(...arguments);
        this.containerWrapper = new container_1.default(this.getElement());
    }
    findNativeTable() {
        return this.find(`.${styles_selectors_js_1.default.wrapper} > .${styles_selectors_js_1.default.table}`);
    }
    findActiveTHead() {
        return this.findByClassName(styles_selectors_js_1.default['thead-active']);
    }
    findHeaderSlot() {
        return this.findByClassName(styles_selectors_js_1.default['header-controls']);
    }
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    findHeaderRegion() {
        return this.findHeaderSlot();
    }
    findFooterSlot() {
        return this.containerWrapper.findFooter();
    }
    findColumnHeaders() {
        return this.findActiveTHead().findAll('tr > *');
    }
    /**
     * Returns the element the user clicks when resizing a column.
     *
     * @param columnIndex 1-based index of the column containing the resizer.
     */
    findColumnResizer(columnIndex) {
        return this.findActiveTHead().find(`th:nth-child(${columnIndex}) .${styles_selectors_js_5.default.resizer}`);
    }
    /**
     * Returns a table cell based on given row and column indices.
     *
     * @param rowIndex 1-based index of the row of the cell to select.
     * @param columnIndex 1-based index of the column of the cell to select.
     */
    findBodyCell(rowIndex, columnIndex) {
        return this.findNativeTable().find(`tbody tr:nth-child(${rowIndex}) .${styles_selectors_js_3.default['body-cell']}:nth-child(${columnIndex})`);
    }
    findRows() {
        return this.findNativeTable().findAllByClassName(styles_selectors_js_1.default.row);
    }
    findSelectedRows() {
        return this.findAllByClassName(styles_selectors_js_1.default['row-selected']);
    }
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    findEmptyRegion() {
        return this.findEmptySlot();
    }
    findEmptySlot() {
        return this.findByClassName(styles_selectors_js_1.default.empty);
    }
    findLoadingText() {
        return this.findByClassName(styles_selectors_js_1.default.loading);
    }
    findColumnSortingArea(colIndex) {
        return this.findActiveTHead().find(`tr > *:nth-child(${colIndex}) [role=button]`);
    }
    /**
     * Returns the column that is used for ascending sorting.
     */
    findAscSortedColumn() {
        return this.findNativeTable().findByClassName(styles_selectors_js_2.default['header-cell-ascending']);
    }
    /**
     * Returns the column that is used for descending sorting.
     */
    findDescSortedColumn() {
        return this.findNativeTable().findByClassName(styles_selectors_js_2.default['header-cell-descending']);
    }
    /**
     * Returns a row selection area for a given index.
     *
     * @param rowIndex 1-based index of the row selection area to return.
     */
    findRowSelectionArea(rowIndex) {
        return this.findNativeTable().find(`tbody tr:nth-child(${rowIndex}) .${styles_selectors_js_4.default.root}`);
    }
    findSelectAllTrigger() {
        return this.findActiveTHead().find(`.${styles_selectors_js_4.default.root}`);
    }
    findTextFilter() {
        return this.findComponent(`.${styles_selectors_js_1.default['tools-filtering']}`, text_filter_1.default);
    }
    findPropertyFilter() {
        return this.findComponent(`.${styles_selectors_js_1.default['tools-filtering']}`, property_filter_1.default);
    }
    findFilterSlot() {
        return this.findComponent(`.${styles_selectors_js_1.default['tools-filtering']}`, selectors_1.ElementWrapper);
    }
    findCollectionPreferences() {
        return this.findComponent(`.${styles_selectors_js_1.default['tools-preferences']}`, collection_preferences_1.default);
    }
    findPagination() {
        return this.findComponent(`.${styles_selectors_js_1.default['tools-pagination']}`, pagination_1.default);
    }
    /**
     * Returns the button that activates inline editing for a table cell based on given row and column indices.
     *
     * @param rowIndex 1-based index of the row of the cell to select.
     * @param columnIndex 1-based index of the column of the cell to select.
     */
    findEditCellButton(rowIndex, columnIndex) {
        var _a, _b;
        return (_b = (_a = this.findBodyCell(rowIndex, columnIndex)) === null || _a === void 0 ? void 0 : _a.findByClassName(styles_selectors_js_3.default['body-cell-editor'])) !== null && _b !== void 0 ? _b : null;
    }
    findEditingCell() {
        return this.findNativeTable().findByClassName(styles_selectors_js_3.default['body-cell-edit-active']);
    }
    _findEditingCellControls() {
        var _a, _b;
        return (_b = (_a = this.findEditingCell()) === null || _a === void 0 ? void 0 : _a.findByClassName(styles_selectors_js_3.default['body-cell-editor-controls'])) !== null && _b !== void 0 ? _b : null;
    }
    findEditingCellSaveButton() {
        var _a, _b;
        return (_b = (_a = this._findEditingCellControls()) === null || _a === void 0 ? void 0 : _a.find('button[type="submit"]')) !== null && _b !== void 0 ? _b : null;
    }
    findEditingCellCancelButton() {
        var _a, _b;
        return (_b = (_a = this._findEditingCellControls()) === null || _a === void 0 ? void 0 : _a.find('button:first-child')) !== null && _b !== void 0 ? _b : null;
    }
}
exports.default = TableWrapper;
TableWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map