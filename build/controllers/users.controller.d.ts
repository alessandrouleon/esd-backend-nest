import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { ISearchUsersValue } from 'src/repositories/users/users.repository.cantract';
import { CreateUsersService } from 'src/services/users/create.users.service';
import { DeleteUsersService } from 'src/services/users/delete.users.service';
import { ListsUlsersService } from 'src/services/users/lists.users.service';
import { UpdateUsersService } from 'src/services/users/update.users.service';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
export declare class UsersControllers {
    private readonly createUsersService;
    private readonly updateUsersService;
    private readonly deleteUsersService;
    private readonly listUsersService;
    constructor(createUsersService: CreateUsersService, updateUsersService: UpdateUsersService, deleteUsersService: DeleteUsersService, listUsersService: ListsUlsersService);
    create(createUsersDto: CreateUsersDto): Promise<import("../entities/users-entity").Users>;
    update(id: string, updateUsersDto: UpdateUsersDto): Promise<import("../entities/users-entity").Users>;
    remove(id: string): Promise<void>;
    findValueSearch(unifiedValue: ISearchUsersValue): Promise<{
        id: string;
        userName: string;
        email: string;
        permission: string;
        employeeId: string;
        createdAt: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }[]>;
    findAll(): Promise<any>;
    findBySearch(page: number, search: SearchFilterTable): Promise<import("../entities/users-entity").Users[] | import("../dtos/users/paginated-users.dto").PaginatedUsersDTO>;
}
