import { useCallback, useMemo, useState } from "react";

interface IProps<T> {
  items?: T[];
  size: number;
}

export function usePagination<T>({ items, size }: IProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageItems = useMemo(
    () => items?.slice(0, currentPage * size) || [],
    [items, currentPage, size]
  );
  const lastPage = useMemo(
    () => Math.ceil((items?.length || 0) / size),
    [items?.length, size]
  );

  const nextPage = useMemo(
    () => Math.min(currentPage + 1, lastPage),
    [currentPage, lastPage]
  );

  const goToNextPage = useCallback(() => setCurrentPage(nextPage), [nextPage]);

  return {
    currentPage,
    pageItems,
    goToNextPage,
  };
}
