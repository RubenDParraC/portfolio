// types
import type { PaginationResult } from "../complex-components/data-table";

// Divide un conjunto de datos en páginas y calcula la información de paginación.
export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number,
): PaginationResult<T> {
  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  return {
    rows: data.slice(startIndex, endIndex),
    totalItems,
    totalPages,
    page: currentPage,
    pageSize,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    startIndex,
    endIndex,
  };
}
