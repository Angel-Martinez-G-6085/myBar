import './inicio.scss';
import INICIO from './inicio.html';

export const loadInicio = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
};
