export declare class PaginationOptions {
    skip: number;
    take: number;
    page: number;
}
export declare class PaginationOptionsSearch extends PaginationOptions {
    value: string;
    column: string;
}
export declare class PaginatedDto {
    total?: number;
    page: number;
    take: number;
    skip?: number;
}
export interface ISearchWithColumn {
    value: string;
    column: string;
}
export declare class valuersSearchProps {
    value: string;
    take: number;
    page: number;
    skip: number;
    column: string;
}
export declare const paginateResponse: ({ total, page, take }: PaginatedDto) => {
    total: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
};
export declare function getParametersToPaginate(page: number, take?: number): {
    take: number;
    skip: number;
    page: number;
};
