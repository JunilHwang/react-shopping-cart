import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(target);

    return () => observer.unobserve(target);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, { inView }] as const;
}
