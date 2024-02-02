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
exports.LinesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../configs/database/prisma.service");
let LinesRepository = class LinesRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return await this.repository.lines.create({ data });
    }
    async update(id, data) {
        return await this.repository.lines.update({
            where: { id },
            data: {
                ...data,
            },
        });
    }
    async delete(id, data) {
        await this.repository.lines.update({
            where: { id },
            data,
        });
    }
    async findById(id) {
        return await this.repository.lines.findUnique({
            where: { id, deletedAt: null },
        });
    }
    async findByCode(code) {
        return this.repository.lines.findUnique({
            where: { code },
        });
    }
    async findByDescription(description) {
        return this.repository.lines.findUnique({
            where: { description },
        });
    }
    async findByUnifiedValueSearch({ unifiedValue, }) {
        const lines = await this.repository.lines.findMany({
            where: {
                OR: [
                    {
                        code: { contains: unifiedValue },
                    },
                    {
                        description: { contains: unifiedValue },
                    },
                ],
            },
        });
        return lines;
    }
    async findAll(page) {
        return await this.repository.lines.findMany({
            skip: page?.skip,
            take: page?.take,
            orderBy: page?.orderBy,
        });
    }
    async searchLinesCaseFormatDate({ skip, take }, { column, value }) {
        const result = await this.repository.lines.findMany({
            take,
            skip,
            orderBy: {
                createdAt: 'desc',
            },
            where: { [column]: value, deletedAt: null },
        });
        const [data, total] = [result, result.length];
        return { lines: data, total };
    }
    async findAllLinesWithPagination({ page, take, }) {
        const [data, total] = await Promise.all([
            this.repository.lines.findMany({
                take,
                skip: (page - 1) * take,
                orderBy: {
                    createdAt: 'desc',
                },
                where: { deletedAt: null },
            }),
            this.repository.lines.count({ where: { deletedAt: null } }),
        ]);
        return { lines: data, total };
    }
};
exports.LinesRepository = LinesRepository;
exports.LinesRepository = LinesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LinesRepository);
//# sourceMappingURL=lines.repository.js.map