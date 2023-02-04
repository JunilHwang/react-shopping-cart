import { createPortal } from "react-dom";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import styles from "./Modal.module.scss";

interface IProps {
  show: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children: ({ close }: { close: () => void }) => JSX.Element;
}

export default function ModalContainer({
  children,
  show,
  onOpen,
  onClose,
}: IProps) {
  const [condition, setCondition] = useState(false);
  const $modalPortal = document.querySelector(`.${ModalPortal.className}`);

  const close = useCallback(() => {
    setCondition(false);
    onClose?.();
  }, [onClose]);

  const handleClickContainer = useCallback(
    (event: MouseEvent<HTMLDivElement>) => event.stopPropagation(),
    []
  );

  useEffect(() => {
    if (condition) {
      onOpen?.();
    }
  }, [onOpen, condition]);

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  useEffect(() => {
    setCondition(show);
  }, [show]);

  if (!$modalPortal || !condition) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} onClick={close}>
      <span className={styles.middle} />
      <div className={styles.modalContainer} onClick={handleClickContainer}>
        {children({ close })}
      </div>
    </div>,
    $modalPortal
  );
}
