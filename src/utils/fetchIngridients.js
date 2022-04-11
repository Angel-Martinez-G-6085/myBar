const axios = require("axios").default

export const fetchIngridient = (ingredientes) => {
    const ingridientsLink = [];
    try {
        ingredientes.forEach( async (ingrediente) => {
            const response = await axios.get(`https://thecocktaildb.com/images/ingredients/${ingrediente}-Medium.png`);
            const {config} = response;
            const imagen = config.url;
            ingridientsLink.push(imagen);
        });
        return ingridientsLink;
    } catch (error) {
        console.log(error);
    }
}