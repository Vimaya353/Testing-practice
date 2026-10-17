
import {
  capitalize,
  reverseString
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
