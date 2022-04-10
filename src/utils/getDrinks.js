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

const getDrinkArray = () => {
  let drinks = [];
  for (let i = 0; i < 4; i++) {
    const drink = getDrink();
    drinks.push(drink);
  }
  return Promise.all(drinks).then((response) => response);
};

export const setDrinkData = () => {
  let cards = document.querySelectorAll(".drink__card__content");
  getDrinkArray().then((response) => {
    cards = [...cards];
    cards.forEach((card, index) => {
      card.children[0].setAttribute("src", `${response[index].strDrinkThumb}`);
      card.children[0].setAttribute("alt", `${response[index].strDrink}`);
      card.children[1].innerHTML = response[index].strDrink;
      card.children[2].innerHTML = response[index].idDrink;
      card.children[3].innerHTML = response[index].strInstructions;
    });
  });
};
