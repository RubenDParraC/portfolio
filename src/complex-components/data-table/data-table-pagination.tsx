// external components
import { twMerge } from "tailwind-merge";

// types
import type { DataTablePaginationProps, PaginationButtonProps } from "./types";

// components
import IconComponent from "../../components/icon-component/icon-component";

// hooks
import { t } from "../../i18n/i18n";

export default function DataTablePagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  maxVisiblePages = 5,
  className,
}: DataTablePaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);
  const half = Math.floor(maxVisiblePages / 2);
  let startPage = Math.max(1, page - half);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 border-t p-4 sm:flex-row sm:items-center sm:justify-between border-neutral-800",
        className,
      )}
    >
      <span className="text-sm text-neutral-400">
        {t("general.showing")}{" "}
        <span className="font-medium text-neutral-100">{startItem}</span> -{" "}
        <span className="font-medium text-neutral-100">{endItem}</span>{" "}
        {t("general.of")}{" "}
        <span className="font-medium text-neutral-100">{totalItems}</span>
      </span>

      <nav className="flex items-center gap-1" aria-label="Paginación">
        <PaginationButton disabled={page === 1} onClick={() => onPageChange(1)}>
          <IconComponent
            iconName="ChevronDoubleLeftIcon"
            size={16}
            color="purple_500"
          />
        </PaginationButton>

        <PaginationButton
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <IconComponent
            iconName="ChevronLeftIcon"
            size={16}
            color="purple_500"
          />
        </PaginationButton>

        {pages.map((currentPage) => (
          <PaginationButton
            key={currentPage}
            active={currentPage === page}
            onClick={() => onPageChange(currentPage)}
          >
            {currentPage}
          </PaginationButton>
        ))}

        <PaginationButton
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <IconComponent
            iconName="ChevronRightIcon"
            size={16}
            color="purple_500"
          />
        </PaginationButton>

        <PaginationButton
          disabled={page === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <IconComponent
            iconName="ChevronDoubleRightIcon"
            size={16}
            color="purple_500"
          />
        </PaginationButton>
      </nav>
    </div>
  );
}

function PaginationButton({
  children,
  active = false,
  disabled = false,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "flex h-9 min-w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors cursor-pointer",

        active
          ? "border-light-blue-500 bg-purple-500 text-white"
          : "border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-800",

        disabled && "cursor-not-allowed opacity-50 hover:bg-inherit",
      )}
    >
      {children}
    </button>
  );
}
