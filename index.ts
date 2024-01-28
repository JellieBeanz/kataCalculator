export class Calculator {
  add(numbers: string) {
    if (numbers === undefined) return 0;
    if (numbers === "") return 0;
    if (numbers.includes(",\n")) return "invalid input";
    let numbersArray: string[] = [];
    if (numbers.startsWith("//")) {
      const endDelimiter = numbers.indexOf("\n");
      const delimiter = numbers.substring(2, endDelimiter);
      numbers = numbers.substring(endDelimiter + 1, numbers.length);
      numbersArray = numbers.split(delimiter);
    }
    if (!numbersArray.length) {
      numbersArray = numbers.split(",");
    } else {
      numbersArray = this.flatMapWithDelimiter({
        delimiter: ",",
        inputArray: numbersArray,
      });
    }
    numbersArray = this.flatMapWithDelimiter({
      delimiter: "\n",
      inputArray: numbersArray,
    });

    return numbersArray.reduce(
      (sum, currentValue) => (sum += parseInt(currentValue)),
      0
    );
  }

  private flatMapWithDelimiter(args: {
    delimiter: string;
    inputArray: string[];
  }) {
    return args.inputArray.flatMap((item) => item.split(args.delimiter));
  }
}
