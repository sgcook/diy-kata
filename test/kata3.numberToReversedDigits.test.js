const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
  });
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(4903)).toStrictEqual([3, 0, 9, 4]);
  });
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(654302)).toStrictEqual([2, 0, 3, 4, 5, 6]);
  });
});
