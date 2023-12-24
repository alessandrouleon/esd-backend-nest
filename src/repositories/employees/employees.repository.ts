import { Injectable } from '@nestjs/common';
import IEmployeesRepository, {
  IEmployeesReturnWithPagination,
  ISearchEmployeesValue,
} from './employees.repository.cantract';
import { PrismaService } from 'src/configs/database/prisma.service';
import { CreateEmployeeDto } from 'src/dtos/employees/create-employee.dto';
import { UpdateEmployeesDto } from 'src/dtos/employees/update-employee.dto';
import { Employees } from 'src/entities/employees.entity';
import { PaginatedDto, ISearchWithColumn } from 'src/utils/pagination';
import { Lines } from 'src/entities/lines.entity';

@Injectable()
export class EmployeesRepository implements IEmployeesRepository {
  constructor(private readonly repository: PrismaService) {}

  public async create(data: CreateEmployeeDto): Promise<Employees> {
    return await this.repository.employees.create({
      data: { ...data },
    });
  }

  public async update(
    id: string,
    data: UpdateEmployeesDto,
  ): Promise<Employees> {
    return await this.repository.employees.update({
      where: { id },
      data,
    });
  }

  public async delete(id: string, data: UpdateEmployeesDto): Promise<void> {
    await this.repository.employees.update({
      where: { id },
      data: { ...data },
    });
  }

  public async findById(id: string): Promise<Employees> {
    return await this.repository.employees.findUnique({
      where: { id, deletedAt: null },
    });
  }

  public async findByIdLines(id: string): Promise<Lines> {
    return this.repository.lines.findUnique({
      where: { id, deletedAt: null },
    });
  }

  public async findByRegistration(
    registration: string,
  ): Promise<Employees | undefined> {
    return await this.repository.employees.findUnique({
      where: { registration, deletedAt: null },
    });
  }

  public async findByUnifiedValueSearch({
    unifiedValue,
  }: ISearchEmployeesValue): Promise<Employees[] | undefined> {
    const employee = await this.repository.employees.findMany({
      where: {
        OR: [
          {
            name: { contains: unifiedValue },
          },
          {
            registration: { contains: unifiedValue },
          },
          {
            department: { contains: unifiedValue },
          },
          {
            shift: { contains: unifiedValue },
          },
          {
            Line: { code: { contains: unifiedValue } },
          },
          {
            Line: { stage: { contains: unifiedValue } },
          },
          {
            Line: { description: { contains: unifiedValue } },
          },
        ],
      },
      include: {
        Line: true,
      },
    });
    return employee;
  }

  public async findAll(page: any): Promise<Employees[]> {
    return await this.repository.employees.findMany({
      skip: page?.skip,
      take: page?.take,
      orderBy: page?.orderBy,
      include: {
        Line: true,
      },
    });
  }

  public async searchEmployeesCaseFormatDate(
    { skip, take }: PaginatedDto,
    { column, value }: ISearchWithColumn,
  ): Promise<IEmployeesReturnWithPagination> {
    const result = await this.repository.employees.findMany({
      take,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
      where: { [column]: value, deletedAt: null },
      include: {
        Line: true,
      },
    });

    const [data, total] = [result, result.length];
    return { employees: data, total };
  }

  public async findAllEmployeesWithPagination({
    page,
    take,
  }: PaginatedDto): Promise<IEmployeesReturnWithPagination> {
    const [data, total] = await Promise.all([
      this.repository.employees.findMany({
        take,
        skip: (page - 1) * take,
        orderBy: {
          createdAt: 'desc',
        },
        where: { deletedAt: null },
        include: {
          Line: true,
        },
      }),
      this.repository.employees.count({ where: { deletedAt: null } }),
    ]);
    return { employees: data, total };
  }
}
