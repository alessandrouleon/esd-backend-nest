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
exports.CreateUsersDto = void 0;
const class_validator_1 = require("class-validator");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const regex_helprs_1 = require("../../utils/helprs/regex.helprs");
class CreateUsersDto {
}
exports.CreateUsersDto = CreateUsersDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.UsersMessagesHelper.EMPTY_USERNAME }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.UsersMessagesHelper.EMPTY_PASSWORD }),
    (0, class_validator_1.Matches)(regex_helprs_1.RegExHelper.password, {
        message: messages_helps_1.UsersMessagesHelper.PASSWORD_VALID,
    }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.UsersMessagesHelper.EMPTY_EMAIL }),
    (0, class_validator_1.Matches)(regex_helprs_1.RegExHelper.emailFormat, {
        message: messages_helps_1.UsersMessagesHelper.NOT_TYPE_EMAIL,
    }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.UsersMessagesHelper.EMPTY_PERMISSION }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "permission", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/\S/, { message: messages_helps_1.UsersMessagesHelper.EMPTY_EMPLOYEE_ID }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "employeeId", void 0);
//# sourceMappingURL=create-users.dto.js.map