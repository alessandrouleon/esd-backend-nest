import ILinesRepository, { ILinesReturnWithPagination, ISearchLineValue } from './lines.repository.contract';
import { CreateLinesDto } from 'src/dtos/lines/create-lines.dto';
import { Lines } from 'src/entities/lines.entity';
import { PrismaService } from 'src/configs/database/prisma.service';
import { UpdateLinesDto } from 'src/dtos/lines/update-lines.dto';
import { ISearchWithColumn, PaginatedDto } from 'src/utils/pagination';
export declare class LinesRepository implements ILinesRepository {
    private readonly repository;
    constructor(repository: PrismaService);
    create(data: CreateLinesDto): Promise<Lines>;
    update(id: string, data: UpdateLinesDto): Promise<Lines>;
    delete(id: string, data: UpdateLinesDto): Promise<void>;
    findById(id: string): Promise<Lines | null>;
    findByCode(code: string): Promise<Lines | null>;
    findByDescription(description: string): Promise<Lines | undefined>;
    findByUnifiedValueSearch({ unifiedValue, }: ISearchLineValue): Promise<Lines[] | undefined>;
    findAll(page: any): Promise<Lines[]>;
    searchLinesCaseFormatDate({ skip, take }: PaginatedDto, { column, value }: ISearchWithColumn): Promise<ILinesReturnWithPagination>;
    findAllLinesWithPagination({ page, take, }: PaginatedDto): Promise<ILinesReturnWithPagination>;
}
