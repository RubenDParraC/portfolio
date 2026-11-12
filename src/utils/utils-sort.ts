// types
import type {
  DataTableColumn,
  SortDirection,
  Comparable,
} from "../complex-components/data-table/types";

// Normaliza un valor para permitir su comparación durante la ordenación.
function normalizeValue(value: unknown): Comparable {
  if (value === null || value === undefined) {
    return "";
  }

  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === "string") {
    return value.toLocaleLowerCase();
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  return String(value).toLocaleLowerCase();
}

// Compara dos valores normalizados y determina su orden relativo.
function compareValues(a: unknown, b: unknown): number {
  const valueA = normalizeValue(a);
  const valueB = normalizeValue(b);

  if (valueA > valueB) return 1;

  if (valueA < valueB) return -1;

  return 0;
}

// Ordena los datos según la columna y dirección de ordenación seleccionadas.
export function sortData<T>(
  data: T[],
  column: DataTableColumn<T>,
  direction: SortDirection = "asc",
): T[] {
  const sorted = [...data];

  sorted.sort((a, b) => {
    let comparison: number;

    // Comparador personalizado
    if (column.sortComparator) {
      comparison = column.sortComparator(a, b);
    } else {
      comparison = compareValues(
        a[column.key as keyof T],
        b[column.key as keyof T],
      );
    }

    return direction === "asc" ? comparison : -comparison;
  });

  return sorted;
}
