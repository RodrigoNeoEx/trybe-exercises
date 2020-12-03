//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste = [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

function highterIndex(highterValue) {  
  let numbers = 0;
  for (let index in highterValue) {
    if (highterValue[numbers] < highterValue[index]) {
      numbers = index      
    }    
  }
  return numbers;
} 
console.log(highterIndex([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .

function lowerIndex(lowerValue) {  
  let numbers = 0;
  for (let index in lowerValue) {
    if (lowerValue[numbers] > lowerValue[index]) {
      numbers = index      
    }    
  }
  return numbers;
} 
console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3]));


//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .


function mostCharacter(name) {
  let contain = [];
  for (let index in name) {
    if (name[index].length > name.length)
    contain = name[index]
  }
  return contain
}

console.log(mostCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .

function mostRepeat(numbers) {
  let number = [];

  for (let index = 0; index < numbers.length; index += 1) {
    let integer = numbers[index];
    if (number[integer] === undefined) {
      number[integer] = 1;
    } else {
      number[integer] = number[integer] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in number) {
    if (contRepetido < number[prop]) {
      contRepetido = number[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(mostRepeat([2, 3, 2, 5, 8, 2, 3])); //2