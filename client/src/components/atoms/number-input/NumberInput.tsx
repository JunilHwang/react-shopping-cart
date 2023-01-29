import { TInputElementProps } from "../../../types";
import styles from "./NumberInput.module.scss";
import { useNumberInput } from "./hooks";

type TInputProps = TInputElementProps<HTMLInputElement>;

interface IProps extends Omit<TInputProps, "onChange" | "type"> {
  onChange?: (value: number) => void;
}

export default function NumberInput({ onChange, defaultValue }: IProps) {
  const [$inputRef, { increment, decrement }] = useNumberInput(onChange);

  return (
    <div className={styles.numberInputContainer}>
      <input
        ref={$inputRef}
        type="number"
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
