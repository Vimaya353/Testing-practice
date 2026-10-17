
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
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


describe("caesarCipher", () => {
  test("shifts letters by the given factor", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves uppercase and lowercase letters", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("works with a shift larger than 26", () => {
    expect(caesarCipher("abc", 29)).toBe("def");
  });

  test("works with a shift of zero", () => {
    expect(caesarCipher("Hello!", 0)).toBe("Hello!");
  });
});


describe("analyzeArray", () => {
  test("returns average, min, max, and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test("works with a single number", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test("works with negative numbers", () => {
    expect(analyzeArray([-2, -4, -6])).toEqual({
      average: -4,
      min: -6,
      max: -2,
      length: 3
    });
  });

  test("works with decimal numbers", () => {
    expect(analyzeArray([1.5, 2.5])).toEqual({
      average: 2,
      min: 1.5,
      max: 2.5,
      length: 2
    });
  });
});


