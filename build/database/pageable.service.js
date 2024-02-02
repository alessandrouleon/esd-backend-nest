"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pageable = void 0;
class Pageable {
    buildPage(page) {
        return {
            skip: page.skip ? Number(page.skip) : 0,
            take: page.take ? Number(page.take) : 25,
        };
    }
    buildPageResponse(items, total) {
        return {
            items,
            total,
        };
    }
}
exports.Pageable = Pageable;
//# sourceMappingURL=pageable.service.js.map