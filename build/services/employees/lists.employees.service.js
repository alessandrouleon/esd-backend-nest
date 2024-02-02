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
exports.ListsEmployeesService = void 0;
const common_1 = require("@nestjs/common");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const pagination_1 = require("../../utils/pagination");
let ListsEmployeesService = class ListsEmployeesService {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    async findByUnifiedValueSearch(unifiedValue) {
        return this.employeesRepository.findByUnifiedValueSearch(unifiedValue);
    }
    async findAll(page) {
        return await this.employeesRepository.findAll(page);
    }
    async searchEmployeesWithDateColumn({ value, take, skip, page, column, }) {
        const { employees, total } = await this.employeesRepository.searchEmployeesCaseFormatDate({ take, skip, page }, { column, value });
        const goal = (0, pagination_1.paginateResponse)({ total, page, take });
        return { employees, ...goal };
    }
    async getAllEmployeesNotPaginated(page) {
        return await this.employeesRepository.findAll(page);
    }
    async getAllEmployeesPaginated({ skip, take, page, }) {
        const { employees, total } = await this.employeesRepository.findAllEmployeesWithPagination({
            page,
            take,
            skip,
        });
        const goal = (0, pagination_1.paginateResponse)({ total, page, take });
        return { employees, ...goal };
    }
    async getEmployees({ column, value, isPaginated = true }, pageNumber) {
        const { page, skip, take } = (0, pagination_1.getParametersToPaginate)(pageNumber);
        if (!isPaginated) {
            if (column || value) {
                throw new common_1.HttpException(messages_helps_1.FilterTableMessagesHelper.NOT_EXISTS_COLUMN_AND_VALUE, common_1.HttpStatus.BAD_REQUEST);
            }
            return this.getAllEmployeesNotPaginated(page);
        }
        if (!column && !value) {
            return this.getAllEmployeesPaginated({ page, skip, take });
        }
        return this.searchEmployeesWithDateColumn({
            column,
            page,
            skip,
            take,
            value,
        });
    }
};
exports.ListsEmployeesService = ListsEmployeesService;
exports.ListsEmployeesService = ListsEmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEmployeesRepository')),
    __metadata("design:paramtypes", [Object])
], ListsEmployeesService);
//# sourceMappingURL=lists.employees.service.js.map