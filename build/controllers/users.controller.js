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
exports.UsersControllers = void 0;
const common_1 = require("@nestjs/common");
const create_users_dto_1 = require("../dtos/users/create-users.dto");
const update_users_dto_1 = require("../dtos/users/update-users.dto");
const users_repository_cantract_1 = require("../repositories/users/users.repository.cantract");
const create_users_service_1 = require("../services/users/create.users.service");
const delete_users_service_1 = require("../services/users/delete.users.service");
const lists_users_service_1 = require("../services/users/lists.users.service");
const update_users_service_1 = require("../services/users/update.users.service");
const search_table_1 = require("../utils/helprs/search-table");
let UsersControllers = class UsersControllers {
    constructor(createUsersService, updateUsersService, deleteUsersService, listUsersService) {
        this.createUsersService = createUsersService;
        this.updateUsersService = updateUsersService;
        this.deleteUsersService = deleteUsersService;
        this.listUsersService = listUsersService;
    }
    create(createUsersDto) {
        return this.createUsersService.create(createUsersDto);
    }
    update(id, updateUsersDto) {
        return this.updateUsersService.update(id, updateUsersDto);
    }
    remove(id) {
        return this.deleteUsersService.remove(id);
    }
    async findValueSearch(unifiedValue) {
        return this.listUsersService.findByUnifiedValueSearch(unifiedValue);
    }
    async findAll() {
        return this.listUsersService.findAll();
    }
    async findBySearch(page, search) {
        return this.listUsersService.gerUsers(search, page);
    }
};
exports.UsersControllers = UsersControllers;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUsersDto]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_users_dto_1.UpdateUsersDto]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersControllers.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_repository_cantract_1.ISearchUsersValue]),
    __metadata("design:returntype", Promise)
], UsersControllers.prototype, "findValueSearch", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersControllers.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/search/:page'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('page')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_table_1.SearchFilterTable]),
    __metadata("design:returntype", Promise)
], UsersControllers.prototype, "findBySearch", null);
exports.UsersControllers = UsersControllers = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [create_users_service_1.CreateUsersService,
        update_users_service_1.UpdateUsersService,
        delete_users_service_1.DeleteUsersService,
        lists_users_service_1.ListsUlsersService])
], UsersControllers);
//# sourceMappingURL=users.controller.js.map