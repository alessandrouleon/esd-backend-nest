import { Injectable } from '@nestjs/common';
import ILinesRepository, {
  ILinesReturnWithPagination,
  ISearchLineValue,
} from './lines.repository.contract';
import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import { Lines } from 'src/entities/lines.entity';
import { PrismaService } from 'src/configs/database/prisma.service';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';

@Injectable()
export class LinesRepository implements ILinesRepository {
  constructor(private readonly repository: PrismaService) {}

  public async create(data: CreateLinesDto): Promise<Lines> {
    return await this.repository.lines.create({ data: { ...data } });
  }

  public async update(id: string, data: UpdateLinesDto): Promise<Lines> {
    return await this.repository.lines.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  public async delete(id: string, data: UpdateLinesDto): Promise<void> {
    await this.repository.lines.update({
      where: { id },
      data: { ...data },
    });
  }

  public async findById(id: string): Promise<Lines | null> {
    return await this.repository.lines.findUnique({
      where: { id, deletedAt: null },
    });
  }

  public async findByCode(code: string): Promise<Lines | null> {
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

  public async findByUnifiedValueSearch({
    unifiedValue,
  }: ISearchLineValue): Promise<Lines[] | undefined> {
    const lines = await this.repository.lines.findMany({
      where: {
        OR: [
          {
            code: { contains: unifiedValue },
          },
          {
            description: { contains: unifiedValue },
          },
        ],
      },
    });
    return lines;
  }

  public async findAll(page: any): Promise<Lines[]> {
    return await this.repository.lines.findMany({
      skip: page?.skip,
      take: page?.take,
      orderBy: page?.orderBy,
    });
  }

  public async searchLinesCaseFormatDate(
    { skip, take }: PaginatedDto,
    { column, value }: ISearchWithColumn,
  ): Promise<ILinesReturnWithPagination> {
    const result = await this.repository.lines.findMany({
      take,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
      where: { [column]: value, deletedAt: null },
    });

    const [data, total] = [result, result.length];
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
