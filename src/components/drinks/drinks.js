import './drinks.scss';
import DRINK_CARD from './drinks.html';
import { setDrinkData } from '../../utils/getDrinks';

export const createCard = (nDrinks) => {
    const slider = document.querySelector(".slider__container");
    const card  = DRINK_CARD;
    for (let i = 0; i<nDrinks; i++) {
        if(i <= nDrinks) {
            slider.insertAdjacentHTML("afterbegin", card);
        }
        setDrinkData();
    }
}