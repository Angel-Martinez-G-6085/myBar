const axios = require("axios").default

export const fetchIngridient = (ingredientes) => {
    const ingridientsArray = [];
    try {
        ingredientes.forEach( async (ingrediente) => {
            const response = await axios.get(`https://thecocktaildb.com/images/ingredients/${ingrediente}-Medium.png`);
            const {config} = response;
            const imagen = config.url;
            const ingname = ingrediente;
            const finalImgIngridient = {
                ingname,
                imagen
            }
            ingridientsArray.push(finalImgIngridient);
        });
        return ingridientsArray;
    } catch (error) {
        console.log(error);
    }
}