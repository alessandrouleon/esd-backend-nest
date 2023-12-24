import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import { Lines } from 'src/entities/lines.entity';
import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';

export interface IEmployeesReturnWithPagination {
  employees: Employees[];
  total: number;
}

export class ISearchEmployeesValue {
  unifiedValue: string;
}

export default interface IEmployeesRepository {
  create(data: CreateEmployeeDto): Promise<Employees>;
  update(id: string, data: UpdateEmployeesDto): Promise<Employees>;
  delete(id: string, data: UpdateEmployeesDto): Promise<void>;
  findById(id: string): Promise<Employees | undefined>;
  findByIdLines(id: string): Promise<Lines | undefined>;
  findByRegistration(registration: string): Promise<Employees | undefined>;
  findByUnifiedValueSearch(
    unifiedValue: ISearchEmployeesValue,
  ): Promise<Employees[] | undefined>;
  findAll(page: any): Promise<Employees[]>;
  searchEmployeesCaseFormatDate(
    parametersToPaginate: PaginatedDto,
    data: ISearchWithColumn,
  ): Promise<IEmployeesReturnWithPagination>;
  findAllEmployeesWithPagination(
    parametersToPaginate: PaginatedDto,
  ): Promise<IEmployeesReturnWithPagination>;
}
