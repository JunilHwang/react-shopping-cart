import { useEffect } from "react";
import { useInView } from "./useInView";

export function useInfiniteScroll(callback: () => void) {
  const [ref, { inView }] = useInView();

  useEffect(() => {
    if (inView) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return ref;
}
