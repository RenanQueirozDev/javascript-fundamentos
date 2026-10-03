// isOddOrEven (01-odd-or-even.js, in the 02-functions/ folder)
//
// Create function isOddOrEven(n). It returns:
//
// "invalid" if n is not an integer
// "even" or "odd" in all other cases
//
// There is no console.log inside the function.
// Outside, call and print these 5 cases:
//
// isOddOrEven(4)     isOddOrEven(7)     isOddOrEven(0)
// isOddOrEven(2.5)   isOddOrEven("abc")


function isOddOrEven(n) {
    if (!Number.isInteger(n)) {
        return "invalid";
    } else if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(isOddOrEven(4));
console.log(isOddOrEven(7));
console.log(isOddOrEven(0));
console.log(isOddOrEven(2.5));
console.log(isOddOrEven("abc"));