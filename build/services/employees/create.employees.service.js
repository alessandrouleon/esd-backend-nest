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
exports.CreateEmployeesService = void 0;
const common_1 = require("@nestjs/common");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
let CreateEmployeesService = class CreateEmployeesService {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    async create(data) {
        const [existsRegistration, existsIdLines] = await Promise.all([
            this.employeesRepository.findByRegistration(data.registration),
            this.employeesRepository.findByIdLines(data.linesId),
        ]);
        if (existsRegistration)
            throw new common_1.HttpException(messages_helps_1.EmployeeMessagesHelper.EXIST_REGISTRATION, common_1.HttpStatus.BAD_REQUEST);
        if (!existsIdLines)
            throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.ID_NOT_EXIST, common_1.HttpStatus.BAD_REQUEST);
        return this.employeesRepository.create(data);
    }
};
exports.CreateEmployeesService = CreateEmployeesService;
exports.CreateEmployeesService = CreateEmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEmployeesRepository')),
    __metadata("design:paramtypes", [Object])
], CreateEmployeesService);
//# sourceMappingURL=create.employees.service.js.map