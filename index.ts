export class Calculator {
  add(numbers: string) {
    if (numbers === undefined) return 0;
    if (numbers === "") return 0;
    if(numbers.includes(',\n')) return "invalid input"
    let numbersArray = numbers.split(",");
    numbersArray = numbersArray.flatMap((item) => item.split("\n"));
    return numbersArray.reduce(
      (sum, currentValue) => (sum += parseInt(currentValue)),
      0
    );
  }
}
