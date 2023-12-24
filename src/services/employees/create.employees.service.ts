import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
import {
  EmployeeMessagesHelper,
  LineMessagesHelper,
} from 'src/utils/helprs/messages.helps';

@Injectable()
export class CreateEmployeesService {
  constructor(
    @Inject('IEmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}
  public async create(data: CreateEmployeeDto): Promise<Employees> {
    const [existsRegistration, existsIdLines] = await Promise.all([
      this.employeesRepository.findByRegistration(data.registration),
      this.employeesRepository.findByIdLines(data.linesId),
    ]);

    if (existsRegistration)
      throw new HttpException(
        EmployeeMessagesHelper.EXIST_REGISTRATION,
        HttpStatus.BAD_REQUEST,
      );

    if (!existsIdLines)
      throw new HttpException(
        LineMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );

    return this.employeesRepository.create(data);
  }
}
