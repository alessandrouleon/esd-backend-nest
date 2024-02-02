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
exports.ListsLinesService = void 0;
const common_1 = require("@nestjs/common");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const pagination_1 = require("../../utils/pagination");
let ListsLinesService = class ListsLinesService {
    constructor(linesRepository) {
        this.linesRepository = linesRepository;
    }
    async findByUnifiedValueSearch(unifiedValue) {
        return await this.linesRepository.findByUnifiedValueSearch(unifiedValue);
    }
    async findAll(page) {
        return this.linesRepository.findAll(page);
    }
    async getAllLinesNotPaginated(page) {
        return this.linesRepository.findAll(page);
    }
    async getAllLinesPaginated({ skip, take, page }) {
        const { lines, total } = await this.linesRepository.findAllLinesWithPagination({
            page,
            take,
            skip,
        });
        const goal = (0, pagination_1.paginateResponse)({ total, page, take });
        return { lines, ...goal };
    }
    async searchLinesWithDateColumn({ value, take, skip, page, column, }) {
        const { lines, total } = await this.linesRepository.searchLinesCaseFormatDate({ take, skip, page }, { column, value });
        const goal = (0, pagination_1.paginateResponse)({ total, page, take });
        return { lines, ...goal };
    }
    async getLines({ column, value, isPaginated = true }, pageNumber) {
        const { page, skip, take } = (0, pagination_1.getParametersToPaginate)(pageNumber);
        if (!isPaginated) {
            if (column || value) {
                throw new common_1.HttpException(messages_helps_1.FilterTableMessagesHelper.NOT_EXISTS_COLUMN_AND_VALUE, common_1.HttpStatus.BAD_REQUEST);
            }
            return this.getAllLinesNotPaginated(page);
        }
        if (!column && !value) {
            return this.getAllLinesPaginated({ page, skip, take });
        }
        return this.searchLinesWithDateColumn({
            column,
            page,
            skip,
            take,
            value,
        });
    }
};
exports.ListsLinesService = ListsLinesService;
exports.ListsLinesService = ListsLinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ILinesRepository')),
    __metadata("design:paramtypes", [Object])
], ListsLinesService);
//# sourceMappingURL=lists.lines.service.js.map