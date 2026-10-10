// ✋ 1: map
//
// Use this array: const numbers = [3, 8, 12, 5, 20]
//
// Generate an array with each number doubled. Expected: [6, 16, 24, 10, 40]. OK
// Generate an array of strings with the position and value, such as "1: 3", "2: 8", etc. OK
// (Hint: the map callback receives a second parameter.) OK
// From ["10", "25", "7"], generate [10, 25, 7] (numbers, not strings). OK + tested the other way around

const numbers = [3, 8, 12, 5, 20];

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);

const positions = [2, 4, 6, 7, 9];

const positionsAndValues = positions.map((position, index) => {
    return index + 1 + ": " + position;
});

console.log(positionsAndValues);

const numbersAsStrings = ["10", "25", "7"];

const stringsToNumbers = numbersAsStrings.map((number) => {
    return Number(number);
});

console.log(stringsToNumbers);