import './drinkList.scss';
import DrinkListCard from './drinksList.html';

export const loadLastCard = () => {
    const slider = document.querySelector(".slider__container");
    slider.insertAdjacentHTML("beforeend", DrinkListCard);
}