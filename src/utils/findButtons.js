import { loadSingleDrinkCard } from "./loadSingleDrinkCard";

// Distingue a cada por si mismo
export const findButtons = () => {
    let botones = document.querySelectorAll(".btn");
    botones = [...botones];
    botones.forEach(element => {
        element.addEventListener("click", evento);
    });
}

function evento(e){
    let id = '';
    let atributos = this.attributes;
    atributos = [...atributos];
    id = atributos[1].nodeValue;
    loadSingleDrinkCard(id);
}