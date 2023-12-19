import { Injectable } from '@nestjs/common';
import ILinesRepository, {
  ILinesReturnWithPagination,
} from './lines.repository.contract';
import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import { Lines } from 'src/entities/lines.entity';
import { PrismaService } from 'src/configs/database/prisma.service';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import { Prisma } from '@prisma/client';
import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';

@Injectable()
export class LinesRepository implements ILinesRepository {
  constructor(private readonly repository: PrismaService) {}

  public async create(data: CreateLinesDto): Promise<Lines> {
    return await this.repository.lines.create({
      data: { ...data },
    });
  }
  public async update(id: string, data: UpdateLinesDto): Promise<Lines> {
    return await this.repository.lines.update({
      where: { id },
      data: { ...data },
    });
  }

  public async delete(id: string, data: UpdateLinesDto): Promise<void> {
    await this.repository.lines.update({
      where: { id },
      data: { ...data },
    });
  }

  public async findById(id: string): Promise<Lines | undefined> {
    return await this.repository.lines.findUnique({
      where: { id },
    });
  }

  public async findByCode(code: string): Promise<Lines | undefined> {
    return this.repository.lines.findUnique({
      where: { code },
    });
  }

  public async findByDescription(
    description: string,
  ): Promise<Lines | undefined> {
    return this.repository.lines.findUnique({
      where: { description },
    });
  }

  async findByUnifiedValueSearch(unifiedValue: string): Promise<Lines[]> {
    const lines = await this.repository.lines.findMany({
      where: {
        OR: [
          {
            code: { contains: unifiedValue },
            description: { contains: unifiedValue },
          },
        ],
      },
    });
    return lines;
  }

  findAll(page: any): Promise<Lines[]> {
    return this.repository.lines.findMany({
      skip: page?.skip,
      take: page?.take,
      orderBy: page?.orderBy,
    });
  }

  public async searchLinesCaseFormatDate(
    { skip, take }: PaginatedDto,
    { column, value }: ISearchWithColumn,
  ): Promise<ILinesReturnWithPagination> {
    const where: Prisma.LinesWhereInput = {
      [column]: value,
      deletedAt: null,
    };

    const result = await this.repository.lines.findMany({
      where,
      take,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const data = result;
    const total = result.length;

    return { lines: data, total };
  }

  public async findAllLinesWithPagination({
    page,
    take,
  }: PaginatedDto): Promise<ILinesReturnWithPagination> {
    const [data, total] = await Promise.all([
      this.repository.lines.findMany({
        take,
        skip: (page - 1) * take,
        orderBy: {
          createdAt: 'desc',
        },
        where: { deletedAt: null },
      }),
      this.repository.lines.count({ where: { deletedAt: null } }),
    ]);
    return { lines: data, total };
  }
}
