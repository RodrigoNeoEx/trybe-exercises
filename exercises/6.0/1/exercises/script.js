const statesArray = ['Selecione seu Estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
                     'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']

function createOptions() {
  const states = document.getElementById('estado');

  for(let index = 0; index < statesArray.length; index += 1) {
    const stateOptions = document.createElement('option');
    states.appendChild(stateOptions);
  }
  for(let index = 0; index < statesArray.length; index += 1) {
    states[index].innerHTML = statesArray[index];
  }
}

function stopDefAction(event) {
  event.preventDefault();
}

function checkDate() {
  let date = document.getElementsByClassName('date')
  date = date.value.split('-')
  if(date[1] <= 0000) {
    alert('set a valid year')
  }
  if(date[2] = 0 || date[2] > 12 ) {
    alert('set a valid month')
  }
  if(date[3] = 0 || date[3] > 31) {
    alert('set a day between 1 and 31')
  }
}

function createSection() {
  const appendSection = document.getElementById('scriptSection')
  const cvSection = document.createElement('section');
  cvSection.id = 'checkCV';
  appendSection.appendChild(cvSection)
}
 
function confirmAllPersonalData() {  
  const cvSection = document.getElementById('checkCV'); 
  let getInput = document.querySelectorAll('.one input, select');

  for(let index = 0; index < getInput.length; index += 1) {   
    let div = document.createElement('div');
    div.innerHTML = `${getInput[index].name}: ${getInput[index].value}`
    cvSection.appendChild(div)
  }
  if(getInput[4].checked === true) {
    cvSection.removeChild(cvSection.children[5])
  }
  if(getInput[5].checked === true) {
    cvSection.removeChild(cvSection.children[4])
  }
}

function confirmAllPersonalProfile() {
  const cvSection = document.getElementById('checkCV'); 
  let getInput = document.querySelectorAll('.two input, textarea');
  for(let index = 0; index < getInput.length; index += 1) {
    let div = document.createElement('div');
    div.innerHTML = `${getInput[index].name}: ${getInput[index].value}`
    cvSection.appendChild(div)
  }
}

function cleanAll() {
  let trueOrFalse = document.getElementById('default')
  if(trueOrFalse.checked === true){
  document.querySelector('form').reset();
  document.getElementById('checkCV').remove();
 } else {
 alert('Pressione "Dados Confirmados" para continuar');
 }
}

function listeners() {
  const testeButtom = document.getElementById('submit');
  testeButtom.addEventListener('click', stopDefAction);
  testeButtom.addEventListener('click', createSection);
  testeButtom.addEventListener('click', confirmAllPersonalData);
  testeButtom.addEventListener('click', confirmAllPersonalProfile);

  document.getElementById('clean').addEventListener('click', cleanAll)
  document.getElementById('send').addEventListener('click', cleanAll);
}


window.onload = function() {
  createOptions();  
  listeners(); 
}

