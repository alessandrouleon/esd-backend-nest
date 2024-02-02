import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { ISearchEmployeesValue } from 'src/repositories/employees/employees.repository.cantract';
import { CreateEmployeesService } from 'src/services/employees/create.employees.service';
import { DeleteEmployeesService } from 'src/services/employees/delete.employees.service';
import { ListsEmployeesService } from 'src/services/employees/lists.employees.service';
import { UpdateEmployeesService } from 'src/services/employees/update.employees.service';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
export declare class EmployeesController {
    private readonly createEmployeesService;
    private readonly updateEmployeesService;
    private readonly deleteEmployeesService;
    private readonly listsEmployeesService;
    constructor(createEmployeesService: CreateEmployeesService, updateEmployeesService: UpdateEmployeesService, deleteEmployeesService: DeleteEmployeesService, listsEmployeesService: ListsEmployeesService);
    create(createEmployeesDto: CreateEmployeeDto): Promise<import("../entities/employees.entity").Employees>;
    update(id: string, updateEmployeesDto: UpdateEmployeesDto): Promise<import("../entities/employees.entity").Employees>;
    remove(id: string): Promise<void>;
    findValueSearch(unifiedValue: ISearchEmployeesValue): Promise<import("../entities/employees.entity").Employees[]>;
    findAll(page: any): Promise<any>;
    findBySearch(page: number, search: SearchFilterTable): Promise<import("../dtos/employees/paginated-employee.dto").PaginatedEmployeeDTO | import("../entities/employees.entity").Employees[]>;
}
