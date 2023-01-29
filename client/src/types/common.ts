import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TElementProps<Element> = DetailedHTMLProps<
  HTMLAttributes<Element>,
  Element
>;
