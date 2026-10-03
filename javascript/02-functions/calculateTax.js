// calculateShipping (02-calculate-shipping.js, in the 02-functions/ folder)
//
// Create function calculateShipping(purchaseValue, state), which returns the shipping cost:
//
// purchaseValue less than or equal to 0 -> null
// purchaseValue 200 or more -> 0 (free shipping)
// below 200: "MG" -> 15, "SP" or "RJ" -> 20, other states -> 30
//
// Use early return (direct return, without else). Outside the function, call and print these 5 cases:
//
// calculateShipping(250, "MG")   calculateShipping(100, "MG")   calculateShipping(100, "SP")
// calculateShipping(100, "BA")   calculateShipping(-5, "RJ")
//
// Expected results: 0, 15, 20, 30, null.

function calculateShipping(purchaseValue, state) {
    if (purchaseValue <= 0) {
        return null;
    }

    if (purchaseValue >= 200) {
        return 0;
    }

    if (state === "MG") {
        return 15;
    }

    if (state === "SP" || state === "RJ") {
        return 20;
    }

    return 30;
}

console.log(calculateShipping(250, "MG"));
console.log(calculateShipping(100, "MG"));
console.log(calculateShipping(100, "SP"));
console.log(calculateShipping(100, "BA"));
console.log(calculateShipping(-5, "RJ"));