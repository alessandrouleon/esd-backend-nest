"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUtcDate = void 0;
const date_fns_tz_1 = require("date-fns-tz");
const getUtcDate = () => {
    return new Date((0, date_fns_tz_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'UTC' }));
};
exports.getUtcDate = getUtcDate;
//# sourceMappingURL=date.js.map