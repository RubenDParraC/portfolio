// external components
import { twMerge } from "tailwind-merge";

// types
import type { DataTableRowProps } from "./types";

// components
import Button from "../../components/button/button";
import IconComponent from "../../components/icon-component/icon-component";

export default function DataTableRow<T>({
  row,
  columns,
  rowIndex,
  expandable = false,
  expanded = false,
  onToggleExpand,
  onRowClick,
  className,
}: DataTableRowProps<T>) {
  return (
    <tr
      onClick={() => onRowClick?.(row)}
      className={twMerge(
        "border-b transition-colors hover:bg-neutral-50 border-neutral-800 hover:bg-neutral-900/50",
        onRowClick && "cursor-pointer",
        className,
      )}
    >
      {columns.map((column, index) => {
        const value = row[column.key as keyof T];

        return (
          <td
            key={`${String(column.key)}-${index}`}
            className={twMerge(
              "px-4 py-3 text-sm text-neutral-200",
              column.align === "center" && "text-center",
              column.align === "right" && "text-right",
              typeof column.cellClassName === "function"
                ? column.cellClassName(row)
                : column.cellClassName,
            )}
          >
            <div
              className={twMerge(
                "flex items-center gap-2",
                column.align === "center" && "justify-center",
                column.align === "right" && "justify-end",
              )}
            >
              {expandable && index === 0 && (
                <Button
                  color="neutral_300"
                  className="px-3 py-2 rounded-lg"
                  onClick={(event) => {
                    event.stopPropagation();
                    onToggleExpand?.();
                  }}
                  iconLeft={
                    expanded ? (
                      <IconComponent
                        iconName="MinusIcon"
                        color="neutral_900"
                        size={16}
                      />
                    ) : (
                      <IconComponent
                        iconName="PlusIcon"
                        color="neutral_900"
                        size={16}
                      />
                    )
                  }
                />
              )}

              {column.render
                ? column.render(value, row, rowIndex)
                : String(value ?? "—")}
            </div>
          </td>
        );
      })}
    </tr>
  );
}
