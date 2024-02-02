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
exports.EmployeesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../configs/database/prisma.service");
let EmployeesRepository = class EmployeesRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return await this.repository.employees.create({
            data,
        });
    }
    async update(id, data) {
        return await this.repository.employees.update({
            where: { id },
            data,
        });
    }
    async delete(id, data) {
        await this.repository.employees.update({
            where: { id },
            data,
        });
    }
    async findById(id) {
        return await this.repository.employees.findUnique({
            where: { id, deletedAt: null },
        });
    }
    async findByIdLines(id) {
        return this.repository.lines.findUnique({
            where: { id, deletedAt: null },
        });
    }
    async findByRegistration(registration) {
        return await this.repository.employees.findUnique({
            where: { registration, deletedAt: null },
        });
    }
    async findByUnifiedValueSearch({ unifiedValue, }) {
        const employee = await this.repository.employees.findMany({
            where: {
                OR: [
                    {
                        name: { contains: unifiedValue },
                    },
                    {
                        registration: { contains: unifiedValue },
                    },
                    {
                        department: { contains: unifiedValue },
                    },
                    {
                        shift: { contains: unifiedValue },
                    },
                    {
                        Line: { code: { contains: unifiedValue } },
                    },
                    {
                        Line: { stage: { contains: unifiedValue } },
                    },
                    {
                        Line: { description: { contains: unifiedValue } },
                    },
                ],
            },
            include: {
                Line: true,
            },
        });
        return employee;
    }
    async findAll(page) {
        return await this.repository.employees.findMany({
            skip: page?.skip,
            take: page?.take,
            orderBy: page?.orderBy,
            include: {
                Line: true,
            },
        });
    }
    async searchEmployeesCaseFormatDate({ skip, take }, { column, value }) {
        const result = await this.repository.employees.findMany({
            take,
            skip,
            orderBy: {
                createdAt: 'desc',
            },
            where: { [column]: value, deletedAt: null },
            include: {
                Line: true,
            },
        });
        const [data, total] = [result, result.length];
        return { employees: data, total };
    }
    async findAllEmployeesWithPagination({ page, take, }) {
        const [data, total] = await Promise.all([
            this.repository.employees.findMany({
                take,
                skip: (page - 1) * take,
                orderBy: {
                    createdAt: 'desc',
                },
                where: { deletedAt: null },
                include: {
                    Line: true,
                },
            }),
            this.repository.employees.count({ where: { deletedAt: null } }),
        ]);
        return { employees: data, total };
    }
};
exports.EmployeesRepository = EmployeesRepository;
exports.EmployeesRepository = EmployeesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeesRepository);
//# sourceMappingURL=employees.repository.js.map