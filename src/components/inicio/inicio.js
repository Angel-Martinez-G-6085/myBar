import './inicio.scss';
import INICIO from './inicio.html';
import { createCard } from '../drinks/drinks';

export const loadInicio = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
  createCard(5);
};