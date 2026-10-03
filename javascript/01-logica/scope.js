// 1. Create an if (true) { }.
// Inside it, declare var nomeVar = "var" and let nomeLet = "let".
// Outside the if, use console.log(nomeVar) and console.log(nomeLet).
// Run it. One works and the other throws an error.
// Comment above each console.log what happened and why.

if (true) {
    var nomeVar = "var";
    let nomeLet = "let";
}

// Works because var does not have block scope (if).
console.log(nomeVar)

// Throws an error because let has block scope and only exists inside the if.
console.log(nomeLet);


const country = "Brazil";
country = "Greece";

// This causes an error because a const variable cannot be reassigned after it is initialized.
//country = "Greece";