import ILinesRepository, { ISearchLineValue } from 'src/repositories/lines/lines.repository.contract';
import { Lines } from 'src/entities/lines.entity';
import { PaginatedLinesDTO } from 'src/dtos/lines/paginated-lines.dto';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
export declare class ListsLinesService {
    private linesRepository;
    constructor(linesRepository: ILinesRepository);
    findByUnifiedValueSearch(unifiedValue: ISearchLineValue): Promise<Lines[] | undefined>;
    findAll(page: any): Promise<Lines[]>;
    private getAllLinesNotPaginated;
    private getAllLinesPaginated;
    private searchLinesWithDateColumn;
    getLines({ column, value, isPaginated }: SearchFilterTable, pageNumber: number): Promise<PaginatedLinesDTO | Lines[]>;
}
