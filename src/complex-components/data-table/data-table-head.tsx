// external component
import { twMerge } from "tailwind-merge";

// types
import type { DataTableHeadProps, SortIconProps } from "./types";

// components
import IconComponent from "../../components/icon-component/icon-component";

export default function DataTableHead<T>({
  columns,
  sortBy,
  sortDirection = "asc",
  onSort,
  className,
}: DataTableHeadProps<T>) {
  return (
    <thead className={twMerge("bg-neutral-900/50", className)}>
      <tr className="border-b border-neutral-800">
        {columns.map((column) => {
          const active = sortBy === column.key;

          return (
            <th
              key={String(column.key)}
              scope="col"
              style={{
                width: column.width,
                minWidth: column.minWidth,
                maxWidth: column.maxWidth,
              }}
              className={twMerge(
                "h-12 px-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-300",
                column.align === "center" && "text-center",
                column.align === "right" && "text-right",
                column.sortable &&
                  "cursor-pointer select-none transition-colors hover:bg-neutral-800",
              )}
              onClick={() => column.sortable && onSort?.(column)}
            >
              <div
                className={twMerge(
                  "flex items-center gap-2",
                  column.align === "center" && "justify-center",
                  column.align === "right" && "justify-end",
                )}
              >
                <span>{column.title}</span>

                {column.sortable && (
                  <SortIcon active={active} direction={sortDirection} />
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function SortIcon({ active, direction }: SortIconProps) {
  if (!active) {
    return (
      <IconComponent
        iconName="ArrowsUpDownIcon"
        size={14}
        className="text-neutral-400"
      />
    );
  }

  return direction === "asc" ? (
    <IconComponent
      iconName="ArrowUpIcon"
      size={14}
      className="text-primary-600"
    />
  ) : (
    <IconComponent
      iconName="ArrowDownIcon"
      size={14}
      className="text-primary-600"
    />
  );
}
