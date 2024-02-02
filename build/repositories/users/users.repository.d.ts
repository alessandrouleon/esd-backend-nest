import IUsersRepository, { ISearchUsersValue, IUsersReturnWithPagination } from './users.repository.cantract';
import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { Employees } from 'src/entities/employees.entity';
import { Users } from 'src/entities/users-entity';
import { PaginatedDto, ISearchWithColumn } from 'src/utils/pagination';
import { PrismaService } from 'src/configs/database/prisma.service';
export declare class UsersRepository implements IUsersRepository {
    private readonly repository;
    constructor(repository: PrismaService);
    create(data: CreateUsersDto): Promise<Users>;
    update(id: string, data: UpdateUsersDto): Promise<Users>;
    delete(id: string, data: UpdateUsersDto): Promise<void>;
    findById(id: string): Promise<Users>;
    findByEmployeeId(id: string): Promise<Employees>;
    findByUserName(userName: string): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findByUnifiedValueSearch({ unifiedValue, }: ISearchUsersValue): Promise<Users[] | undefined>;
    findAll(): Promise<Users[]>;
    searchUsersCaseFormatDate({ skip, take }: PaginatedDto, { column, value }: ISearchWithColumn): Promise<IUsersReturnWithPagination>;
    findAllUsersWithPagination({ page, take, }: PaginatedDto): Promise<IUsersReturnWithPagination>;
}
