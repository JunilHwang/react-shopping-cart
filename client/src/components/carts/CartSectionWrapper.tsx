import { PropsWithChildren } from "react";
import { styleUtils } from "../../styles";

export default function CartSectionWrapper({ children }: PropsWithChildren) {
  return <div className={styleUtils.flex}>{children}</div>;
}
