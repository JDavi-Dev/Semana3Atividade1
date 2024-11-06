// Algoritmo 1
const numeros = [1, 2, 3, 4, 5]; // Um ArrayList de números
let calcularDobro = (numero) => numero * 2; // Declaração de uma função arrow function, onde é passando um parâmetrom número que será retornado a multiplicação por 2
const numerosDobro = numeros.map(calcularDobro); // Declaração de variável que guarda o ArrayList numeros retornado da iteração de cada elemento da função map() que recebe como parâmetro a função calcularDobro
console.log(numerosDobro); // Mostrar na saída o ArrayList numeros já modificado pela função calcularDobro

// Em resumo é um algoritmo que calcular o dobro de cada elemento de um ArrayList por meio de um funções
