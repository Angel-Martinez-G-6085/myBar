import { loadDrinkMenu } from '../components/drinksMenu/drinksMenu';
import { loadInicio } from '../components/inicio/inicio';
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
  }
];
export default PATHS;
