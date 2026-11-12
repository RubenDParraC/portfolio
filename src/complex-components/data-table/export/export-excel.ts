import type { DataTableColumn } from "../types";

interface ExportExcelOptions<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  fileName: string;
}

export function exportExcel<T>({
  data,
  columns,
  fileName,
}: ExportExcelOptions<T>) {
  const visibleColumns = columns.filter((column) => !column.hidden);

  const headers =
    visibleColumns.map((column) => column.title).join("\t") + "\n";

  const rows = data
    .map((row) =>
      visibleColumns
        .map((column) => String(row[column.key as keyof T] ?? ""))
        .join("\t"),
    )
    .join("\n");

  const blob = new Blob([headers + rows], {
    type: "application/vnd.ms-excel",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${fileName}.xls`;

  link.click();

  URL.revokeObjectURL(url);
}
