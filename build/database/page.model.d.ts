export declare class Page {
    skip?: number;
    take?: number;
}
export declare class PageResponse<T> {
    items: T[];
    total: number;
}
