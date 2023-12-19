import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import ILinesRepository from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
import {
  FilterTableMessagesHelper,
  LineMessagesHelper,
} from 'src/utils/helprs/messages.helps';
import {
  getParametersToPaginate,
  paginateResponse,
} from 'src/utils/pagination';
import { PaginatedLinesDTO } from 'src/dtos/lines/paginated-lines.dto';
import { SearchFilterTable } from 'src/utils/helprs/search-table';

@Injectable()
export class LinesService {
  constructor(
    @Inject('ILinesRepository')
    private linesService: ILinesRepository,
  ) {}
  async create(data: CreateLinesDto): Promise<Lines> {
    const existCode = await this.linesService.findByCode(data.code);
    const existDescription = await this.linesService.findByDescription(
      data.description,
    );

    if (existCode)
      throw new HttpException(
        LineMessagesHelper.EXIST_CODE,
        HttpStatus.BAD_REQUEST,
      );

    if (existDescription)
      throw new HttpException(
        LineMessagesHelper.EXIST_DESCRIPTION,
        HttpStatus.BAD_REQUEST,
      );

    const lines = await this.linesService.create(data);
    return lines;
  }

  public async update(id: string, data: UpdateLinesDto): Promise<Lines> {
    const existLines = await this.linesService.findById(id);
    const existCode = await this.linesService.findByCode(data.code);
    const existDescription = await this.linesService.findByDescription(
      data.description,
    );

    if (!existLines)
      throw new HttpException(
        LineMessagesHelper.ID_NOT_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    if (existCode)
      throw new HttpException(
        LineMessagesHelper.EXIST_CODE,
        HttpStatus.BAD_REQUEST,
      );

    if (existDescription)
      throw new HttpException(
        LineMessagesHelper.EXIST_DESCRIPTION,
        HttpStatus.BAD_REQUEST,
      );

    Object.assign(existLines, {
      updatedAt: new Date(),
      ...data,
    });

    return await this.linesService.update(id, existLines);
  }

  public async remove(id: string) {
    const existLines = await this.linesService.findById(id);
    if (!existLines)
      throw new HttpException(
        LineMessagesHelper.ID_NOT_EXIST_FOR_DELETED,
        HttpStatus.BAD_REQUEST,
      );
    Object.assign(existLines, {
      deletedAt: new Date(),
    });

    return this.linesService.delete(id, existLines);
  }

  findAll(page: any) {
    return this.linesService.findAll(page);
  }

  private async getAllLinesNotPaginated(page: any) {
    return this.linesService.findAll(page);
  }

  private async getAllLinesPaginated({
    skip,
    take,
    page,
  }: {
    skip: number;
    take: number;
    page: number;
  }) {
    const { lines, total } = await this.linesService.findAllLinesWithPagination(
      { page, take, skip },
    );

    const meta = paginateResponse({ total, page, take });

    return { lines, ...meta };
  }

  private async searchLinesWithDateColumn({
    value,
    take,
    skip,
    page,
    column,
  }: {
    value: string;
    take: number;
    page: number;
    skip: number;
    column: string;
  }) {
    const { lines, total } = await this.linesService.searchLinesCaseFormatDate(
      {
        take,
        skip,
        page,
      },
      { column, value },
    );

    const meta = paginateResponse({ total, page, take });

    return { lines, ...meta };
  }

  async getLines(
    { column, value, isPaginated = true }: SearchFilterTable,
    pageNumber: number,
  ): Promise<PaginatedLinesDTO | Lines[]> {
    const { page, skip, take } = getParametersToPaginate(pageNumber);

    if (!isPaginated) {
      if (column || value) {
        throw new HttpException(
          FilterTableMessagesHelper.NOT_EXISTS_COLUMN_AND_VALUE,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.getAllLinesNotPaginated(page);
    }

    if (!column && !value) {
      return this.getAllLinesPaginated({ page, skip, take });
    }

    return this.searchLinesWithDateColumn({
      column,
      page,
      skip,
      take,
      value,
    });
  }
}
