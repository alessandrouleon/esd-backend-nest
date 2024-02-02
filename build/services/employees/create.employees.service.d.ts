import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
export declare class CreateEmployeesService {
    private employeesRepository;
    constructor(employeesRepository: IEmployeesRepository);
    create(data: CreateEmployeeDto): Promise<Employees>;
}
