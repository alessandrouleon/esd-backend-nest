"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("../controllers/users.controller");
const users_repository_1 = require("../repositories/users/users.repository");
const create_users_service_1 = require("../services/users/create.users.service");
const delete_users_service_1 = require("../services/users/delete.users.service");
const lists_users_service_1 = require("../services/users/lists.users.service");
const update_users_service_1 = require("../services/users/update.users.service");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersControllers],
        exports: [
            create_users_service_1.CreateUsersService,
            update_users_service_1.UpdateUsersService,
            delete_users_service_1.DeleteUsersService,
            lists_users_service_1.ListsUlsersService,
        ],
        providers: [
            create_users_service_1.CreateUsersService,
            update_users_service_1.UpdateUsersService,
            delete_users_service_1.DeleteUsersService,
            lists_users_service_1.ListsUlsersService,
            {
                provide: 'IUsersRepository',
                useClass: users_repository_1.UsersRepository,
            },
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map