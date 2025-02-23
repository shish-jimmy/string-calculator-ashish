import { add } from "./StringCalculator";

describe("StringCalculator Kata", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4,5,8,0")).toBe(23);
  });
  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it("should support custom single character delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  it("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2,-4");
  });
  it("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });
});
