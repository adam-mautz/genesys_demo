"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const styles_selectors_js_1 = require("../../../expandable-section/styles.selectors.js");
const styles_selectors_js_2 = require("../../../container/styles.selectors.js");
class ExpandableSectionWrapper extends selectors_1.ComponentWrapper {
    findHeader() {
        return this.findByClassName(styles_selectors_js_1.default.header);
    }
    findContent() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findExpandedContent() {
        return this.find(`:scope > .${styles_selectors_js_1.default['content-expanded']}, :scope > .${styles_selectors_js_2.default.content} > .${styles_selectors_js_1.default['content-expanded']}`);
    }
    findExpandIcon() {
        return this.findByClassName(styles_selectors_js_1.default['icon-container']);
    }
}
exports.default = ExpandableSectionWrapper;
ExpandableSectionWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map