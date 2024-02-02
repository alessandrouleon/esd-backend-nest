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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../configs/database/prisma.service");
let UsersRepository = class UsersRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return await this.repository.users.create({
            data,
        });
    }
    async update(id, data) {
        return await this.repository.users.update({
            where: { id },
            data,
        });
    }
    async delete(id, data) {
        await this.repository.users.update({
            where: { id },
            data,
        });
    }
    async findById(id) {
        return await this.repository.users.findUnique({
            where: { id, deletedAt: null },
        });
    }
    async findByEmployeeId(id) {
        return await this.repository.employees.findUnique({
            where: { id, deletedAt: null },
        });
    }
    async findByUserName(userName) {
        return await this.repository.users.findUnique({
            where: { userName, deletedAt: null },
        });
    }
    async findByEmail(email) {
        return await this.repository.users.findUnique({
            where: { email, deletedAt: null },
        });
    }
    async findByUnifiedValueSearch({ unifiedValue, }) {
        const user = await this.repository.users.findMany({
            where: {
                OR: [
                    {
                        userName: { contains: unifiedValue },
                    },
                    {
                        email: { contains: unifiedValue },
                    },
                    {
                        permission: { contains: unifiedValue },
                    },
                    {
                        Employee: { name: { contains: unifiedValue } },
                    },
                    {
                        Employee: { registration: { contains: unifiedValue } },
                    },
                    {
                        Employee: { department: { contains: unifiedValue } },
                    },
                    {
                        Employee: { shift: { contains: unifiedValue } },
                    },
                ],
            },
            include: {
                Employee: true,
            },
        });
        return user;
    }
    async findAll() {
        return await this.repository.users.findMany({
            select: {
                id: true,
                userName: true,
                email: true,
                permission: true,
                employeeId: true,
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
                password: true,
                Employee: {
                    select: {
                        id: true,
                        name: true,
                        registration: true,
                        department: true,
                        shift: true,
                        linesId: true,
                        createdAt: true,
                        updatedAt: true,
                        deletedAt: true,
                    },
                },
            },
        });
    }
    async searchUsersCaseFormatDate({ skip, take }, { column, value }) {
        const user = await this.repository.users.findMany({
            take,
            skip,
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                userName: true,
                email: true,
                permission: true,
                employeeId: true,
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
                password: true,
                Employee: {
                    select: {
                        id: true,
                        name: true,
                        registration: true,
                        department: true,
                        shift: true,
                        linesId: true,
                        createdAt: true,
                        updatedAt: true,
                        deletedAt: true,
                    },
                },
            },
            where: { [column]: value, deletedAt: null },
        });
        const [data, total] = [user, user.length];
        return { users: data, total };
    }
    async findAllUsersWithPagination({ page, take, }) {
        const [data, total] = await Promise.all([
            this.repository.users.findMany({
                take,
                skip: (page - 1) * take,
                orderBy: {
                    createdAt: 'desc',
                },
                where: { deletedAt: null },
            }),
            this.repository.users.count({ where: { deletedAt: null } }),
        ]);
        return { users: data, total };
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map