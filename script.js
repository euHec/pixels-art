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

// funções
// Criando paleta de cores
const creatPallet = (turn) => {
  const getSectionPalette = document.querySelector('#color-palette');
  for (let index = 0; index < turn; index += 1) {
    // elemento, idElemento, posicao, text, classElement
    creatElements('div', '', getSectionPalette, '', 'color');
  }
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
// função para guardar dados
const saveLocalStorage = () => {
  // capturando as divs com classe color
  const getDivColors = document.querySelectorAll('.color');

  // Percorrendo as divs e imprimindo no console e adicionando ao local storage
  for (let index = 0; index < getDivColors.length; index += 1) {
    getDivColors[index].addEventListener('click', (event) => {
      console.log(event.target.style.backgroundColor);
      window.localStorage.setItem(`colorPalette${index}`, `${event.target.style.backgroundColor}`);
    });
  }
};
// função recarregar dados
const reloadStore = () => {
  const getDivColors = document.querySelectorAll('.color');
  for (let index = 0; index < localStorage.length; index += 1) {
    getDivColors[index].style.backgroundColor = localStorage.getItem(`colorPalette${index}`);
  }
};
// cores randomicas
const randomColors = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
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
  // elemento, idElemento, posicao, text, classElement
  creatElements('h1', 'title', body, 'Paleta de Cores');
  creatElements('section', 'color-palette', body);
  creatPallet(4);
  creatButton();
  creatElements('section', 'color-pixel', body);
  // creatPixell(25);
  reloadStore();
};
