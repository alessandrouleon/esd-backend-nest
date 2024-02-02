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
exports.UpdateEmployeesService = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../utils/date");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
let UpdateEmployeesService = class UpdateEmployeesService {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    async update(id, data) {
        try {
            const employee = await this.employeesRepository.findById(id);
            if (!employee)
                throw new common_1.HttpException(messages_helps_1.EmployeeMessagesHelper.ID_NOT_EXIST, common_1.HttpStatus.BAD_REQUEST);
            await Promise.all([
                this.validateRegistration(data.registration, employee.registration),
                this.validateLine(data.linesId, employee.linesId),
            ]);
            return this.employeesRepository.update(id, {
                updatedAt: (0, date_1.getUtcDate)(),
                ...data,
            });
        }
        catch (error) {
            this.handleUpdateError(error);
        }
    }
    async validateRegistration(newRegistration, existingRegistration) {
        if (newRegistration && newRegistration !== existingRegistration) {
            const existRegistration = await this.employeesRepository.findByRegistration(newRegistration);
            if (existRegistration) {
                throw new common_1.HttpException(messages_helps_1.EmployeeMessagesHelper.EXIST_REGISTRATION, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async validateLine(newLineId, existingLineId) {
        if (newLineId && newLineId !== existingLineId) {
            const existLine = await this.employeesRepository.findByIdLines(newLineId);
            if (!existLine) {
                throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.LINE_NOT_EXIST, common_1.HttpStatus.BAD_REQUEST);
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
exports.UpdateEmployeesService = UpdateEmployeesService;
exports.UpdateEmployeesService = UpdateEmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IEmployeesRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateEmployeesService);
//# sourceMappingURL=update.employees.service.js.map