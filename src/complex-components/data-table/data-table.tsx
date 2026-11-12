import { twMerge } from "tailwind-merge";

// components
import DataTableHeader from "./data-table-header";
import DataTableHead from "./data-table-head";
import DataTableBody from "./data-table-body";
import DataTablePagination from "./data-table-pagination";

// hooks
import { useDataTable } from "../../hooks/use-data-table";

// types
import type { DataTableProps } from "./types";
import DataTableExport from "./data-table-export";

export default function DataTable<T>({
  data,
  columns,
  rowKey,
  title,
  description,
  icon,
  searchable = true,
  searchPlaceholder = "Buscar...",
  pagination = true,
  pageSize = 10,
  expandable = false,
  renderExpanded,
  emptyMessage = "No hay registros.",
  onRowClick,
  headerActions,
  className,
  exportable,
  visibleHeader = true,
  resetKey = 0,
}: DataTableProps<T>) {
  const table = useDataTable({
    data,
    columns,
    pageSize,
    searchable,
    resetKey,
  });

  return (
    <div
      className={twMerge(
        "overflow-hidden rounded-xl border shadow-sm border-neutral-800 bg-neutral-900",
        className,
      )}
    >
      {visibleHeader && (
        <DataTableHeader
          title={title}
          description={description}
          icon={icon}
          totalItems={table.totalRows}
          searchable={searchable}
          searchValue={table.search}
          searchPlaceholder={searchPlaceholder}
          onSearchChange={table.setSearch}
        >
          <div className="flex items-center gap-2">
            <DataTableExport
              data={table.sortedRows}
              columns={table.columns}
              title={title}
              exportable={exportable}
            />

            {headerActions}
          </div>
        </DataTableHeader>
      )}

      <div className="w-full overflow-x-auto">
        <table className="min-w-full border-collapse">
          <DataTableHead
            columns={columns}
            sortBy={table.sortBy}
            sortDirection={table.sortDirection}
            onSort={table.toggleSort}
          />

          <DataTableBody
            data={table.rows}
            columns={columns}
            rowKey={rowKey}
            expandable={expandable}
            expandedRow={table.expandedRow}
            onToggleExpand={table.toggleExpandedRow}
            renderExpanded={renderExpanded}
            emptyMessage={emptyMessage}
            onRowClick={onRowClick}
          />
        </table>
      </div>

      {pagination && (
        <DataTablePagination
          page={table.page}
          totalPages={table.totalPages}
          totalItems={table.totalRows}
          pageSize={table.pageSize}
          onPageChange={table.setPage}
        />
      )}
    </div>
  );
}
