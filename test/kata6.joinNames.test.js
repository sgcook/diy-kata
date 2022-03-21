const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart"
        },
        {
          name: "Lisa"
        },
        {
          name: "Maggie"
        }
      ])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "John"
        },
        {
          name: "George"
        },
        {
          name: "Susan"
        },
        {
          name: "Ross"
        },
        {
          name: "Philip"
        }
      ])
    ).toEqual("John, George, Susan, Ross & Philip");
    expect(
      joinNames([
        {
          name: "Emma"
        },
        {
          name: "Bob"
        }
      ])
    ).toEqual("Emma & Bob");
  });
});
