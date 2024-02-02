"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFilterTable = void 0;
const class_validator_1 = require("class-validator");
const messages_helps_1 = require("./messages.helps");
class SearchFilterTable {
}
exports.SearchFilterTable = SearchFilterTable;
__decorate([
    (0, class_validator_1.IsString)({
        message: messages_helps_1.FilterTableMessagesHelper.LINES_LIST_WITH_COLUMN_IS_STRING,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]*([a-zA-Z0-9 ]*[a-zA-Z0-9])?$/, {
        message: messages_helps_1.FilterTableMessagesHelper.EMPTY_COLUMN_FILTER,
    }),
    __metadata("design:type", String)
], SearchFilterTable.prototype, "column", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: messages_helps_1.FilterTableMessagesHelper.LINES_LIST_WITH_VALUE_IS_STRING,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]*([a-zA-Z0-9 ]*[a-zA-Z0-9])?$/, {
        message: messages_helps_1.FilterTableMessagesHelper.EMPTY_VALUE_FILTER,
    }),
    __metadata("design:type", String)
], SearchFilterTable.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({
        message: messages_helps_1.FilterTableMessagesHelper.LINES_LIST_WITH_IS_PAGINATED_MUST_BE_BOOLEAN,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], SearchFilterTable.prototype, "isPaginated", void 0);
//# sourceMappingURL=search-table.js.map