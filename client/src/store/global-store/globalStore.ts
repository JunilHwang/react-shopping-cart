import { atom } from "jotai";
import { IOrderDetail } from "../../types";

export const orderDetailsAtom = atom<IOrderDetail[]>([]);
export const cartCheckedIdsAtom = atom<number[]>([]);
export const cartQuantityMapAtom = atom<Record<string, number>>({});
