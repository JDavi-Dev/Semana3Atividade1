// Algoritmo 5
const users = [ // Variável que armazenar um ArrayList de objetos. Sendo que cada objeto tem suas propriedades: firstName, lastName e age
  { firstName: 'john', lastName: 'colben', age: 26 },
  { firstName: 'jimmy', lastName: 'fred', age: 75 },
  { firstName: 'sam', lastName: 'boston', age: 50 },
  { firstName: 'ronald', lastName: 'bristh', age: 26 },
];
const output = users.map((x) => x.firstName + ' ' + x.lastName); // Variável que guarda um novo Arraylist gerando da execução da função map que iterar sobre cada elemento do ArrayList users. Como retorno temos a junção do primeiro nome com o ultimo nome de cada elemento passado como parametro na função map.
console.log(output); // Expõe na saída(terminal) a variável output

// Algoritmo que unir o primeiro nome de um usuário com o ultimo nome