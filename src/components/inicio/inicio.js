import './inicio.scss';
import INICIO from './inicio.html';
import { createCard } from '../drinks/drinks';

export const loadInicio = async () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
  await createCard(5);
};