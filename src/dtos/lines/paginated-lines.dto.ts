import { Lines } from '../../entities/lines.entity';

export class PaginatedLinesDTO {
  lines: Lines[];
  total: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
