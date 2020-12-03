//Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
//-->Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: Bem-vinda, Margarida
console.log('Bem Vinda, ' + info.personagem);
//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim';
console.log(info);
//Valor esperado no console:
//  {
//    personagem: 'Margarida',
//   origem: 'Pato Donald',
//    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//    recorrente: 'Sim'
//  };

//Faça um for/in que mostre todas as chaves do objeto.
for(let key in info){
  console.log(key);
};
//Valor esperado no console:
//personagem
//origem
//nota
//recorrente
//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(let key in info){
  console.log(info[key]);
}
//Valor esperado no console:
//Margarida
//Pato Donald
//Namorada do personagem principal nos quadrinhos do Pato Donald
//Sim

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
let tio = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in info) {
  if (info[key] === 'Sim' && tio[key] === 'Sim' && key === 'recorrente') {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + tio[key]);
  };
};

//Valor esperado no console:
//Margarida e Tio Patinhas
//Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
//Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
//Ambos recorrentes // Atenção para essa última linha!
