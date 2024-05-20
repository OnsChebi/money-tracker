"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeHtml = void 0;
const DOMPurify = require("dompurify");
const jsdom_1 = require("jsdom");
const window = new jsdom_1.JSDOM('').window;
const purify = DOMPurify(window);
function sanitizeHtml(html) {
    return purify.sanitize(html);
}
exports.sanitizeHtml = sanitizeHtml;
//# sourceMappingURL=sanitize.helper.js.map