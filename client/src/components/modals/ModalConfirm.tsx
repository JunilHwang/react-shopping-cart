import cx from "classnames";
import { ComponentProps, PropsWithChildren } from "react";
import { styleUtils } from "../../styles";
import { Button } from "../atoms";
import styles from "./Modal.module.scss";
import ModalContainer from "./ModalContainer";

type TModalContainerProps = Omit<
  ComponentProps<typeof ModalContainer>,
  "children"
>;

interface IProps extends TModalContainerProps {
  title: string;
  onComplete?: () => void;
}

export default function ModalConfirm({
  title,
  children,
  onComplete,
  ...props
}: PropsWithChildren<IProps>) {
  return (
    <ModalContainer {...props}>
      {({ close }) => (
        <>
          <h3 className={styles.modalTitle}>{title}</h3>
          {children}
          <div
            className={cx(
              styleUtils.mt10,
              styleUtils.flex,
              styleUtils.justifyCenter,
              styleUtils.gap10
            )}
          >
            <Button type="normal" size="mini" onClick={close}>
              취소
            </Button>
            <Button type="primary" size="mini" onClick={onComplete}>
              확인
            </Button>
          </div>
        </>
      )}
    </ModalContainer>
  );
}
