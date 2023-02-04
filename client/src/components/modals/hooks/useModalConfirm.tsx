import { useCallback, useState } from "react";

export function useModalConfirm(conditionForOpen = true) {
  const [show, setShow] = useState(false);

  const open = useCallback(
    () => conditionForOpen && setShow(true),
    [conditionForOpen]
  );

  const close = useCallback(() => setShow(false), []);

  return {
    show,
    open,
    close,
  };
}
