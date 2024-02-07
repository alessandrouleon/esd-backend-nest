import { CreateRolesDto } from 'src/dtos/roles/create-roles.dto';
import { UpdateRolesDto } from 'src/dtos/roles/update-roles.dto';
import { Roles } from 'src/entities/roles.entity';
// import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';

export interface IRolesReturnWithPagination {
  Roles: Roles[];
  total: number;
}
export class ISearchLineValue {
  unifiedValue: string;
}

export default interface IRolesRepository {
  create(data: CreateRolesDto): Promise<Roles>;
  update(id: string, data: UpdateRolesDto): Promise<Roles>;
  delete(id: string, data: UpdateRolesDto): Promise<void>;
  // findById(id: string): Promise<Roles | null>;
  // findByCode(code: string): Promise<Roles | null>;
  // findByDescription(description: string): Promise<Roles | undefined>;
  // findByUnifiedValueSearch(
  //   unifiedValue: ISearchLineValue,
  // ): Promise<Roles[] | undefined>;
  findAll(page: any): Promise<Roles[]>;
  // searchRolesCaseFormatDate(
  //   parametersToPaginate: PaginatedDto,
  //   data: ISearchWithColumn,
  // ): Promise<IRolesReturnWithPagination>;
  // findAllRolesWithPagination(
  //   parametersToPaginate: PaginatedDto,
  // ): Promise<IRolesReturnWithPagination>;
}
