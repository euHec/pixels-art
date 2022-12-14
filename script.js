// capturando elementos
const body = document.querySelector('body');

// funções

const creath1 = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  body.appendChild(title);
};

const creatPallet = () => {
  const palletColors = ['black', 'white', 'green', 'red']
  const sectionPalett = document.createElement('section');
  sectionPalett.id = 'pai-colorPalette';
  body.appendChild(sectionPalett);
  const getSectionPalette = document.querySelector('#pai-colorPalette');
  for (let index = 0; index < palletColors.length; index += 1) {
    const palett = document.createElement('div');
    palett.id = 'color-palette';
    palett.className = 'color';
    getSectionPalette.appendChild(palett);
  }
};
// inicialização da página
window.onload = () => {
  creath1();
  creatPallet();
};