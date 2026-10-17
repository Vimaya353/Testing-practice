
import {
  capitalize,
  reverseString,
  calculator
} from "../functions";

describe("capitalize", () => {
  test("capitalizes the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("keeps the remaining characters unchanged", () => {
    expect(capitalize("hELLo")).toBe("HELLo");
  });
});

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("works with a single character", () => {
    expect(reverseString("a")).toBe("a");
  });
});



describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });
});
