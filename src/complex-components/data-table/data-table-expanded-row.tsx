// external components
import { twMerge } from "tailwind-merge";

// types
import type { DataTableExpandedRowProps } from "./types";

export default function DataTableExpandedRow({
  children,
  colSpan,
  className,
  contentClassName,
}: DataTableExpandedRowProps) {
  return (
    <tr className={twMerge("border-b border-neutral-800", className)}>
      <td colSpan={colSpan} className="p-0">
        <div
          className={twMerge("px-6 py-5 bg-neutral-900/40", contentClassName)}
        >
          {children}
        </div>
      </td>
    </tr>
  );
}
