const statesArray = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']

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

window.onload = function() {
  createOptions();  
}

