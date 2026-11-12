import { useEffect, useMemo, useState } from "react";

// utils
import { paginate } from "../utils/utils-pagination";
import { sortData } from "../utils/utils-sort";

// types
import type {
  DataTableColumn,
  SortDirection,
  UseDataTableOptions,
} from "../complex-components/data-table/types";

export function useDataTable<T>({
  data,
  columns,
  pageSize = 10,
  searchable = true,
  initialSortBy,
  initialSortDirection = "asc",
  resetKey,
}: UseDataTableOptions<T>) {
  // ---------------------------------------
  // State
  // ---------------------------------------

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<keyof T | string | undefined>(
    initialSortBy,
  );
  const [sortDirection, setSortDirection] =
    useState<SortDirection>(initialSortDirection);
  const [expandedRow, setExpandedRow] = useState<React.Key | null>(null);

  // ---------------------------------------
  // Visible columns
  // ---------------------------------------

  const visibleColumns = useMemo(
    () => columns.filter((column) => !column.hidden),
    [columns],
  );

  // ---------------------------------------
  // Search
  // ---------------------------------------

  const filteredRows = useMemo(() => {
    if (!searchable || !search.trim()) {
      return data;
    }

    const query = search.toLowerCase();

    return data.filter((row) =>
      visibleColumns.some((column) => {
        const value = row[column.key as keyof T];

        if (value == null) {
          return false;
        }

        return String(value).toLowerCase().includes(query);
      }),
    );
  }, [data, visibleColumns, search, searchable]);

  // ---------------------------------------
  // Sort
  // ---------------------------------------
  const columnsMap = useMemo(() => {
    return new Map(visibleColumns.map((column) => [column.key, column]));
  }, [visibleColumns]);

  const sortedRows = useMemo(() => {
    if (!sortBy) {
      return filteredRows;
    }

    const column = columnsMap.get(sortBy);

    if (!column) {
      return filteredRows;
    }

    return sortData(filteredRows, column, sortDirection);
  }, [filteredRows, columnsMap, sortBy, sortDirection]);

  // ---------------------------------------
  // Pagination
  // ---------------------------------------

  const pagination = useMemo(
    () => paginate(sortedRows, page, pageSize),
    [sortedRows, page, pageSize],
  );

  // ---------------------------------------
  // Handlers
  // ---------------------------------------

  function toggleSort(column: DataTableColumn<T>) {
    if (!column.sortable) {
      return;
    }

    if (sortBy === column.key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column.key);
      setSortDirection("asc");
    }

    setPage(1);
  }

  function toggleExpandedRow(key: React.Key) {
    setExpandedRow((current) => (current === key ? null : key));
  }

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <>
  useEffect(() => {
    setExpandedRow(null);
  }, [resetKey]);

  return {
    // Columns
    columns: visibleColumns,

    // State
    search,
    page: pagination.page,
    pageSize: pagination.pageSize,
    sortBy,
    sortDirection,
    expandedRow,

    // Rows
    rows: pagination.rows,
    filteredRows,
    sortedRows,

    // Pagination
    totalRows: pagination.totalItems,
    totalPages: pagination.totalPages,
    hasPreviousPage: pagination.hasPreviousPage,
    hasNextPage: pagination.hasNextPage,
    startIndex: pagination.startIndex,
    endIndex: pagination.endIndex,

    // Actions
    setPage,
    setSearch: handleSearch,
    setExpandedRow,
    toggleSort,
    toggleExpandedRow,
  };
}
