import IEmployeesRepository, { IEmployeesReturnWithPagination, ISearchEmployeesValue } from './employees.repository.cantract';
import { PrismaService } from 'src/configs/database/prisma.service';
import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import { PaginatedDto, ISearchWithColumn } from 'src/utils/pagination';
import { Lines } from 'src/entities/lines.entity';
export declare class EmployeesRepository implements IEmployeesRepository {
    private readonly repository;
    constructor(repository: PrismaService);
    create(data: CreateEmployeeDto): Promise<Employees>;
    update(id: string, data: UpdateEmployeesDto): Promise<Employees>;
    delete(id: string, data: UpdateEmployeesDto): Promise<void>;
    findById(id: string): Promise<Employees>;
    findByIdLines(id: string): Promise<Lines>;
    findByRegistration(registration: string): Promise<Employees | undefined>;
    findByUnifiedValueSearch({ unifiedValue, }: ISearchEmployeesValue): Promise<Employees[] | undefined>;
    findAll(page: any): Promise<Employees[]>;
    searchEmployeesCaseFormatDate({ skip, take }: PaginatedDto, { column, value }: ISearchWithColumn): Promise<IEmployeesReturnWithPagination>;
    findAllEmployeesWithPagination({ page, take, }: PaginatedDto): Promise<IEmployeesReturnWithPagination>;
}
