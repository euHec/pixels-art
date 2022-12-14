// capturando elementos globais
const body = document.querySelector('body');

// funções
const creath1 = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  body.appendChild(title);
};

const creatPallet = () => {
  const palletColors = ['black', 'orange', 'green', 'red']
  const sectionPalett = document.createElement('section');
  sectionPalett.id = 'color-palette';
  body.appendChild(sectionPalett);
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

// inicialização da página
window.onload = () => {
  creath1();
  creatPallet();
};