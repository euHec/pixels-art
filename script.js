// função principal
const creatElements = (elemento, idElemento, posicao, text, classElement) => {
  const criando = document.createElement(elemento);
  if (text !== undefined) { criando.innerText = text; }
  if (classElement !== undefined) { criando.className = classElement; }
  if (criando !== undefined) { criando.id = idElemento; }
  posicao.appendChild(criando);
};
// capturando elementos globais
const body = document.querySelector('body');
const palletColors = ['black'];

// funções
const creatPallet = (turn) => {
  const getSectionPalette = document.querySelector('#color-palette');
  for (let index = 0; index < turn; index += 1) {
    // eslint-disable-next-line sonarjs/no-use-of-empty-return-value
    creatElements('div', '', getSectionPalette, '', 'color');
    const getDivs = document.querySelectorAll('.color');
  }
};

const createbutton = () => {
  const setbuton = document.createElement('button');
  setbuton.id = 'button-random-color';
  setbuton.innerText = 'Cores aleatórias';
  body.appendChild(setbuton);
  // eslint-disable-next-line no-use-before-define
  setbuton.addEventListener('click', paintDivsColor);
};

const randomColors = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};


// inicialização da página
window.onload = () => {
  // elemento, idElemento, posicao, text, classElement
  creatElements('h1', 'title', body, 'Paleta de Cores');
  creatElements('section', 'color-palette', body);
  creatPallet(4);
  createbutton();
};
