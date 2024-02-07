import { Roles } from '../../entities/roles.entity';

export class PaginatedEmployeeDTO {
  employees: Roles[];
  total: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
