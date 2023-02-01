import { PropsWithChildren } from "react";
import styleUtils from "../../styles/Utils.module.scss";
import { Header } from "./parts";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main className={styleUtils.container}>{children}</main>
    </>
  );
}
