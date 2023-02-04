import { useAtom } from "jotai/index";
import { useEffect } from "react";
import { cartCheckedIdsAtom } from "../globalStore";

export default function useResetCarts(
  deleteCarts: (checkedIds: number[]) => void
) {
  const [checkedIds, setCheckedIds] = useAtom(cartCheckedIdsAtom);

  useEffect(() => {
    if (checkedIds.length > 0) {
      deleteCarts(checkedIds);
      setCheckedIds([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedIds, deleteCarts]);
}
