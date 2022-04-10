import './drinks.scss';
import DRINK_CARD from './drinks.html';
import { setDrinkData } from '../../utils/getDrinks';

export const createCard = async (nDrinks) => {
    const slider = document.querySelector(".slider__container");
    const card  = DRINK_CARD;
    for (let i = 0; i<nDrinks; i++) {
        if(i <= nDrinks) {
            slider.insertAdjacentHTML("afterbegin", card);
        }
        setDrinkData();
        let botones = await document.querySelectorAll(".btn");
        botones = [...botones]
        addButtonEvent({botones});
    }
}

export const addButtonEvent = ({botones}) => {
    const haceClick = function() {
        console .log(this)
    }
    botones.forEach(element => {
        element.addEventListener("click", haceClick);
    });
}