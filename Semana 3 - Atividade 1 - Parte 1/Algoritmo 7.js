// Algoritmo 7
let estudantes =[ // Variável que armazenar um ArrayList de objetos. Sendo que cada objeto tem suas propriedades: nome e idade
  {nome:"João", idade:15},
  {nome:"Maria", idade:20},
  {nome:"Felipe", idade:22},
  {nome:"Pedro", idade:12},
  {nome:"Joana", idade:18},
 ];
 const details = estudantes.filter((x)=> x.idade >= 18); // Variável que armazenar um novo ArrayList resultante da ação da função filter que irá analisar e retorna os elementos do Arraylist estudantes que são maiores ou igual a 18 anos de idades
 console.log(details.length); // Mostrar na saída a quantidade de elementos da variável details