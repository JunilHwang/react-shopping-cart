import { PropsWithChildren } from "react";
import { Header } from "./parts";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main className="container">{children}</main>
    </>
  );
}
