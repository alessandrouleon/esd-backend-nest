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
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const create_employee_dto_1 = require("../dtos/employees/create-employee.dto");
const update_employee_dto_1 = require("../dtos/employees/update-employee.dto");
const employees_repository_cantract_1 = require("../repositories/employees/employees.repository.cantract");
const create_employees_service_1 = require("../services/employees/create.employees.service");
const delete_employees_service_1 = require("../services/employees/delete.employees.service");
const lists_employees_service_1 = require("../services/employees/lists.employees.service");
const update_employees_service_1 = require("../services/employees/update.employees.service");
const search_table_1 = require("../utils/helprs/search-table");
let EmployeesController = class EmployeesController {
    constructor(createEmployeesService, updateEmployeesService, deleteEmployeesService, listsEmployeesService) {
        this.createEmployeesService = createEmployeesService;
        this.updateEmployeesService = updateEmployeesService;
        this.deleteEmployeesService = deleteEmployeesService;
        this.listsEmployeesService = listsEmployeesService;
    }
    create(createEmployeesDto) {
        return this.createEmployeesService.create(createEmployeesDto);
    }
    update(id, updateEmployeesDto) {
        return this.updateEmployeesService.update(id, updateEmployeesDto);
    }
    remove(id) {
        return this.deleteEmployeesService.remove(id);
    }
    async findValueSearch(unifiedValue) {
        return this.listsEmployeesService.findByUnifiedValueSearch(unifiedValue);
    }
    async findAll(page) {
        return this.listsEmployeesService.findAll(page);
    }
    async findBySearch(page, search) {
        return this.listsEmployeesService.getEmployees(search, page);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_dto_1.UpdateEmployeesDto]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employees_repository_cantract_1.ISearchEmployeesValue]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findValueSearch", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('search/:page?'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('page')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, search_table_1.SearchFilterTable]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findBySearch", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [create_employees_service_1.CreateEmployeesService,
        update_employees_service_1.UpdateEmployeesService,
        delete_employees_service_1.DeleteEmployeesService,
        lists_employees_service_1.ListsEmployeesService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map