import { useCallback, useEffect, useRef } from "react";
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

  const setLimitRangeValue = useCallback(
    (value: number) => {
      const target = $inputRef.current;
      if (!target) {
        return;
      }
      const [min, max] = getPropertiesNumberValues(target, ["min", "max"]);
      const newValue = limitRangeNumber(value, min, max);
      target.value = String(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  const changeValue = useCallback(
    (type: TChangeType) => {
      const target = $inputRef.current;
      if (!target) {
        return;
      }
      const [value, step] = getPropertiesNumberValues(target, [
        "value",
        "step",
      ]);
      const incrementValue = step * (type === "up" ? 1 : -1);
      setLimitRangeValue(value + incrementValue);
    },
    [setLimitRangeValue]
  );

  const increment = useCallback(() => changeValue("up"), [changeValue]);

  const decrement = useCallback(() => changeValue("down"), [changeValue]);

  useEffect(() => {
    const $input = $inputRef.current;
    if (!$input) {
      return;
    }

    const handleChange = () => {
      setLimitRangeValue(Number($input.value));
    };

    $input.addEventListener("input", handleChange);
    $input.addEventListener("change", handleChange);
    $input.addEventListener("keypress", handleChange);
    return () => {
      $input.removeEventListener("input", handleChange);
      $input.removeEventListener("change", handleChange);
      $input.removeEventListener("keypress", handleChange);
    };
  }, [setLimitRangeValue]);

  return [$inputRef, { increment, decrement }] as const;
}
