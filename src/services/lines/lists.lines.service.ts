import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import ILinesRepository, {
  ISearchLineValue,
} from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
import { FilterTableMessagesHelper } from 'src/utils/helprs/messages.helps';
import {
  PaginationOptions,
  PaginationOptionsSearch,
  getParametersToPaginate,
  paginateResponse,
} from 'src/utils/pagination';
import { PaginatedLinesDTO } from 'src/dtos/lines/paginated-lines.dto';
import { SearchFilterTable } from 'src/utils/helprs/search-table';

@Injectable()
export class ListsLinesService {
  constructor(
    @Inject('ILinesRepository')
    private linesRepository: ILinesRepository,
  ) {}

  public async findByUnifiedValueSearch(
    unifiedValue: ISearchLineValue,
  ): Promise<Lines[] | undefined> {
    return await this.linesRepository.findByUnifiedValueSearch(unifiedValue);
  }

  public async findAll(page: any) {
    return this.linesRepository.findAll(page);
  }

  private async getAllLinesNotPaginated(page: any) {
    return this.linesRepository.findAll(page);
  }

  private async getAllLinesPaginated({ skip, take, page }: PaginationOptions) {
    const { lines, total } =
      await this.linesRepository.findAllLinesWithPagination({
        page,
        take,
        skip,
      });

    const goal = paginateResponse({ total, page, take });
    return { lines, ...goal };
  }

  private async searchLinesWithDateColumn({
    value,
    take,
    skip,
    page,
    column,
  }: PaginationOptionsSearch) {
    const { lines, total } =
      await this.linesRepository.searchLinesCaseFormatDate(
        { take, skip, page },
        { column, value },
      );

    const goal = paginateResponse({ total, page, take });
    return { lines, ...goal };
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
