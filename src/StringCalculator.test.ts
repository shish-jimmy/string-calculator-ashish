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
});
