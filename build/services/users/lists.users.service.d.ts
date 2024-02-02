import { PaginatedUsersDTO } from 'src/dtos/users/paginated-users.dto';
import { Users } from 'src/entities/users-entity';
import { UsersRepository } from 'src/repositories/users/users.repository';
import { ISearchUsersValue } from 'src/repositories/users/users.repository.cantract';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
export declare class ListsUlsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    findByUnifiedValueSearch(unifiedValue: ISearchUsersValue): Promise<{
        id: string;
        userName: string;
        email: string;
        permission: string;
        employeeId: string;
        createdAt: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }[]>;
    findAll(): Promise<{
        id: string;
        userName: string;
        email: string;
        permission: string;
        employeeId: string;
        createdAt: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }[]>;
    private getAllUserNotPaginated;
    private searchUsersWithDateColumn;
    private getAllUserPaginated;
    gerUsers({ column, value, isPaginated }: SearchFilterTable, pageNumber: number): Promise<PaginatedUsersDTO | Users[]>;
}
