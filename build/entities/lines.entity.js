"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lines = void 0;
const date_1 = require("../utils/date");
const uuid_1 = require("uuid");
class Lines {
    constructor(props, id) {
        Object.assign(this, props);
        this.createdAt = (0, date_1.getUtcDate)();
        this.id = id ?? (0, uuid_1.v4)();
    }
}
exports.Lines = Lines;
//# sourceMappingURL=lines.entity.js.map