import { describe, expect, it } from "vitest";
import convertToNumberFormat from "../convertToNumberFormat";

describe("> convertToNumberFormat", () => {
  describe("3자리 단위로 콤마가 있는 숫자형식으로 변환한다.", () => {
    it.each([
      { value: 1, expected: "1" },
      { value: 56, expected: "56" },
      { value: 745, expected: "745" },
      { value: 3199, expected: "3,199" },
      { value: 70936, expected: "70,936" },
      { value: 930835, expected: "930,835" },
      { value: 3784787, expected: "3,784,787" },
      { value: 70164862, expected: "70,164,862" },
      { value: 17967563, expected: "17,967,563" },
      { value: 1128757643, expected: "1,128,757,643" },
    ])("$value가 $expected로 변환된다.", ({ value, expected }) => {
      expect(convertToNumberFormat(value)).toBe(expected);
    });
  });
});
