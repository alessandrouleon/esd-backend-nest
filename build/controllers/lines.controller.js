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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinesController = void 0;
const common_1 = require("@nestjs/common");
const lists_lines_service_1 = require("../services/lines/lists.lines.service");
const create_lines_dto_1 = require("../dtos/lines/create-lines.dto");
const update_lines_dto_1 = require("../dtos/lines/update-lines.dto");
const search_table_1 = require("../utils/helprs/search-table");
const update_lines_service_1 = require("../services/lines/update.lines.service");
const create_lines_service_1 = require("../services/lines/create.lines.service");
const delete_lines_service_1 = require("../services/lines/delete.lines.service");
const lines_repository_contract_1 = require("../repositories/lines/lines.repository.contract");
let LinesController = class LinesController {
    constructor(listsLinesService, createLinesService, updateLinesService, deleteLinesService) {
        this.listsLinesService = listsLinesService;
        this.createLinesService = createLinesService;
        this.updateLinesService = updateLinesService;
        this.deleteLinesService = deleteLinesService;
    }
    create(createLinesDto) {
        return this.createLinesService.create(createLinesDto);
    }
    async findValueSearch(unifiedValue) {
        return this.listsLinesService.findByUnifiedValueSearch(unifiedValue);
    }
    async findAll(page) {
        return this.listsLinesService.findAll(page);
    }
    async findBySearch(page, search) {
        return this.listsLinesService.getLines(search, page);
    }
    update(id, updateLinesDto) {
        return this.updateLinesService.update(id, updateLinesDto);
    }
    remove(id) {
        return this.deleteLinesService.remove(id);
    }
};
exports.LinesController = LinesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lines_dto_1.CreateLinesDto]),
    __metadata("design:returntype", void 0)
], LinesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lines_repository_contract_1.ISearchLineValue]),
    __metadata("design:returntype", Promise)
], LinesController.prototype, "findValueSearch", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('search/:page?'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('page')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_table_1.SearchFilterTable]),
    __metadata("design:returntype", Promise)
], LinesController.prototype, "findBySearch", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lines_dto_1.UpdateLinesDto]),
    __metadata("design:returntype", void 0)
], LinesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinesController.prototype, "remove", null);
exports.LinesController = LinesController = __decorate([
    (0, common_1.Controller)('lines'),
    __metadata("design:paramtypes", [lists_lines_service_1.ListsLinesService,
        create_lines_service_1.CreateLinesService,
        update_lines_service_1.UpdateLinesService,
        delete_lines_service_1.DeleteLinesService])
], LinesController);
//# sourceMappingURL=lines.controller.js.map