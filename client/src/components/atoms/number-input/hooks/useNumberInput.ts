import { useCallback, useRef } from "react";

type TChangeType = "up" | "down";
export default function useNumberInput(onChange?: (value: number) => void) {
  const $inputRef = useRef<HTMLInputElement>(null);

  const changeValue = useCallback(
    (type: TChangeType) => {
      const target = $inputRef.current;
      if (!target) {
        return;
      }
      const value = Number(target.value);
      const step = Number(target.step);
      const newValue = value + (type === "up" ? step : -step);
      target.value = String(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  const increment = useCallback(() => {
    changeValue("up");
  }, [changeValue]);

  const decrement = useCallback(() => {
    changeValue("down");
  }, [changeValue]);

  return [$inputRef, { increment, decrement }] as const;
}
