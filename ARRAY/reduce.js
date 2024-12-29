// Cria um array com os números de 1 a 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utiliza o método reduce para somar todos os elementos do array
// `acumulador` guarda a soma parcial e `atual` é o valor atual do elemento do array
const resultado = arr.reduce((acumulador, atual) => {
    console.log(acumulador, atual); // Exibe os valores de acumulador e atual durante cada iteração
    return acumulador + atual; // Retorna a soma do acumulador com o atual para a próxima iteração
});

// Exibe o resultado final da soma no console
console.log(resultado);

//O método reduce é uma função poderosa em JavaScript usada para "reduzir" um array a um único valor, aplicando uma função acumulativa em seus elementos, um por vez.

// //1 2   // acumulador: 1, atual: 2 → nova soma: 3
// //3 3   // acumulador: 3, atual: 3 → nova soma: 6
// //6 4   // acumulador: 6, atual: 4 → nova soma: 10
// //10 5  // acumulador: 10, atual: 5 → nova soma: 15
// //15 6  // acumulador: 15, atual: 6 → nova soma: 21
// 21 7  // acumulador: 21, atual: 7 → nova soma: 28
// 28 8  // acumulador: 28, atual: 8 → nova soma: 36
// 36 9  // acumulador: 36, atual: 9 → nova soma: 45
// 45 10 // acumulador: 45, atual: 10 → nova soma: 55
