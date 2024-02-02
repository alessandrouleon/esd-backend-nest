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
exports.UpdateLinesService = void 0;
const common_1 = require("@nestjs/common");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
const date_1 = require("../../utils/date");
let UpdateLinesService = class UpdateLinesService {
    constructor(linesRepository) {
        this.linesRepository = linesRepository;
    }
    async update(id, data) {
        try {
            const lines = await this.linesRepository.findById(id);
            if (!lines) {
                throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.ID_NOT_EXIST, common_1.HttpStatus.NOT_FOUND);
            }
            await Promise.all([
                this.validateCode(data.code, lines.code),
                this.validateDescription(data.description, lines.description),
            ]);
            const response = this.linesRepository.update(id, {
                updatedAt: (0, date_1.getUtcDate)(),
                ...data,
            });
            return response;
        }
        catch (error) {
            this.handleUpdateError(error);
        }
    }
    async validateCode(newCode, existingCode) {
        if (newCode && newCode !== existingCode) {
            const existCode = await this.linesRepository.findByCode(newCode);
            if (existCode) {
                throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.EXIST_CODE, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async validateDescription(newDescription, existingDescription) {
        if (newDescription && newDescription !== existingDescription) {
            const existDescription = await this.linesRepository.findByDescription(newDescription);
            if (existDescription) {
                throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.EXIST_DESCRIPTION, common_1.HttpStatus.BAD_REQUEST);
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
exports.UpdateLinesService = UpdateLinesService;
exports.UpdateLinesService = UpdateLinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ILinesRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateLinesService);
//# sourceMappingURL=update.lines.service.js.map