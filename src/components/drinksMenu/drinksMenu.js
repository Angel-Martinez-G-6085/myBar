import { createCard } from "../drinks/drinks";
import DrinkMenu from "./drinksMenu.html";

export const loadDrinkMenu = async () => {
  const header = document.querySelector(".header");
  header.insertAdjacentHTML("afterend", DrinkMenu);

  // Elimina la ultima tarjeta
  await createCard(12);
  let cards = document.querySelectorAll(".drink__card");
  cards = [...cards];
  const ultimo = cards[cards.length-1];
  ultimo.style.display ="none";
};
