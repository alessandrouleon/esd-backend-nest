import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PaginatedEmployeeDTO } from 'src/dtos/employees/paginated-employee.dto';

import { Employees } from 'src/entities/employees.entity';
import IEmployeesRepository, {
  ISearchEmployeesValue,
} from 'src/repositories/employees/employees.repository.cantract';
import { FilterTableMessagesHelper } from 'src/utils/helprs/messages.helps';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
import {
  PaginationOptions,
  PaginationOptionsSearch,
  getParametersToPaginate,
  paginateResponse,
} from 'src/utils/pagination';

@Injectable()
export class ListsEmployeesService {
  constructor(
    @Inject('IEmployeesRepository')
    private employeesRepository: IEmployeesRepository,
  ) {}

  public async findByUnifiedValueSearch(
    unifiedValue: ISearchEmployeesValue,
  ): Promise<Employees[] | undefined> {
    return this.employeesRepository.findByUnifiedValueSearch(unifiedValue);
  }

  public async findAll(page: any) {
    return await this.employeesRepository.findAll(page);
  }

  private async searchEmployeesWithDateColumn({
    value,
    take,
    skip,
    page,
    column,
  }: PaginationOptionsSearch) {
    const { employees, total } =
      await this.employeesRepository.searchEmployeesCaseFormatDate(
        { take, skip, page },
        { column, value },
      );
    const goal = paginateResponse({ total, page, take });
    return { employees, ...goal };
  }

  private async getAllEmployeesNotPaginated(page: any) {
    return await this.employeesRepository.findAll(page);
  }
  private async getAllEmployeesPaginated({
    skip,
    take,
    page,
  }: PaginationOptions) {
    const { employees, total } =
      await this.employeesRepository.findAllEmployeesWithPagination({
        page,
        take,
        skip,
      });
    const goal = paginateResponse({ total, page, take });
    return { employees, ...goal };
  }

  async getEmployees(
    { column, value, isPaginated = true }: SearchFilterTable,
    pageNumber: number,
  ): Promise<PaginatedEmployeeDTO | Employees[]> {
    const { page, skip, take } = getParametersToPaginate(pageNumber);
    if (!isPaginated) {
      if (column || value) {
        throw new HttpException(
          FilterTableMessagesHelper.NOT_EXISTS_COLUMN_AND_VALUE,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.getAllEmployeesNotPaginated(page);
    }
    if (!column && !value) {
      return this.getAllEmployeesPaginated({ page, skip, take });
    }
    return this.searchEmployeesWithDateColumn({
      column,
      page,
      skip,
      take,
      value,
    });
  }
}
