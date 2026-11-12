import type { DataTableColumn } from "../types";

interface ExportCsvOptions<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  fileName: string;
}

export function exportCsv<T>({ data, columns, fileName }: ExportCsvOptions<T>) {
  const visibleColumns = columns.filter((column) => !column.hidden);

  const headers = visibleColumns.map((column) => column.title).join(",");

  const rows = data.map((row) =>
    visibleColumns
      .map((column) => {
        const value = row[column.key as keyof T];

        return `"${String(value ?? "").replace(/"/g, '""')}"`;
      })
      .join(","),
  );

  const csv = [headers, ...rows].join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${fileName}.csv`;

  link.click();

  URL.revokeObjectURL(url);
}
