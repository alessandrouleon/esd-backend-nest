"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesModule = void 0;
const common_1 = require("@nestjs/common");
const lists_employees_service_1 = require("../services/employees/lists.employees.service");
const employees_controller_1 = require("../controllers/employees.controller");
const employees_repository_1 = require("../repositories/employees/employees.repository");
const create_employees_service_1 = require("../services/employees/create.employees.service");
const update_employees_service_1 = require("../services/employees/update.employees.service");
const delete_employees_service_1 = require("../services/employees/delete.employees.service");
let EmployeesModule = class EmployeesModule {
};
exports.EmployeesModule = EmployeesModule;
exports.EmployeesModule = EmployeesModule = __decorate([
    (0, common_1.Module)({
        controllers: [employees_controller_1.EmployeesController],
        exports: [
            create_employees_service_1.CreateEmployeesService,
            update_employees_service_1.UpdateEmployeesService,
            delete_employees_service_1.DeleteEmployeesService,
            lists_employees_service_1.ListsEmployeesService,
        ],
        providers: [
            create_employees_service_1.CreateEmployeesService,
            update_employees_service_1.UpdateEmployeesService,
            delete_employees_service_1.DeleteEmployeesService,
            lists_employees_service_1.ListsEmployeesService,
            {
                provide: 'IEmployeesRepository',
                useClass: employees_repository_1.EmployeesRepository,
            },
        ],
    })
], EmployeesModule);
//# sourceMappingURL=employee.module.js.map