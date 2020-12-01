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