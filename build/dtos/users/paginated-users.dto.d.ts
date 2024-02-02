import { Users } from 'src/entities/users-entity';
export declare class PaginatedUsersDTO {
    users: Users[];
    total: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
}
