import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export type TNormalElementProps<Element> = DetailedHTMLProps<
  HTMLAttributes<Element>,
  Element
>;

export type TInputElementProps<Element> = DetailedHTMLProps<
  InputHTMLAttributes<Element>,
  Element
>;
