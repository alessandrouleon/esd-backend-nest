import { Employees } from '../../entities/employees.entity';
export declare class PaginatedEmployeeDTO {
    employees: Employees[];
    total: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
}
