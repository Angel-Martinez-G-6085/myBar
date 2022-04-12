import './drinks.scss';
import DRINK_CARD from './drinks.html';
import { DrinkData, setData } from '../../utils/getDrinks';
import { loadLastCard } from '../drinkListCard/drinkList';

export const createCard = async (nDrinks) => {
    const arrayData = await DrinkData(nDrinks);
    const slider = document.querySelector(".slider__container");
    const card  = DRINK_CARD;
    // Ciclo que crea todas las tarjetas y las rellena
    for (let i = 0; i<nDrinks; i++) {
        if(i <= nDrinks) {
            slider.insertAdjacentHTML("afterbegin", card);
        }
    }
    await setData(arrayData);
    loadLastCard();
}