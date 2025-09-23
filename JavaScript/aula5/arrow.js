const lambda = (filmes) => {
  return `nome: Frodo, idade: ${filmes}`;
}

const numeros = [10, 20, 87];
numeros.forEach((numero, index) => {
  console.log(`O numero da posição ${index} é: ${numero}`);
});