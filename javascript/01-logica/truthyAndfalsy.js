let valor = 0;

// previsao: falsy
if (valor) {
    console.log("0 e truthy");
} else {
    console.log("0 e falsy");
}

valor = "";

// previsao: falsy
if (valor) {
    console.log('"" e truthy');
} else {
    console.log('"" e falsy');
}

valor = "0";

// previsao: truthy
if (valor) {
    console.log('"0" e truthy');
} else {
    console.log('"0" e falsy');
}

valor = null;

// previsao: falsy
if (valor) {
    console.log("null e truthy");
} else {
    console.log("null e falsy");
}

valor = undefined;

// previsao: falsy
if (valor) {
    console.log("undefined e truthy");
} else {
    console.log("undefined e falsy");
}

valor = NaN;

// previsao: falsy
if (valor) {
    console.log("NaN e truthy");
} else {
    console.log("NaN e falsy");
}

valor = -1;

// previsao: truthy
if (valor) {
    console.log("-1 e truthy");
} else {
    console.log("-1 e falsy");
}

valor = [];

// previsao: truthy
if (valor) {
    console.log("[] e truthy");
} else {
    console.log("[] e falsy");
}