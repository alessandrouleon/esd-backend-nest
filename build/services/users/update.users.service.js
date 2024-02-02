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
exports.UpdateUsersService = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../utils/date");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const bcrypt = require("bcrypt");
let UpdateUsersService = class UpdateUsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async update(id, data) {
        try {
            const hashedUserPassword = await bcrypt.hash(data.password, Number(process.env.BCRYPTROUNDS));
            const user = await this.usersRepository.findById(id);
            if (!user)
                throw new common_1.HttpException(messages_helps_1.UsersMessagesHelper.ID_NOT_EXIST, common_1.HttpStatus.BAD_REQUEST);
            await Promise.all([
                this.validateUserName(data.userName, user.userName),
                this.validateEmail(data.email, user.email),
                this.validateEmployee(data.employeeId, user.employeeId),
            ]);
            return this.usersRepository.update(id, {
                ...data,
                updatedAt: (0, date_1.getUtcDate)(),
                password: hashedUserPassword,
            });
        }
        catch (error) {
            this.handleUpdateError(error);
        }
    }
    async validateUserName(newUserName, existingUserName) {
        if (newUserName && newUserName !== existingUserName) {
            const existUserName = await this.usersRepository.findByUserName(newUserName);
            if (existUserName) {
                throw new common_1.HttpException(messages_helps_1.UsersMessagesHelper.EXIST_USERNAME, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async validateEmail(newEmail, existingEmail) {
        if (newEmail && newEmail !== existingEmail) {
            const existEmail = await this.usersRepository.findByEmail(newEmail);
            if (existEmail) {
                throw new common_1.HttpException(messages_helps_1.UsersMessagesHelper.EXIST_EMAIL, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async validateEmployee(newEmployeeId, existingEmployeeId) {
        if (newEmployeeId && newEmployeeId !== existingEmployeeId) {
            const existEMployeeId = await this.usersRepository.findByEmployeeId(newEmployeeId);
            if (!existEMployeeId) {
                throw new common_1.HttpException(messages_helps_1.EmployeeMessagesHelper.ID_NOT_EXIST, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    handleUpdateError(error) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        else {
            throw new common_1.HttpException(messages_helps_1.MessageHelps.INTERNAL_SERVER, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UpdateUsersService = UpdateUsersService;
exports.UpdateUsersService = UpdateUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUsersRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateUsersService);
//# sourceMappingURL=update.users.service.js.map