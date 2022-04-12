import { findButtons } from "../../utils/findButtons";
import { createCard } from "../drinks/drinks";
import DrinkMenu from "./drinksMenu.html";

export const loadDrinkMenu = async () => {
  const header = document.querySelector(".header");
  header.insertAdjacentHTML("afterend", DrinkMenu);
  const loading = document.querySelector(".carga");

  // Elimina la ultima tarjeta
  await createCard(12);
  findButtons();
  // Escondemos el cargador
  loading.style.display = "none"
  let cards = document.querySelectorAll(".drink__card");
  cards = [...cards];
  const ultimo = cards[cards.length-1];
  ultimo.style.display ="none";
};
