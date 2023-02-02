import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useInfiniteScroll } from "../useInfiniteScroll";

const mockCallback = vi.fn();

describe("useInfiniteScroll > ", () => {
  beforeEach(() => {
    mockCallback.mockClear();
  });

  it("element가 viewport에 진입할 경우, callback함수를 실행한다.", () => {
    vi.mock("../useInView", () => ({
      useInView: () => [vi.fn(), { inView: true }],
    }));

    renderHook(() => useInfiniteScroll(mockCallback));

    expect(mockCallback).toHaveBeenCalledOnce();
  });

  it("element가 viewport에 진입하지 않았을 경우, callback함수를 실행하지 않는다.", () => {
    vi.mock("../useInView", () => ({
      useInView: () => [vi.fn(), { inView: false }],
    }));

    renderHook(() => useInfiniteScroll(mockCallback));

    expect(mockCallback).toHaveBeenCalledOnce();
  });
});
