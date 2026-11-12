// components
import Button from "../../components/button/button";
import IconComponent from "../../components/icon-component/icon-component";

// export
import { exportCsv } from "./export/export-csv";
import { exportExcel } from "./export/export-excel";
import { exportPdf } from "./export/export-pdf";

// types
import type { DataTableColumn } from "./types";

export interface DataTableExportProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  title?: string;
  exportable?: {
    csv?: boolean;
    excel?: boolean;
    pdf?: boolean;
    fileName?: string;
  };
}

export default function DataTableExport<T>({
  data,
  columns,
  title,
  exportable,
}: DataTableExportProps<T>) {
  if (!exportable) {
    return null;
  }

  const fileName = exportable.fileName ?? "data";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {exportable.csv && (
        <Button
          label="CSV"
          color="purple_500"
          onClick={() =>
            exportCsv({
              data,
              columns,
              fileName,
            })
          }
          className="
            inline-flex
            items-center
            rounded-lg
            gap-2
            px-3
            py-2
            text-sm
            font-medium
            transition-colors
          "
          iconLeft={
            <IconComponent
              color="neutral_0"
              variant="solid"
              iconName="TableCellsIcon"
              size={16}
            />
          }
        />
      )}

      {exportable.excel && (
        <Button
          label="Excel"
          color="success_600"
          onClick={() =>
            exportExcel({
              data,
              columns,
              fileName,
            })
          }
          className="
            inline-flex
            items-center
            rounded-lg
            gap-2
            px-3
            py-2
            text-sm
            font-medium
            transition-colors
          "
          iconLeft={
            <IconComponent
              color="neutral_0"
              variant="solid"
              iconName="TableCellsIcon"
              size={16}
            />
          }
        />
      )}

      {exportable.pdf && (
        <Button
          label="PDF"
          color="error_600"
          onClick={() =>
            exportPdf({
              data,
              columns,
              fileName,
              title,
            })
          }
          className="
            inline-flex
            items-center
            rounded-lg
            gap-2
            px-3
            py-2
            text-sm
            font-medium
            transition-colors
          "
          iconLeft={
            <IconComponent
              color="neutral_0"
              variant="solid"
              iconName="PrinterIcon"
              size={16}
            />
          }
        />
      )}
    </div>
  );
}
