import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import { Lines } from 'src/entities/lines.entity';
import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';

export interface ILinesReturnWithPagination {
  lines: Lines[];
  total: number;
}

export default interface ILinesRepository {
  create(data: CreateLinesDto): Promise<Lines>;
  update(id: string, data: UpdateLinesDto): Promise<Lines>;
  delete(id: string, data: UpdateLinesDto): Promise<void>;
  findById(id: string): Promise<Lines | undefined>;
  findByCode(code: string): Promise<Lines | undefined>;
  findByDescription(description: string): Promise<Lines | undefined>;
  findAll(page: any): Promise<Lines[]>;
  searchLinesCaseFormatDate(
    parametersToPaginate: PaginatedDto,
    data: ISearchWithColumn,
  ): Promise<ILinesReturnWithPagination>;
  findAllLinesWithPagination(
    parametersToPaginate: PaginatedDto,
  ): Promise<ILinesReturnWithPagination>;
}
