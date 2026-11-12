import { Fragment } from "react";

// components
import DataTableRow from "./data-table-row";
import DataTableExpandedRow from "./data-table-expanded-row";

// types
import type { DataTableBodyProps } from "./types";

export default function DataTableBody<T>({
  data,
  columns,
  onRowClick,
  rowKey,
  expandable = false,
  expandedRow,
  onToggleExpand,
  renderExpanded,
  emptyMessage = "No hay registros.",
}: DataTableBodyProps<T>) {
  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td
            colSpan={columns.length}
            className="h-40 px-6 text-center text-sm text-neutral-400"
          >
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((row, index) => {
        const key = rowKey(row, index);
        const expanded = expandable && expandedRow === key;

        return (
          <Fragment key={key}>
            <DataTableRow
              row={row}
              rowIndex={index}
              columns={columns}
              expandable={expandable}
              expanded={expandedRow === key}
              onToggleExpand={() => onToggleExpand?.(key)}
              onRowClick={onRowClick}
            />

            {expanded && renderExpanded && (
              <DataTableExpandedRow colSpan={columns.length}>
                {renderExpanded(row)}
              </DataTableExpandedRow>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
}
