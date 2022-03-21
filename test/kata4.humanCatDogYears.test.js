const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns array of human, cat, and dog years when passed human years", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    expect(humanCatDogYears(7)).toEqual([7, 44, 49]);
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});

// Look Ma, no handlebars!!!
