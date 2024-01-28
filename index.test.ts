import { expect, test } from "bun:test";
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
})
