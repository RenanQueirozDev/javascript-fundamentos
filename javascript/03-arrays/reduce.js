// ✋ 2: reduce
//
// Sum [3, 5, 2]. Expected: 10. OK
// Product of [3, 5, 2]. Expected: 30. Write down the initial value you used. OK
// Largest number in [4, 9, 2, 7]. Expected: 9. OK

const numbers = [3, 5, 2];

const sum = numbers.reduce((accumulator, number) => {
    return accumulator + number;
}, 0);

console.log(sum);


const numbers = [3, 5, 2];

const product = numbers.reduce((accumulator, number) => {
    return number * accumulator;
}, 1);

console.log(product);


const numbers = [4, 9, 2, 7];

const largest = numbers.reduce((accumulator, number) => {
    if (accumulator > number) {
        return accumulator;
    }
    return number;
});

console.log(largest);