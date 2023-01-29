import { TInputElementProps } from "../../../types";
import styles from "./NumberInput.module.scss";
import { useNumberInput } from "./hooks";

interface IProps extends Omit<TInputElementProps, "onChange" | "type"> {
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function NumberInput({
  onChange,
  defaultValue,
  min = 0,
  max = Infinity,
  step = 1,
}: IProps) {
  const [$inputRef, { increment, decrement }] = useNumberInput(onChange);

  return (
    <div className={styles.numberInputContainer}>
      <input
        ref={$inputRef}
        type="number"
        min={min}
        step={step}
        max={max}
        className={styles.numberInput}
        defaultValue={defaultValue}
      />
      <div>
        <button className={styles.numberInputButton} onClick={increment}>
          ▲
        </button>
        <button className={styles.numberInputButton} onClick={decrement}>
          ▼
        </button>
      </div>
    </div>
  );
}
