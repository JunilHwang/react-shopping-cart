import { useCallback, useMemo, useState } from "react";
import limitRangeNumber from "../utils/limitRangeNumber";

interface IProps<T> {
  items?: T[];
  size: number;
}

export function usePagination<T>({ items, size }: IProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageItems = useMemo(
    () => items?.slice(0, currentPage * size),
    [items, currentPage, size]
  );
  const lastPage = useMemo(
    () => Math.ceil((items?.length || 0) / size),
    [items?.length, size]
  );

  const goToNextPage = useCallback(
    () =>
      setCurrentPage((currentPage) =>
        limitRangeNumber(currentPage + 1, 1, lastPage)
      ),
    [lastPage]
  );

  return {
    currentPage,
    pageItems,
    goToNextPage,
  };
}
