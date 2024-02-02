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
exports.CreateUsersService = void 0;
const common_1 = require("@nestjs/common");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const bcrypt = require("bcrypt");
let CreateUsersService = class CreateUsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        const hashedUserPassword = await bcrypt.hash(data.password, Number(process.env.BCRYPTROUNDS));
        const [existsUserName, existsEmail, existsEmployeeId] = await Promise.all([
            this.usersRepository.findByUserName(data.userName),
            this.usersRepository.findByEmail(data.email),
            this.usersRepository.findByEmployeeId(data.employeeId),
        ]);
        if (existsUserName) {
            throw new common_1.HttpException(messages_helps_1.UsersMessagesHelper.EXIST_USERNAME, common_1.HttpStatus.BAD_REQUEST);
        }
        if (existsEmail) {
            throw new common_1.HttpException(messages_helps_1.UsersMessagesHelper.EXIST_EMAIL, common_1.HttpStatus.BAD_REQUEST);
        }
        if (!existsEmployeeId) {
            throw new common_1.HttpException(messages_helps_1.EmployeeMessagesHelper.ID_NOT_EXIST, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.usersRepository.create({
            ...data,
            password: hashedUserPassword,
        });
    }
};
exports.CreateUsersService = CreateUsersService;
exports.CreateUsersService = CreateUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUsersRepository')),
    __metadata("design:paramtypes", [Object])
], CreateUsersService);
//# sourceMappingURL=create.users.service.js.map