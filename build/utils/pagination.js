"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParametersToPaginate = exports.paginateResponse = exports.valuersSearchProps = exports.PaginatedDto = exports.PaginationOptionsSearch = exports.PaginationOptions = void 0;
class PaginationOptions {
}
exports.PaginationOptions = PaginationOptions;
class PaginationOptionsSearch extends PaginationOptions {
}
exports.PaginationOptionsSearch = PaginationOptionsSearch;
class PaginatedDto {
}
exports.PaginatedDto = PaginatedDto;
class valuersSearchProps {
}
exports.valuersSearchProps = valuersSearchProps;
const paginateResponse = ({ total, page, take }) => {
    const lastPage = Math.ceil(total / take);
    const nextPage = page < lastPage && page + 1;
    const prevPage = page > 1 && page - 1;
    return { total, currentPage: page, nextPage, prevPage, lastPage };
};
exports.paginateResponse = paginateResponse;
function getParametersToPaginate(page, take = 11) {
    return { page: Number(page) || 1, skip: (Number(page) - 1) * take, take };
}
exports.getParametersToPaginate = getParametersToPaginate;
//# sourceMappingURL=pagination.js.map