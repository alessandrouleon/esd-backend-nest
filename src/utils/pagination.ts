export class PaginatedDto {
  total?: number;
  page: number;
  take: number;
  skip?: number;
}

export interface ISearchWithColumn {
  value: string;
  column: string;
}
export class valuersSearchProps {
  value: string;
  take: number;
  page: number;
  skip: number;
  column: string;
}

export const paginateResponse = ({ total, page, take }: PaginatedDto) => {
  const lastPage = Math.ceil(total / take);
  const nextPage = page < lastPage && page + 1;
  const prevPage = page > 1 && page - 1;
  return { total, currentPage: page, nextPage, prevPage, lastPage };
};

export function getParametersToPaginate(
  page: number,
  take: number = 11,
): { take: number; skip: number; page: number } {
  return { page: Number(page) || 1, skip: (Number(page) - 1) * take, take };
}
