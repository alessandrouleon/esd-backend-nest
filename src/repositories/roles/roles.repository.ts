import { Injectable } from '@nestjs/common';
import IRolesRepository from './roles.repository.contract'; // ISearchLineValue, // IRolesReturnWithPagination,
import { CreateRolesDto } from 'src/dtos/roles/create-roles.dto';
import { Roles } from 'src/entities/roles.entity';
import { PrismaService } from 'src/configs/database/prisma.service';
import { UpdateRolesDto } from 'src/dtos/roles/update-roles.dto';
// import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';

@Injectable()
export class RolesRepository implements IRolesRepository {
  constructor(private readonly repository: PrismaService) {}

  public async create(data: CreateRolesDto): Promise<Roles> {
    return await this.repository.roles.create({ data });
  }

  public async update(id: string, data: UpdateRolesDto): Promise<Roles> {
    return await this.repository.roles.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  public async delete(id: string, data: UpdateRolesDto): Promise<void> {
    await this.repository.roles.update({
      where: { id },
      data,
    });
  }

  // public async findById(id: string): Promise<Roles | null> {
  //   return await this.repository.roles.findUnique({
  //     where: { id, deletedAt: null },
  //   });
  // }

  // public async findByDescription(
  //   description: string,
  // ): Promise<Roles | undefined> {
  //   return this.repository.roles.findUnique({
  //     where: { description },
  //   });
  // }

  // public async findByUnifiedValueSearch({
  //   unifiedValue,
  // }: ISearchLineValue): Promise<Roles[] | undefined> {
  //   const roles = await this.repository.roles.findMany({
  //     where: {
  //       OR: [
  //         {
  //           code: { contains: unifiedValue },
  //         },
  //         {
  //           description: { contains: unifiedValue },
  //         },
  //       ],
  //     },
  //   });
  //   return lines;
  // }

  public async findAll(page: any): Promise<Roles[]> {
    return await this.repository.roles.findMany({
      skip: page?.skip,
      take: page?.take,
      orderBy: page?.orderBy,
    });
  }

  // public async searchLinesCaseFormatDate(
  //   { skip, take }: PaginatedDto,
  //   { column, value }: ISearchWithColumn,
  // ): Promise<ILinesReturnWithPagination> {
  //   const result = await this.repository.lines.findMany({
  //     take,
  //     skip,
  //     orderBy: {
  //       createdAt: 'desc',
  //     },
  //     where: { [column]: value, deletedAt: null },
  //   });

  //   const [data, total] = [result, result.length];
  //   return { lines: data, total };
  // }

  // public async findAllLinesWithPagination({
  //   page,
  //   take,
  // }: PaginatedDto): Promise<ILinesReturnWithPagination> {
  //   const [data, total] = await Promise.all([
  //     this.repository.lines.findMany({
  //       take,
  //       skip: (page - 1) * take,
  //       orderBy: {
  //         createdAt: 'desc',
  //       },
  //       where: { deletedAt: null },
  //     }),
  //     this.repository.lines.count({ where: { deletedAt: null } }),
  //   ]);
  //   return { lines: data, total };
  // }
}
