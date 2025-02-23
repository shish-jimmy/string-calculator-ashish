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
    expect(add("1\n2,4")).toBe(7);
  });
  it("should support custom single character delimiter", () => {
    expect(add("//;\n1;1000")).toBe(1001);
  });
  it("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2,-4");
  });
  it("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });
  it("should support multi-character delimiters", () => {
    expect(add("//[***]\n1***2***5")).toBe(8);
  });

  it("should support multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3,4")).toBe(10);
  });

  it("should support multiple delimiters with different lengths", () => {
    expect(add("//[**][%%%%][%%%]\n1**2%%%3%%%%5")).toBe(11); 
  });
  
  it("should throw an error for negative numbers with custom delimiters", () => {
    expect(() => add("//[***]\n1***-1***3***-4")).toThrow("Negatives not allowed: -1,-4");
  });
  it("should throw an error for negative numbers with multiple custom delimiters", () => {
    expect(() => add("//[*][%]\n1*-2%3*-4")).toThrow("Negatives not allowed: -2,-4");
  });
  it("should throw an error for negative numbers with multiple custom delimiters of different lengths", () => {
    expect(() => add("//[**][%%%]\n1**-400%%%3**-4")).toThrow("Negatives not allowed: -400,-4");
  });
});
