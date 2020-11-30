//Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let positio
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}
console.log(position)
//Ordene o array numbers em ordem crescente e imprima seus valores;
//Ordene o array numbers em ordem decrescente e imprima seus valores;

//Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:


//