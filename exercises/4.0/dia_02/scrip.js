//Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log("Resultado Exercicio 1")
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}
console.log(" ")
// exercicio 2 
//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
console.log("Resultado Exercicio 2")
for(let index = 0; index < numbers.length; index += 1){
  console.log((numbers[index])*2);
}
console.log(" ")
//exercicio 3 
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
console.log("Resultado Exercicio 3")
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
}
console.log((soma) / numbers.length);
console.log(" ")
// exercicio 4 
//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log("Resultado Exercicio 4")
let total = soma / numbers.length;

if(total > 20){
  console.log("valor maior que 20");
}else{
  console.log("valor menor ou igual a 20");
}
console.log(" ")
//exercicio 5 
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log("Resultado Exercicio 5")
let highterNumber = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > highterNumber){
    highterNumber = numbers[index];
  }
}
console.log(highterNumber);
console.log(" ")
//exercicio 6 
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log("Resultado Exercicio 6")
let odd = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 === 1){
    odd = odd + 1;
  }
}
if (odd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(odd);
}

console.log(" ")
// exercicio 7 
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log("Resultado Exercicio 7")
let lowerNumber = numbers[0]

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < lowerNumber){
    lowerNumber = numbers[index];
  }
}
console.log(lowerNumber);
