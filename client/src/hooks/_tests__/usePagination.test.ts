import { beforeEach, describe, expect, it } from "vitest";
import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { usePagination } from "../usePagination";

type TResultUsePageNation = ReturnType<typeof usePagination>;

let result: RenderHookResult<
  TResultUsePageNation,
  TResultUsePageNation
>["result"];

const mockItems = [
  { id: 1, content: "content 1" },
  { id: 2, content: "content 2" },
  { id: 3, content: "content 3" },
  { id: 4, content: "content 4" },
  { id: 5, content: "content 5" },
  { id: 6, content: "content 6" },
  { id: 7, content: "content 7" },
];

describe("usePagination > ", () => {
  describe("7개의 아이템을 가진 배열을 3개 단위로 페이징을 할 때", () => {
    beforeEach(() => {
      result = renderHook(() =>
        usePagination({ items: mockItems, size: 3 })
      ).result;
    });

    it("처음에는 3개의 아이템을 가져온다.", () => {
      act(() => {
        expect(result.current.currentPage).toBe(1);
        expect(result.current.pageItems?.length).toBe(3);
      });
    });

    it("2 페이지로 이동하면, 6개의 아이템을 가져온다.", () => {
      act(() => {
        result.current.goToNextPage();
      });

      act(() => {
        expect(result.current.currentPage).toBe(2);
        expect(result.current.pageItems?.length).toBe(6);
      });
    });

    it("3 페이지로 이동하면, 7개의 아이템을 가져온다.", () => {
      act(() => {
        result.current.goToNextPage();
        result.current.goToNextPage();
      });

      act(() => {
        expect(result.current.currentPage).toBe(3);
        expect(result.current.pageItems?.length).toBe(7);
      });
    });

    it("3 페이지가 마지막 페이지이다.", () => {
      act(() => {
        result.current.goToNextPage();
        result.current.goToNextPage();
        result.current.goToNextPage();
      });

      act(() => {
        expect(result.current.currentPage).toBe(3);
        expect(result.current.pageItems?.length).toBe(7);
      });
    });
  });
});
