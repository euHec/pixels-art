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
const sectionPalette = document.querySelector('#section-palette');
const sectionButton = document.querySelector('#section-button');
const getSectionPalette = document.querySelector('#color-pixel');
// funções
// Criando paleta de cores
function creatPalette(turn) {
  for (let index = 0; index < turn; index += 1) {
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
  localStorage.setItem('colorPalette', `${sectionPalette.innerHTML}`);
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
  sectionPalette.innerHTML = localStorage.getItem('colorPalette');
};

const creatPixell = () => {
  const creatDivPallet = document.createElement('div');
  creatDivPallet.className = 'pixel-board';
  getSectionPalette.appendChild(creatDivPallet);
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    creatDivPallet.appendChild(line);
    for (let index1 = 0; index1 < 5; index1 += 1) {
      const colun = document.createElement('div');
      colun.className = 'pixel';
      line.appendChild(colun);
    }
  }
};

// const creatPixell = () => {
//   // elemento, idElemento, posicao, text, classElement
//   for (let colun = 0; colun < 5; colun += 1) {
//     creatElements('div', 'pixel-board', getSectionPalette, '', '');
//     for (let line = 0; line < 5; line += 1) {
//       const divColun = document.querySelector('#pixel-board');
//       creatElements('div', 'pixel-board', divColun, '', 'pixel');
//     }
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
  // criando pallets
  creatPalette(4);
  // Criando botão
  creatButton();
  // Pintando paletas
  paintDivsColor();
  // Criando matriz
  creatPixell();
  // Restaurando as cores das paletas salvas no local storage
  reloadStore();
};
