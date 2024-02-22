import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { ISearchEmployeesValue } from 'src/repositories/employees/employees.repository.cantract';
import { CreateEmployeesService } from 'src/services/employees/create.employees.service';
import { DeleteEmployeesService } from 'src/services/employees/delete.employees.service';
import { ListsEmployeesService } from 'src/services/employees/lists.employees.service';
import { UpdateEmployeesService } from 'src/services/employees/update.employees.service';
import { SearchFilterTable } from 'src/utils/helprs/search-table';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly createEmployeesService: CreateEmployeesService,
    private readonly updateEmployeesService: UpdateEmployeesService,
    private readonly deleteEmployeesService: DeleteEmployeesService,
    private readonly listsEmployeesService: ListsEmployeesService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createEmployeesDto: CreateEmployeeDto) {
    return this.createEmployeesService.create(createEmployeesDto);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeesDto: UpdateEmployeesDto,
  ) {
    return this.updateEmployeesService.update(id, updateEmployeesDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteEmployeesService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Get('search')
  async findValueSearch(@Query() unifiedValue: ISearchEmployeesValue) {
    return this.listsEmployeesService.findByUnifiedValueSearch(unifiedValue);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Query() page: any): Promise<any> {
    return this.listsEmployeesService.findAll(page);
  }

  @UseGuards(AuthGuard)
  @Post('search/:page?')
  @HttpCode(200)
  async findBySearch(
    @Param('page') page: number,
    @Body() search: SearchFilterTable,
  ) {
    return this.listsEmployeesService.getEmployees(search, page);
  }
}
