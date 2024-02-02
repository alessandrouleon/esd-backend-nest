"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_employee_dto_1 = require("./create-employee.dto");
class UpdateEmployeesDto extends (0, mapped_types_1.PartialType)(create_employee_dto_1.CreateEmployeeDto) {
}
exports.UpdateEmployeesDto = UpdateEmployeesDto;
//# sourceMappingURL=update-employee.dto.js.map