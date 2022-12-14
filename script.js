// capturando elementos globais
const body = document.querySelector('body');

// funções
const creath1 = () => {
  const setH1 = document.createElement('h1');
  setH1.id = 'title';
  setH1.innerText = 'Paleta de Cores';
  body.appendChild(setH1);
};

const creatPallet = () => {
  const palletColors = ['black', 'orange', 'green', 'red']
  const setSection = document.createElement('section');
  setSection.id = 'color-palette';
  body.appendChild(setSection);
  const getSectionPalette = document.querySelector('#color-palette');
  for (let index = 0; index < palletColors.length; index += 1) {
    const palett = document.createElement('div');
    palett.className = 'color';
    if (palletColors[index] !== 'white') {
      palett.style.background = palletColors[index];
    } else {
      alert('Cor branca não é permitida');
    }
    getSectionPalette.appendChild(palett);
  }
};

const createbutton = () => {
  const setbuton = document.createElement('button');
  setbuton.id = 'button-random-color';
  setbuton.innerText = 'Cores aleatórias';
  setbuton.addEventListener('click', () => {

  })
  body.appendChild(setbuton);
};

// inicialização da página
window.onload = () => {
  creath1();
  createbutton();
  creatPallet();
};