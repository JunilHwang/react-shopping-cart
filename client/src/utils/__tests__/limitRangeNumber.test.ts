import { describe, expect, it } from "vitest";
import limitRangeNumber from "../limitRangeNumber";

describe("> limitRangeNumber", () => {
  it.each([
    { value: 10, min: 0, max: 5, expected: 5 },
    { value: 10, min: 20, max: 40, expected: 20 },
    { value: 10, min: -Infinity, max: Infinity, expected: 10 },
  ])(
    "value: $value, min: $min, max: $max, expected: $expected",
    ({ value, min, max, expected }) => {
      expect(limitRangeNumber(value, min, max)).toBe(expected);
    }
  );
});
