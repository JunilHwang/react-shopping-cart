import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export type TNormalElementProps<Element> = DetailedHTMLProps<
  HTMLAttributes<Element>,
  Element
>;

export type TInputElementProps<Element = HTMLInputElement> = DetailedHTMLProps<
  InputHTMLAttributes<Element>,
  Element
>;
