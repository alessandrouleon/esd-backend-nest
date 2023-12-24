import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
import { EmployeeMessagesHelper } from 'src/utils/helprs/messages.helps';

@Injectable()
export class DeleteEmployeesService {
  constructor(
    @Inject('IEmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  public async remove(id: string): Promise<void> {
    const line = await this.employeesRepository.findById(id);

    if (!line)
      throw new HttpException(
        EmployeeMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );

    await this.employeesRepository.delete(id, {
      deletedAt: new Date(),
      ...line,
    });
  }
}
