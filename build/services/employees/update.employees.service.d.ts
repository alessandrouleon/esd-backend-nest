import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
export declare class UpdateEmployeesService {
    private employeesRepository;
    constructor(employeesRepository: IEmployeesRepository);
    update(id: string, data: UpdateEmployeesDto): Promise<Employees>;
    private validateRegistration;
    private validateLine;
    private handleUpdateError;
}
