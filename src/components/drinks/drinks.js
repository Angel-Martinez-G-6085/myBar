import './drinks.scss';
import DRINK_CARD from './drinks.html';
import DrinkListCard from './drinksList.html';
import { setDrinkData } from '../../utils/getDrinks';

export const createCard = async (nDrinks) => {
    const slider = document.querySelector(".slider__container");
    const card  = DRINK_CARD;
    // Ciclo que crea todas las tarjetas y las rellena
    for (let i = 0; i<nDrinks; i++) {
        if(i <= nDrinks) {
            slider.insertAdjacentHTML("afterbegin", card);
        }
        setDrinkData();
        // Encontramos todos los botones y les asignamos un efecto de click
        let botones = await document.querySelectorAll(".btn");
        botones = [...botones]
        addButtonEvent({botones});
    }
    slider.insertAdjacentHTML("beforeend", DrinkListCard);
}

// Distingue a cada por si mismo
export const addButtonEvent = ({botones}) => {
    const haceClick = function() {
        console .log(this)
    }
    botones.forEach(element => {
        element.addEventListener("click", haceClick);
    });
}