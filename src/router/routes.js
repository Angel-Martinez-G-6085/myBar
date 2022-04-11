import { loadDrinkMenu } from '../components/drinksMenu/drinksMenu';
import { loadInicio } from '../components/inicio/inicio';
import { loadSingleDrink } from '../components/singleDrink/singleDrink';
import loadTemplates from '../utils/loadTemplates';

export const PATHS = [
  {
    path: '/',
    action: () => {
      loadTemplates();
      loadInicio();
    },
  },
  {
    path: '/#drinkList',
    action: () => {
      loadTemplates();
      loadDrinkMenu();

    }
  },
  {
    path: '/#singleDrink',
    action: () => {
      loadTemplates();
      loadSingleDrink();
    }
  }
];
export default PATHS;
