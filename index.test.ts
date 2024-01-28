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

describe("Allow the add method to allow new line as separator ", () => {
  test("given 1\n2,3 calling add returns 6", () => {
    const calculator = new Calculator();
    const input = "1\n2,3";

    const result = calculator.add(input);

    expect(result).toBe(6);
  });
  test("given 1,\n2 calling add will return invalid input", () => {
    const calculator = new Calculator();
    const input = "1,\n2";

    const result = calculator.add(input);

    expect(result).toBe("invalid input");
  });
});

describe("allow custom delimiters", () => {
  test("Given //;\n1;2\n3 to return 6", () => {
    const calculator = new Calculator();
    const input = "//;\n1;2\n3";

    const result = calculator.add(input);

    expect(result).toBe(6);
  });

  test("Given //$\n1$2\n3 to return 6", () => {
    const calculator = new Calculator();
    const input = "//$\n1$2\n3";

    const result = calculator.add(input);

    expect(result).toBe(6);
  });

  test("Given //$\n1$2\n3,6 to return 12", () => {
    const calculator = new Calculator();
    const input = "//$\n1$2\n3,6";

    const result = calculator.add(input);

    expect(result).toBe(12);
  });

  test("Given //$$\n1$$2\n3,6 to return 12", () => {
    const calculator = new Calculator();
    const input = "//$$\n1$$2\n3,6";

    const result = calculator.add(input);

    expect(result).toBe(12);
  });
});
