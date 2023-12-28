import { Injectable } from '@nestjs/common';
import IUsersRepository, {
  ISearchUsersValue,
  IUsersReturnWithPagination,
} from './users.repository.cantract';
import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { Employees } from 'src/entities/employees.entity';
import { Users } from 'src/entities/users-entity';
import { PaginatedDto, ISearchWithColumn } from 'src/utils/pagination';
import { PrismaService } from 'src/configs/database/prisma.service';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly repository: PrismaService) {}

  public async create(data: CreateUsersDto): Promise<Users> {
    return await this.repository.users.create({
      data,
    });
  }
  public async update(id: string, data: UpdateUsersDto): Promise<Users> {
    return await this.repository.users.update({
      where: { id },
      data,
    });
  }
  public async delete(id: string, data: UpdateUsersDto): Promise<void> {
    await this.repository.users.update({
      where: { id },
      data,
    });
  }
  public async findById(id: string): Promise<Users> {
    return await this.repository.users.findUnique({
      where: { id, deletedAt: null },
    });
  }
  public async findByEmployeeId(id: string): Promise<Employees> {
    return await this.repository.employees.findUnique({
      where: { id, deletedAt: null },
    });
  }
  public async findByUserName(userName: string): Promise<Users> {
    return await this.repository.users.findUnique({
      where: { userName, deletedAt: null },
    });
  }
  public async findByEmail(email: string): Promise<Users> {
    return await this.repository.users.findUnique({
      where: { email, deletedAt: null },
    });
  }
  public async findByUnifiedValueSearch(
    unifiedValue: ISearchUsersValue,
  ): Promise<Users[]> {
    throw new Error('Method not implemented.');
  }
  public async findAll(page: any): Promise<Users[]> {
    throw new Error('Method not implemented.');
  }
  public async searchUsersCaseFormatDate(
    parametersToPaginate: PaginatedDto,
    data: ISearchWithColumn,
  ): Promise<IUsersReturnWithPagination> {
    throw new Error('Method not implemented.');
  }
  public async findAllUsersWithPagination(
    parametersToPaginate: PaginatedDto,
  ): Promise<IUsersReturnWithPagination> {
    throw new Error('Method not implemented.');
  }
}
