import { CreateUsersDto } from 'src/dtos/users/create-users.dto';
import { UpdateUsersDto } from 'src/dtos/users/update-users.dto';
import { Users } from 'src/entities/users-entity';
import { Employees } from 'src/entities/employees.entity';
import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';
export interface IUsersReturnWithPagination {
    users: Users[];
    total: number;
}
export declare class ISearchUsersValue {
    unifiedValue: string;
}
export default interface IUsersRepository {
    create(data: CreateUsersDto): Promise<Users>;
    update(id: string, data: UpdateUsersDto): Promise<Users>;
    delete(id: string, data: UpdateUsersDto): Promise<void>;
    findById(id: string): Promise<Users | undefined>;
    findByEmployeeId(id: string): Promise<Employees | undefined>;
    findByUserName(userName: string): Promise<Users | undefined>;
    findByEmail(email: string): Promise<Users | undefined>;
    findByUnifiedValueSearch(unifiedValue: ISearchUsersValue): Promise<Users[] | undefined>;
    findAll(): Promise<Users[]>;
    searchUsersCaseFormatDate(parametersToPaginate: PaginatedDto, data: ISearchWithColumn): Promise<IUsersReturnWithPagination>;
    findAllUsersWithPagination(parametersToPaginate: PaginatedDto): Promise<IUsersReturnWithPagination>;
}
