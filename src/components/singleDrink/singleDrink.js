import './singleDrink.scss';
import SingleDrink from './singleDrink.html';

export const loadSingleDrink = () => {
    const header = document.querySelector(".header");
    header.insertAdjacentHTML("afterend", SingleDrink);
}