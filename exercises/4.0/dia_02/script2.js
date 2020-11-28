//Exercicio 08
//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
console.log("resultado exercicio 08")
let container = [];

for (let index = 1; index <= 25; index += 1) {
  container.push(index);
}
console.log(container);

console.log('')
console.log('resultado exercicio 09')
//Exercicio 09
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let index = 0; index < container.length; index += 1) {
  console.log(container[index] / 2);
};