const axios = require("axios").default;

export const loadSingleDrinkCard = async (id) => {
    const datos = await fetchDrinkInfo(id);
    const loading = document.querySelector(".carga");
    setDrinkInfo(datos);
    // Se esconde el cargador
    loading.style.display = "none";
}

const fetchDrinkInfo = async (id) => {
    try {
        // Objetemos el objeto con la información del trago
        const response = await axios.get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        let {data} = response;
        data = data.drinks;
        data = data[0];

        const patron = RegExp(/strIngredient\d/);
        const titulo = data.strDrink;
        const ingredientes = [];
        const imagen = data.strDrinkThumb;
        const instruccions = data.strInstructions;
        
        // Obtiene la lista de ingredientes
        Object.entries(data).forEach(([key,value]) => {
            if(patron.test(key) && value != null) {
                ingredientes.push(value);
            }
        });
        return {
            titulo,
            id,
            ingredientes,
            imagen,
            instruccions
        }
    } catch (error) {
        console.log(error);
    }
}

const setDrinkInfo = (datos) => {
    const imagen = document.querySelector(".single__image");
    const titulo = document.querySelector(".single__title");
    const id = document.querySelector(".single__id");
    const instruccions = document.querySelector(".single__instruccion");

    imagen.setAttribute("src", datos.imagen);
    imagen.setAttribute("alt", datos.titulo);
    titulo.innerHTML = datos.titulo;
    id.innerHTML = `ID: ${datos.id}`;
    instruccions.innerHTML = datos.instruccions;
}