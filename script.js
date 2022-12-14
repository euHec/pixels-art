// capturando elementos
const body = document.querySelector('body');

// funções

const creath1 = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de cores';
  body.appendChild(title);
};

creath1();
// inicialização da página
// window.onload = () => {
//   creath1();
// };

