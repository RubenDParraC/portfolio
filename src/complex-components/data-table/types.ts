import type { Key, ReactNode } from "react";

export type SortDirection = "asc" | "desc";

export type DataTableAlign = "left" | "center" | "right";

export interface DataTableColumn<T> {
  key: keyof T | string; // Propiedad del objeto que representa la columna.
  title: string; // Título que aparecerá en el encabezado.
  sortable?: boolean; // Permite ordenar la columna.
  width?: string | number; // Anchos opcionales.
  minWidth?: string | number;
  maxWidth?: string | number;
  align?: DataTableAlign; // Alineación del contenido.
  render?: (value: unknown, row: T, rowIndex: number) => ReactNode; // Render personalizado de la celda.
  sortComparator?: (a: T, b: T) => number; // Comparador personalizado.
  headerClassName?: string; // Clase para el encabezado.
  cellClassName?: string | ((row: T) => string); // Clase para todas las celdas de la columna.
  hidden?: boolean; // Permite ocultar la columna.
}

export interface DataTableProps<T> {
  data: T[]; // Datos de la tabla.
  columns: DataTableColumn<T>[]; // Definición de columnas.
  title?: string; // Header
  description?: string;
  icon?: ReactNode;
  searchable?: boolean; // Búsqueda
  searchPlaceholder?: string;
  pagination?: boolean; // Paginación.
  pageSize?: number;
  expandable?: boolean; // Expansión.
  emptyMessage?: string; // Estado vacío.
  renderExpanded?: (row: T) => ReactNode;
  rowKey: (row: T, index: number) => Key; // Función para obtener una llave única.
  onRowClick?: (row: T) => void; // Eventos.
  headerActions?: ReactNode; // Acciones del Header.
  className?: string; // Clases.
  exportFileName?: string;
  exportColumns?: (keyof T)[];
  onExportPdf?: (rows: T[]) => void;
  exportable?: DataTableExportOptions;
  visibleHeader?: boolean;
  resetKey?: number;
}

export interface UseDataTableOptions<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  pageSize?: number;
  searchable?: boolean;
  initialSortBy?: keyof T | string;
  initialSortDirection?: SortDirection;
  resetKey?: number;
}

export interface PaginationResult<T> {
  rows: T[];
  totalItems: number;
  totalPages: number;
  page: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startIndex: number;
  endIndex: number;
}

export type Comparable = string | number | boolean;

export interface DataTableBodyProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  rowKey: (row: T, index: number) => React.Key;
  expandable?: boolean;
  expandedRow?: React.Key | null;
  onToggleExpand?: (key: React.Key) => void;
  renderExpanded?: (row: T) => React.ReactNode;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
}

export interface DataTableExpandedRowProps {
  children: React.ReactNode;
  colSpan: number;
  className?: string;
  contentClassName?: string;
}

export interface DataTableHeadProps<T> {
  columns: DataTableColumn<T>[];
  sortBy?: keyof T | string;
  sortDirection?: SortDirection;
  onSort?: (column: DataTableColumn<T>) => void;
  className?: string;
}

export interface SortIconProps {
  active: boolean;
  direction: SortDirection;
}

export interface DataTableHeaderProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  totalItems?: number;
  searchable?: boolean;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
  exportable?: boolean;
  exportActions?: React.ReactNode;
}

export interface DataTablePaginationProps {
  page: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  className?: string;
}

export interface PaginationButtonProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DataTableRowProps<T> {
  row: T;
  rowIndex: number;
  columns: DataTableColumn<T>[];
  expandable?: boolean;
  expanded?: boolean;
  onToggleExpand?: () => void;
  onRowClick?: (row: T) => void;
  className?: string;
}

export interface DataTableExportOptions {
  csv?: boolean;
  excel?: boolean;
  pdf?: boolean;
  fileName?: string;
  labels?: {
    csv?: string;
    excel?: string;
    pdf?: string;
  };
  icons?: {
    csv?: ReactNode;
    excel?: ReactNode;
    pdf?: ReactNode;
  };
}
