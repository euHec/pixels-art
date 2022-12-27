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
const colorPalette = localStorage.getItem('colorPalette');

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
const saveLocalStorage = () => {
  // capturando as divs com classe color
  localStorage.setItem('colorPalette', `${sectionPalette.innerHTML}`);
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
};

const verify = () => {
  if (colorPalette) {
    sectionPalette.innerHTML = localStorage.getItem('colorPalette');
  } else {
    paintDivsColor();
    saveLocalStorage();
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
  button.addEventListener('click', saveLocalStorage);
};

// Função que cria pixells
const creatPixell = (turn1, turn2) => {
  const creatDivPallet = document.createElement('div');
  creatDivPallet.className = 'pixel-board';
  getSectionPalette.appendChild(creatDivPallet);
  for (let index = 0; index < turn1; index += 1) {
    const line = document.createElement('div');
    creatDivPallet.appendChild(line);
    for (let index1 = 0; index1 < turn2; index1 += 1) {
      const colun = document.createElement('div');
      colun.className = 'pixel';
      line.appendChild(colun);
    }
  }
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
  saveLocalStorage();
};

// Função para pintar cores
const paintPixels = () => {
  const getPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      console.log(selected.style.backgroundColor);
      getPixels[index].style.backgroundColor = `${selected.style.backgroundColor}`;
    });
  }
};

// inicialização da página
window.onload = () => {
  // criando pallets
  creatPalette(4);

  // pintando paletas e salvando no localStorage
  verify();

  // inserindo botão
  creatButton();

  // inserindo pixels
  creatPixell(5, 5);

  // selecionando cor
  selectedColor();

  // Pintando pixels
  paintPixels();
};
