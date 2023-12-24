import { Module } from '@nestjs/common';
import { ListsEmployeesService } from '../services/employees/lists.employees.service';
import { EmployeesController } from 'src/controllers/employees.controller';
import { EmployeesRepository } from 'src/repositories/employees/employees.repository';
import { CreateEmployeesService } from 'src/services/employees/create.employees.service';
import { UpdateEmployeesService } from 'src/services/employees/update.employees.service';
import { DeleteEmployeesService } from 'src/services/employees/delete.employees.service';

@Module({
  controllers: [EmployeesController],
  exports: [
    CreateEmployeesService,
    UpdateEmployeesService,
    DeleteEmployeesService,
    ListsEmployeesService,
  ],
  providers: [
    CreateEmployeesService,
    UpdateEmployeesService,
    DeleteEmployeesService,
    ListsEmployeesService,
    {
      provide: 'IEmployeesRepository',
      useClass: EmployeesRepository,
    },
  ],
})
export class EmployeesModule {}
