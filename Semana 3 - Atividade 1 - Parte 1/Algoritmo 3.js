// Algoritmo 3

const numbers = [1, 2, 3, 4, 5]; // Um ArrayList de números
const isOdd = (x) => x % 2; // Declaração de arrow function onde é passado um parâmetro (x) e retornado o calculo do resto desse parâmetro
// console.log(numbers.map(isOdd));
const output = numbers.filter(isOdd); // Variável que guarda um novo ArrayList, gerado da execução da função filter sobre o arraList numbers, onde retorna somente os elementos que não tem resto zero, do processamento feito pela função isOdd passada como parâmetro no filter
console.log(output); // Imprimir na saída(console) a variável output

// Aqui temos um algoritmo que filtrar(retirar) os valores que não divisiveis diretamente por 2 de uma lista de números