export class Calculator {
  add(numbers: string) {
    if (numbers === undefined) return 0;
    if (numbers === "") return 0;
    const numbersArray = numbers.split(",");
    return numbersArray.reduce(
      (sum, currentValue) => (sum += parseInt(currentValue)),
      0
    );
  }
}
