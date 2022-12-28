// função principal
const creatElements = (elemento, idElemento, posicao, text, classElement) => {
  const criando = document.createElement(elemento);
  if (text !== undefined) {
    criando.innerText = text;
  }
  if (classElement !== undefined) {
    criando.className = classElement;
  }
  if (criando !== undefined) {
    criando.id = idElemento;
  }
  posicao.appendChild(criando);
};

// capturando elementos globais
const body = document.querySelector('body');
const sectionPalette = document.querySelector('#section-palette');
const sectionButton = document.querySelector('#section-button');
const getSectionPalette = document.querySelector('#color-pixel');
const sectionInput = document.querySelector('#section-inputs');
const colorPalette = localStorage.getItem('colorPalette');
const pixelBoard = localStorage.getItem('pixelBoard');
const boardSize = localStorage.getItem('boardSize');

// Criando paleta de cores
function creatPalette(turn) {
  for (let index = 0; index < turn; index += 1) {
    const generetePalette = document.createElement('div');
    generetePalette.id = 'color-palette';
    generetePalette.className = 'color';
    sectionPalette.appendChild(generetePalette);
  }
}

// cores randomicas
const randomColors = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

// função para guardar dados
const saveColorPalette = () => {
  localStorage.setItem('colorPalette', `${sectionPalette.innerHTML}`);
};

const savePixelBoard = () => {
  localStorage.setItem('pixelBoard', `${getSectionPalette.innerHTML}`);
};

const saveBoardSize = () => {
  const getInput = document.querySelector('#board-size');
  localStorage.setItem('boardSize', `${getInput.value}`);
};

// Função que pinta cores
const paintDivsColor = () => {
  const getDivColors = document.querySelectorAll('.color');
  const palletColors = ['rgb(0,0,0)'];
  // gerando cores aleatórias e adicionando ao array
  for (let index = 1; index < getDivColors.length; index += 1) {
    palletColors.push(randomColors());
  }
  const verify = palletColors[1];
  // Validando as cores e caso seja repetido altera a cor repetida
  for (let index = 2; index < palletColors.length; index += 1) {
    if (palletColors[index] === verify) {
      palletColors.splice(index, index, randomColors());
    }
  }
  // Pintando as paletas
  for (let index = 0; index < palletColors.length; index += 1) {
    getDivColors[index].style.backgroundColor = palletColors[index];
  }
  saveColorPalette();
};

const verify = () => {
  if (colorPalette) {
    sectionPalette.innerHTML = localStorage.getItem('colorPalette');
  } else {
    paintDivsColor();
  }
  if (pixelBoard) {
    getSectionPalette.innerHTML = localStorage.getItem('pixelBoard');
  }
};

// Criando botão
const creatButton = () => {
  // elemento, idElemento, posicao, text, classElement
  creatElements('button', 'button-random-color', sectionButton, 'Cores aleatórias');
  // capturando o botão
  const button = document.querySelector('#button-random-color');
  // Adicionando evento para pintar
  button.addEventListener('click', paintDivsColor);
};

// Função para capturar cores
// eslint-disable-next-line max-lines-per-function
const selectedColor = () => {
  const getColors = document.querySelectorAll('#color-palette');
  getColors[0].className = 'color selected';
  for (let index = 0; index < getColors.length; index += 1) {
    getColors[index].addEventListener('click', () => {
      for (let index1 = 0; index1 < getColors.length; index1 += 1) {
        if (getColors[index1].className === 'color selected') {
          getColors[index1].className = 'color';
        }
      }
      if (getColors[index].className === 'color') {
        getColors[index].className = 'color selected';
      }
    });
  }
};

// Função para pintar cores
const paintPixels = () => {
  const getPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      getPixels[index].style.backgroundColor = `${selected.style.backgroundColor}`;
      savePixelBoard();
    });
  }
};

// Função para limpar quadro de pixels
const clearPixel = () => {
  // elemento, idElemento, posicao, text, classElement
  creatElements('button', 'clear-board', sectionButton, 'Limpar');
  // capturando o botão
  const buttonClear = document.querySelector('#clear-board');
  // Adicionando evento para limpar as cores
  buttonClear.addEventListener('click', () => {
    const getPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < getPixels.length; index += 1) {
      getPixels[index].style.backgroundColor = 'rgb(255,255,255)';
    }
    savePixelBoard();
  });
};

// Função que cria pixells
// eslint-disable-next-line max-lines-per-function, complexity, sonarjs/cognitive-complexity
const creatPixell = (turn) => {
  const creatDivPallet = document.createElement('div');
  creatDivPallet.id = 'pixel-board';
  getSectionPalette.appendChild(creatDivPallet);

  if (turn >= 5 && turn <= 50) {
    for (let index = 0; index < turn; index += 1) {
      const line = document.createElement('div');
      creatDivPallet.appendChild(line);
      for (let index1 = 0; index1 < turn; index1 += 1) {
        const colun = document.createElement('div');
        colun.className = 'pixel';
        if (turn >= 30) {
          colun.style.height = '38px';
          colun.style.width = '38px';
        }
        if (turn >= 32) {
          colun.style.height = '36px';
          colun.style.width = '36px';
        }
        if (turn >= 34) {
          colun.style.height = '34px';
          colun.style.width = '34px';
        }
        if (turn >= 36) {
          colun.style.height = '32px';
          colun.style.width = '32px';
        }
        if (turn >= 38) {
          colun.style.height = '30px';
          colun.style.width = '30px';
        }
        if (turn >= 40) {
          colun.style.height = '28px';
          colun.style.width = '28px';
        }
        if (turn >= 42) {
          colun.style.height = '27px';
          colun.style.width = '27px';
        }
        if (turn >= 44) {
          colun.style.height = '26px';
          colun.style.width = '26px';
        }
        if (turn >= 46) {
          colun.style.height = '24px';
          colun.style.width = '24px';
        }
        if (turn >= 48) {
          colun.style.height = '23px';
          colun.style.width = '23px';
        }
        if (turn >= 50) {
          colun.style.height = '22px';
          colun.style.width = '22px';
        }
        line.appendChild(colun);
      }
    }
  }
  if (turn >= 1 && turn < 5) {
    for (let index = 1; index <= 5; index += 1) {
      const line = document.createElement('div');
      creatDivPallet.appendChild(line);
      for (let index1 = 1; index1 <= 5; index1 += 1) {
        const colun = document.createElement('div');
        colun.className = 'pixel';
        line.appendChild(colun);
      }
    }
  }
  if (turn > 50) {
    for (let index = 1; index <= 50; index += 1) {
      const line = document.createElement('div');
      creatDivPallet.appendChild(line);
      for (let index1 = 1; index1 <= 50; index1 += 1) {
        const colun = document.createElement('div');
        colun.className = 'pixel';
        line.appendChild(colun);
      }
    }
  }
  savePixelBoard();
};

// eslint-disable-next-line max-lines-per-function
const input = () => {
  const getInput = document.querySelector('#board-size');
  const getInputButton = document.querySelector('#generate-board');
  if (pixelBoard === null) {
    creatPixell(5);
  }
  getInputButton.addEventListener('click', () => {
    const idPixel = document.querySelectorAll('#pixel-board');
    if (idPixel) {
      for (let index = 0; index < idPixel.length; index += 1) {
        idPixel[index].remove();
      }
    }
    if (getInput.value === '') {
      alert('Board inválido!');
      verify();
    }
    creatPixell(getInput.value);
    saveBoardSize();
  });
};

// inicialização da página
window.onload = () => {
  // criando pallets
  creatPalette(4);
  // pintando paletas e salvando no localStorage
  verify();
  // inserindo botão
  creatButton();
  // selecionando cor
  selectedColor();
  // inserindo pixels
  input();
  // Pintando pixels
  paintPixels();
  // Limpando pixels
  clearPixel();

};
