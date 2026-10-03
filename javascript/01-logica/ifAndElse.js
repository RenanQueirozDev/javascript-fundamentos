// Note: the grade (0 to 10) shows "Approved" (≥ 7),
// "Recovery" (5 to 6.9), "Failed" (< 5) or "Invalid" (outside 0 to 10).

let nota = 10;
if (nota > 10 || nota < 0) {
    console.log("Invalid");
} else if(nota >= 7) {
    console.log("Approved");
} else if (nota >= 5 ) {
    console.log("Recovery");
} else if (nota < 5 ) {
    console.log("Failed");
}