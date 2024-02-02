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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeDto = void 0;
const class_validator_1 = require("class-validator");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
class CreateEmployeeDto {
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.EmployeeMessagesHelper.EMPTY_NAME }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.EmployeeMessagesHelper.EMPTY_REGISTRATION }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "registration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.EmployeeMessagesHelper.EMPTY_DEPARTMENT }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.EmployeeMessagesHelper.EMPTY_SHIFT }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "shift", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.EmployeeMessagesHelper.EMPTY_SHIFT }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "linesId", void 0);
//# sourceMappingURL=create-employee.dto.js.map