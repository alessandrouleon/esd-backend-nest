import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
export declare class DeleteEmployeesService {
    private employeesRepository;
    constructor(employeesRepository: IEmployeesRepository);
    remove(id: string): Promise<void>;
}
