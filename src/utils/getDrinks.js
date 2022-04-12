const axios = require("axios").default;

const getDrink = async () => {
  try {
    const response = await axios.get(
      "https://thecocktaildb.com/api/json/v1/1/random.php"
    );
    let { data } = response;
    data = data.drinks[0];
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createDrinkArray = async (numeroBebidas) => {
  let drinks = [];
  for (let i = 0; i < numeroBebidas; i++) {
    const drink = await getDrink();
    drinks.push(drink);
  }
  return drinks;
};

export const DrinkData = async (numeroBebidas) => {
  const drinkPromiseArray = await createDrinkArray(numeroBebidas);
  return drinkPromiseArray;
};

export const setData = async (dataArray) => {
  let cards = document.querySelectorAll(".drink__card__content");
  cards = [...cards];
  const data = dataArray;
  cards.forEach((card, index) => {
    card.children[0].setAttribute("src", `${data[index].strDrinkThumb}`);
    card.children[0].setAttribute("alt", `${data[index].strDrink}`);
    card.children[1].innerHTML = data[index].strDrink;
    card.children[2].innerHTML = data[index].strInstructions;
    card.children[3].setAttribute("id", data[index].idDrink);
  });
}
