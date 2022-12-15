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
// const palletColors = ['black'];

// funções
const creatPallet = (turn) => {
  const getSectionPalette = document.querySelector('#color-palette');
  for (let index = 0; index < turn; index += 1) {
    // elemento, idElemento, posicao, text, classElement
    creatElements('div', '', getSectionPalette, 'preen', 'color');
  }
};

const randomColors = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const paintDivsColor = () => {
  const palletColors = ['black'];
  const getDivColors = document.querySelectorAll('.color');
  for (let index = 1; index < getDivColors.length; index += 1) {
    palletColors.push(randomColors());
  }
  const verify = palletColors[1];
  for (let index = 2; index < palletColors.length; index += 1) {
    if (palletColors[index] === verify) {
      palletColors.splice(index, index, randomColors());
    }
  }
  for (let index = 0; index < palletColors.length; index += 1) {
    getDivColors[index].style.backgroundColor = palletColors[index];
  }
  const button = document.querySelector('#button-random-color');
  button.addEventListener('click', paintDivsColor);
};

const creatPixell = (turn) => {
  const getSectionPalette = document.querySelector('#color-pixel');
  for (let index = 0; index < turn; index += 1) {
    // elemento, idElemento, posicao, text, classElement
    creatElements('div', '', getSectionPalette, '', 'pixel');
  }
};
// inicialização da página
window.onload = () => {
  // elemento, idElemento, posicao, text, classElement
  creatElements('h1', 'title', body, 'Paleta de Cores');
  creatElements('section', 'color-palette', body);
  creatPallet(4);
  creatElements('button', 'button-random-color', body, 'Cores aleatórias');
  creatElements('section', 'color-pixel', body);
  creatPixell(25);
  paintDivsColor();
};
