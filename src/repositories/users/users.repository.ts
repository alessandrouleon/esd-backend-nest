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
  public async findByUnifiedValueSearch({
    unifiedValue,
  }: ISearchUsersValue): Promise<Users[] | undefined> {
    const user = await this.repository.users.findMany({
      where: {
        OR: [
          {
            userName: { contains: unifiedValue },
          },
          {
            email: { contains: unifiedValue },
          },
          {
            permission: { contains: unifiedValue },
          },
          {
            Employee: { name: { contains: unifiedValue } },
          },
          {
            Employee: { registration: { contains: unifiedValue } },
          },
          {
            Employee: { department: { contains: unifiedValue } },
          },
          {
            Employee: { shift: { contains: unifiedValue } },
          },
        ],
      },
      include: {
        Employee: true,
      },
    });
    return user;
  }
  public async findAll(): Promise<Users[]> {
    return await this.repository.users.findMany({
      select: {
        id: true,
        userName: true,
        email: true,
        permission: true,
        employeeId: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        password: true,
        Employee: {
          select: {
            id: true,
            name: true,
            registration: true,
            department: true,
            shift: true,
            linesId: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
          },
        },
      },
    });
  }

  public async searchUsersCaseFormatDate(
    { skip, take }: PaginatedDto,
    { column, value }: ISearchWithColumn,
  ): Promise<IUsersReturnWithPagination> {
    const user = await this.repository.users.findMany({
      take,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        userName: true,
        email: true,
        permission: true,
        employeeId: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        password: true,
        Employee: {
          select: {
            id: true,
            name: true,
            registration: true,
            department: true,
            shift: true,
            linesId: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
          },
        },
      },
      where: { [column]: value, deletedAt: null },
    });
    const [data, total] = [user, user.length];

    return { users: data, total };
  }

  public async findAllUsersWithPagination({
    page,
    take,
  }: PaginatedDto): Promise<IUsersReturnWithPagination> {
    const [data, total] = await Promise.all([
      this.repository.users.findMany({
        take,
        skip: (page - 1) * take,
        orderBy: {
          createdAt: 'desc',
        },
        where: { deletedAt: null },
      }),
      this.repository.users.count({ where: { deletedAt: null } }),
    ]);
    return { users: data, total };
  }
}
