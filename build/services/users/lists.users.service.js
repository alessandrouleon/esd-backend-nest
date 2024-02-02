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
exports.ListsUlsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../../repositories/users/users.repository");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const pagination_1 = require("../../utils/pagination");
let ListsUlsersService = class ListsUlsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findByUnifiedValueSearch(unifiedValue) {
        const user = await this.usersRepository.findByUnifiedValueSearch(unifiedValue);
        return user.map(({ password, ...rest }) => rest);
    }
    async findAll() {
        const users = await this.usersRepository.findAll();
        return users.map(({ password, ...rest }) => rest);
    }
    async getAllUserNotPaginated() {
        return await this.usersRepository.findAll();
    }
    async searchUsersWithDateColumn({ value, take, skip, page, column, }) {
        const { users, total } = await this.usersRepository.searchUsersCaseFormatDate({ take, skip, page }, { column, value });
        const goal = (0, pagination_1.paginateResponse)({ total, page, take });
        return { users, ...goal };
    }
    async getAllUserPaginated({ skip, take, page }) {
        const { users, total } = await this.usersRepository.findAllUsersWithPagination({
            skip,
            take,
            page,
        });
        const goal = (0, pagination_1.paginateResponse)({ total, page, take });
        return { users, ...goal };
    }
    async gerUsers({ column, value, isPaginated = true }, pageNumber) {
        const { skip, take, page } = (0, pagination_1.getParametersToPaginate)(pageNumber);
        if (!isPaginated) {
            if (column || value) {
                throw new common_1.HttpException(messages_helps_1.FilterTableMessagesHelper.NOT_EXISTS_COLUMN_AND_VALUE, common_1.HttpStatus.BAD_REQUEST);
            }
            return this.getAllUserNotPaginated();
        }
        if (!column && !value) {
            return this.getAllUserPaginated({ page, skip, take });
        }
        return this.searchUsersWithDateColumn({
            column,
            page,
            skip,
            take,
            value,
        });
    }
};
exports.ListsUlsersService = ListsUlsersService;
exports.ListsUlsersService = ListsUlsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUsersRepository')),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], ListsUlsersService);
//# sourceMappingURL=lists.users.service.js.map