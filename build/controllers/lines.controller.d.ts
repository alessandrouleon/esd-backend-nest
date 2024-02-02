import { ListsLinesService } from '../services/lines/lists.lines.service';
import { CreateLinesDto } from '../dtos/lines/create-lines.dto';
import { UpdateLinesDto } from '../dtos/lines/update-lines.dto';
import { SearchFilterTable } from 'src/utils/helprs/search-table';
import { UpdateLinesService } from 'src/services/lines/update.lines.service';
import { CreateLinesService } from 'src/services/lines/create.lines.service';
import { DeleteLinesService } from 'src/services/lines/delete.lines.service';
import { ISearchLineValue } from 'src/repositories/lines/lines.repository.contract';
export declare class LinesController {
    private readonly listsLinesService;
    private readonly createLinesService;
    private readonly updateLinesService;
    private readonly deleteLinesService;
    constructor(listsLinesService: ListsLinesService, createLinesService: CreateLinesService, updateLinesService: UpdateLinesService, deleteLinesService: DeleteLinesService);
    create(createLinesDto: CreateLinesDto): Promise<import("../entities/lines.entity").Lines>;
    findValueSearch(unifiedValue: ISearchLineValue): Promise<import("../entities/lines.entity").Lines[]>;
    findAll(page: any): Promise<any>;
    findBySearch(page: number, search: SearchFilterTable): Promise<import("../entities/lines.entity").Lines[] | import("../dtos/lines/paginated-lines.dto").PaginatedLinesDTO>;
    update(id: string, updateLinesDto: UpdateLinesDto): Promise<import("../entities/lines.entity").Lines>;
    remove(id: string): Promise<void>;
}
