import { describe, expect, test } from "bun:test";
import { Calculator } from ".";

test("Given an empty string, calling add returns 0", () => {
  const calculator = new Calculator();
  const input = "";

  const result = calculator.add(input);

  expect(result).toBe(0);
});

test("Given 1, calling add returns 1", () => {
  const calculator = new Calculator();
  const input = "1";

  const result = calculator.add(input);

  expect(result).toBe(1);
});

test("Given 1,2 calling add returns 3", () => {
  const calculator = new Calculator();
  const input = "1,2";

  const result = calculator.add(input);

  expect(result).toBe(3);
});

describe("Allow the add method to handle any amounts of numbers", () => {
  test("Given any amount of numbers, calling add returns a number", () => {
    const calculator = new Calculator();
    const input = "1,2,3,4,5,6";

    const result = calculator.add(input);

    expect(result).toBeTypeOf("number");
  });

  test("Given any amount of numbers, calling add returns greater than 0", () => {
    const calculator = new Calculator();
    const input = "1,2,3,4,5,6";

    const result = calculator.add(input);

    expect(result).toBeGreaterThan(0);
  });

  test("Given any amount of numbers, calling add returns greater than 0", () => {
    const calculator = new Calculator();
    const input = "1,2,3,4";

    const result = calculator.add(input);

    expect(result).toBe(10);
  });
});
