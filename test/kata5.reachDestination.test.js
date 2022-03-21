const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(21, 8)).toBe("I should be there in 3 hours.");
    expect(reachDestination(199, 60)).toBe("I should be there in 3.5 hours.");
  });
});
