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
exports.CreateLinesService = void 0;
const common_1 = require("@nestjs/common");
const messages_helps_1 = require("../../utils/helprs/messages.helps");
let CreateLinesService = class CreateLinesService {
    constructor(linesRepository) {
        this.linesRepository = linesRepository;
    }
    async create(data) {
        const [existCode, existDescription] = await Promise.all([
            this.linesRepository.findByCode(data.code),
            this.linesRepository.findByDescription(data.description),
        ]);
        if (existCode)
            throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.EXIST_CODE, common_1.HttpStatus.BAD_REQUEST);
        if (existDescription)
            throw new common_1.HttpException(messages_helps_1.LineMessagesHelper.EXIST_DESCRIPTION, common_1.HttpStatus.BAD_REQUEST);
        return this.linesRepository.create(data);
    }
};
exports.CreateLinesService = CreateLinesService;
exports.CreateLinesService = CreateLinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ILinesRepository')),
    __metadata("design:paramtypes", [Object])
], CreateLinesService);
//# sourceMappingURL=create.lines.service.js.map