import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import IEmployeesRepository from 'src/repositories/employees/employees.repository.cantract';
import {
  EmployeeMessagesHelper,
  LineMessagesHelper,
  MessageHelps,
} from 'src/utils/helprs/messages.helps';

@Injectable()
export class UpdateEmployeesService {
  constructor(
    @Inject('IEmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}
  public async update(
    id: string,
    data: UpdateEmployeesDto,
  ): Promise<Employees> {
    try {
      const employee = await this.employeesRepository.findById(id);
      if (!employee)
        throw new HttpException(
          EmployeeMessagesHelper.ID_NOT_EXIST,
          HttpStatus.BAD_REQUEST,
        );

      await Promise.all([
        this.validateRegistration(data.registration, employee.registration),
        this.validateLine(data.linesId, employee.linesId),
      ]);

      return this.employeesRepository.update(id, {
        updatedAt: new Date(),
        ...data,
      });
    } catch (error) {
      this.handleUpdateError(error);
    }
  }

  private async validateRegistration(
    newRegistration: string,
    existingRegistration: string,
  ): Promise<void> {
    if (newRegistration && newRegistration !== existingRegistration) {
      const existRegistration =
        await this.employeesRepository.findByRegistration(newRegistration);

      if (existRegistration) {
        throw new HttpException(
          EmployeeMessagesHelper.EXIST_REGISTRATION,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private async validateLine(
    newLineId: string,
    existingLineId: string,
  ): Promise<void> {
    if (newLineId && newLineId !== existingLineId) {
      const existLine = await this.employeesRepository.findByIdLines(newLineId);
      if (!existLine) {
        throw new HttpException(
          LineMessagesHelper.LINE_NOT_EXIST,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  private handleUpdateError(error: Error): never {
    if (error instanceof HttpException) {
      throw error;
    } else {
      throw new HttpException(
        MessageHelps.INTERNAL_SERVER,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
