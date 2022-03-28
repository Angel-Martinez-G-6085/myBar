import './footer.scss';
import FOOTER from './footer.html';

export const loadFooter = () => {
  const mainContainer = document.querySelector('.main-container');
  mainContainer.insertAdjacentHTML('beforeend', FOOTER);
};
