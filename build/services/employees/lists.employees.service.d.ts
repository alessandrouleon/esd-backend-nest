import { PaginatedEmployeeDTO } from 'src/dtos/employees/paginated-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import IEmployeesRepository, { ISearchEmployeesValue } from 'src/repositories/employees/employees.repository.cantract';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
export declare class ListsEmployeesService {
    private employeesRepository;
    constructor(employeesRepository: IEmployeesRepository);
    findByUnifiedValueSearch(unifiedValue: ISearchEmployeesValue): Promise<Employees[] | undefined>;
    findAll(page: any): Promise<Employees[]>;
    private searchEmployeesWithDateColumn;
    private getAllEmployeesNotPaginated;
    private getAllEmployeesPaginated;
    getEmployees({ column, value, isPaginated }: SearchFilterTable, pageNumber: number): Promise<PaginatedEmployeeDTO | Employees[]>;
}
