import { Page, PageResponse } from './page.model';
export declare abstract class Pageable<T> {
    buildPage(page: Page): Page;
    buildPageResponse(items: T[], total: number): PageResponse<T>;
}
