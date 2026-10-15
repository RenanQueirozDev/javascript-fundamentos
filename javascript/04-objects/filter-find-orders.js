/*
Com filter, devolva os pares de [1, 2, 3, 4, 5, 6]. Esperado: [2, 4, 6].
Com find, devolva o primeiro número maior que 5 de [3, 8, 2, 9]. Esperado: 8.
Calcule o faturamento de pedidos, ignorando os de qtd igual a 0, em uma cadeia filter, map e reduce. Esperado: 1260.
js
 */

const even = [1,2,3,4,5,6];
console.log(even.filter((even) => even % 2 === 0))

const numbers = [3, 8, 2, 9];
console.log(numbers.find((numbers) => numbers > 5));



