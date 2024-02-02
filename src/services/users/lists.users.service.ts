import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PaginatedUsersDTO } from 'src/dtos/users/paginated-users.dto';
import { Users } from 'src/entities/users-entity';
import { UsersRepository } from 'src/repositories/users/users.repository';
import { ISearchUsersValue } from 'src/repositories/users/users.repository.cantract';
import { FilterTableMessagesHelper } from 'src/utils/helprs/messages.helps';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
import {
  PaginationOptions,
  PaginationOptionsSearch,
  getParametersToPaginate,
  paginateResponse,
} from 'src/utils/pagination';

@Injectable()
export class ListsUlsersService {
  constructor(
    @Inject('IUsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  public async findByUnifiedValueSearch(unifiedValue: ISearchUsersValue) {
    const user =
      await this.usersRepository.findByUnifiedValueSearch(unifiedValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return user.map(({ password, ...rest }) => rest);
  }

  public async findAll() {
    const users = await this.usersRepository.findAll();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return users.map(({ password, ...rest }) => rest);
  }

  private async getAllUserNotPaginated() {
    return await this.usersRepository.findAll();
  }

  private async searchUsersWithDateColumn({
    value,
    take,
    skip,
    page,
    column,
  }: PaginationOptionsSearch) {
    const { users, total } =
      await this.usersRepository.searchUsersCaseFormatDate(
        { take, skip, page },
        { column, value },
      );
    const goal = paginateResponse({ total, page, take });
    return { users, ...goal };
  }

  private async getAllUserPaginated({ skip, take, page }: PaginationOptions) {
    const { users, total } =
      await this.usersRepository.findAllUsersWithPagination({
        skip,
        take,
        page,
      });
    const goal = paginateResponse({ total, page, take });
    return { users, ...goal };
  }

  public async gerUsers(
    { column, value, isPaginated = true }: SearchFilterTable,
    pageNumber: number,
  ): Promise<PaginatedUsersDTO | Users[]> {
    const { skip, take, page } = getParametersToPaginate(pageNumber);
    if (!isPaginated) {
      if (column || value) {
        throw new HttpException(
          FilterTableMessagesHelper.NOT_EXISTS_COLUMN_AND_VALUE,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.getAllUserNotPaginated();
    }
    if (!column && !value) {
      return this.getAllUserPaginated({ page, skip, take });
    }
    return this.searchUsersWithDateColumn({
      column,
      page,
      skip,
      take,
      value,
    });
  }
}
