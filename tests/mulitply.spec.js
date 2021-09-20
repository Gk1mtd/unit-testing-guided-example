const { multiply } = require("../calculator.js");

describe("Multiply", () => {
  test("should multiply up two integers correctly", () => {
    const result = multiply(2, 5);
    expect(result).toBe(10);
  });

  test("should mulitplys a negative and a positive number correctly", () => {
    const result = multiply(-2, 5);
    expect(result).toBe(-10);
  });

  test("Function is called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0).", () => {
    const result = multiply(5, 0);
    expect(result).toBe(0);
  });
});
