import { useCallback, useRef } from "react";
import { limitRangeNumber } from "../../../../utils";

type TChangeType = "up" | "down";

function getPropertiesNumberValues(
  target: HTMLInputElement,
  properties: (keyof HTMLInputElement)[]
) {
  return properties.map((property) => target[property]).map(Number);
}

export default function useNumberInput(onChange?: (value: number) => void) {
  const $inputRef = useRef<HTMLInputElement>(null);

  const changeValue = useCallback(
    (type: TChangeType) => {
      const target = $inputRef.current;
      if (!target) {
        return;
      }
      const [value, step, min, max] = getPropertiesNumberValues(target, [
        "value",
        "step",
        "min",
        "max",
      ]);
      const incrementValue = step * (type === "up" ? 1 : -1);
      const newValue = limitRangeNumber(value + incrementValue, min, max);
      console.log({
        "value + incrementValue": value + incrementValue,
        min,
        max,
      });
      target.value = String(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  const increment = useCallback(() => changeValue("up"), [changeValue]);

  const decrement = useCallback(() => changeValue("down"), [changeValue]);

  return [$inputRef, { increment, decrement }] as const;
}
