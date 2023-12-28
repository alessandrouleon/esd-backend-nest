import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
import { getUtcDate } from 'src/utils/date';
import { EmployeeMessagesHelper } from 'src/utils/helprs/messages.helps';

@Injectable()
export class DeleteEmployeesService {
  constructor(
    @Inject('IEmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  public async remove(id: string): Promise<void> {
    const data = {} as UpdateEmployeesDto;
    const line = await this.employeesRepository.findById(id);

    if (!line)
      throw new HttpException(
        EmployeeMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );

    await this.employeesRepository.delete(id, {
      deletedAt: getUtcDate(),
      ...data,
    });
  }
}
