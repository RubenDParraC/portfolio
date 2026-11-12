import type { DataTableColumn } from "../types";

interface ExportPdfOptions<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  fileName: string;
  title?: string;
}

export function exportPdf<T>({
  data,
  columns,
  fileName,
  title,
}: ExportPdfOptions<T>) {
  const visibleColumns = columns.filter((column) => !column.hidden);

  const popup = window.open("", "_blank");

  if (!popup) return;

  const headers = visibleColumns
    .map((column) => `<th>${column.title}</th>`)
    .join("");

  const rows = data
    .map(
      (row) => `
      <tr>
        ${visibleColumns
          .map(
            (column) => `
              <td>
                ${String(row[column.key as keyof T] ?? "")}
              </td>
            `,
          )
          .join("")}
      </tr>
    `,
    )
    .join("");

  popup.document.write(`
    <html>
      <head>
        <title>${fileName}</title>

        <style>
          body{
            font-family: Arial, sans-serif;
            padding:24px;
          }

          h2{
            margin-bottom:8px;
          }

          .date{
            color:#666;
            font-size:12px;
            margin-bottom:20px;
          }

          table{
            width:100%;
            border-collapse:collapse;
          }

          th{
            background:#0284c7;
            color:white;
            text-align:left;
            padding:8px;
          }

          td{
            padding:8px;
            border:1px solid #e5e7eb;
          }

          tr:nth-child(even){
            background:#f8fafc;
          }
        </style>
      </head>

      <body>

        <h2>
          ${title ?? fileName}
        </h2>

        <div class="date">
          ${new Date().toLocaleString()}
        </div>

        <table>
          <thead>
            <tr>
              ${headers}
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>

      </body>
    </html>
  `);

  popup.document.close();

  setTimeout(() => {
    popup.print();
    popup.close();
  }, 500);
}
