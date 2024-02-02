import { Lines } from '../../entities/lines.entity';
export declare class PaginatedLinesDTO {
    lines: Lines[];
    total: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
}
