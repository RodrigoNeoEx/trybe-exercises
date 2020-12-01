//Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .
//verificaPalindrome("arara") ;
//Retorno esperado: true
//verificaPalindrome("desenvolvimento") ;
//Retorno esperado: false

function verificaPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}


console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false