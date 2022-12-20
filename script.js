/* eslint-disable max-params */
// função principal
function creatElements(elemento, idElemento, posicao, text, classElement) {
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
}
// capturando elementos globais
const body = document.querySelector('body');

// funções
// Criando paleta de cores
function creatPalette(turn) {
  for (let index = 0; index < turn; index += 1) {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const sectionPalette = document.querySelector('#section-palette');
    // elemento, idElemento, posicao, text, classElement
    creatElements('div', 'color-palette', sectionPalette, '', 'color');
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
  const setPalette = document.querySelector('#section-palette');
  localStorage.setItem('colorPalette', `${setPalette.innerHTML}`);
};
// Criando botão
const creatButton = () => {
  // elemento, idElemento, posicao, text, classElement
  creatElements('button', 'button-random-color', body, 'Cores aleatórias');
  // capturando o botão
  const button = document.querySelector('#button-random-color');
  // Adicionando evento para pintar
  button.addEventListener('click', paintDivsColor);
  button.addEventListener('click', saveLocalStorage);
};
// Função que pinta cores
const paintDivsColor = () => {
  const palletColors = ['rgb(0,0,0)'];
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
};
// função recarregar dados
const reloadStore = () => {
  const getPalette = document.querySelector('#section-palette');
  getPalette.innerHTML = localStorage.getItem('colorPalette');
};

// const creatPixell = (turn) => {
//   const getSectionPalette = document.querySelector('#color-pixel');
//   for (let index = 0; index < turn; index += 1) {
//     // elemento, idElemento, posicao, text, classElement
//     creatElements('div', 'pixel-board', getSectionPalette, '', 'pixel');
//   }
// };

// const paintDivs = () => {
//   const getDivColors = document.querySelectorAll('.color');
//   for (let index = 0; index < getDivColors.length; index += 1) {
//     getDivColors[index].addEventListener('click', (event) => {
//       localStorage.setItem('color', event.target.style.backgroundColor);
//     });
//   }
// };

// inicialização da página
window.onload = () => {
  // Criando elemento H1
  // elemento, idElemento, posicao, text, classElement
  creatElements('h1', 'title', body, 'Paleta de Cores');
  // Criando sessão dos pallets
  creatElements('section', 'section-palette', body);
  // criando pallets
  creatPalette(4);
  // Criando botão
  creatButton();
  // Pintando paletas
  paintDivsColor();
  // Criando section das divs
  creatElements('section', 'color-pixel', body, '', '');
  // Restaurando as cores das paletas salvas no local storage
  reloadStore();
};
