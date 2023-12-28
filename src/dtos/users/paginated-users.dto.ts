import { Users } from 'src/entities/users-entity';

export class PaginatedUsersDTO {
  users: Users[];
  total: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
