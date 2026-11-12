// external components
import { twMerge } from "tailwind-merge";

// types
import type { DataTableHeaderProps } from "./types";

// components
import IconComponent from "../../components/icon-component/icon-component";
import Input from "../../components/input/input";

// hooks
import { t } from "../../i18n/i18n";

export default function DataTableHeader({
  title,
  description,
  icon,
  totalItems,
  searchable = true,
  searchValue = "",
  searchPlaceholder = "Buscar...",
  onSearchChange,
  children,
  className,
}: DataTableHeaderProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 border-b p-4 border-neutral-800",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        {(title || description) && (
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-300">
                {icon}
              </div>
            )}

            <div>
              {title && (
                <h2 className="text-sm font-semibold text-neutral-100">
                  {title}
                </h2>
              )}

              {(description || totalItems !== undefined) && (
                <p className="mt-1 text-xs text-neutral-400">
                  {description}

                  {totalItems !== undefined && (
                    <>
                      {description && " • "}
                      {totalItems} {t("general.record")}
                      {totalItems === 1 ? "" : "s"}
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        )}

        {children && <div className="flex items-center gap-2">{children}</div>}
      </div>

      {searchable && (
        <div className="relative max-w-sm">
          <IconComponent
            iconName="MagnifyingGlassIcon"
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <Input
            onChange={(value) => onSearchChange?.(value)}
            value={searchValue}
            label={searchPlaceholder}
            className="border-purple-500"
          />
        </div>
      )}
    </div>
  );
}
