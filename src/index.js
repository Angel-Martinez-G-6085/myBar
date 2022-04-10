import '../node_modules/normalize.css/normalize.css';
import '../public/styles.scss';
import './libs/changeImage';
import Router from './router/router';
import PATHS from './router/routes';

const ROUTER = new Router(PATHS);
// Carga la pagina de inicio cuando el DOM carga
if (document.readyState) {
  ROUTER.initRouter();
  ROUTER.RenderComponent();
}
// Detecta ca vez que la url cambia
window.onhashchange = () => {
  ROUTER.RenderComponent();
};
