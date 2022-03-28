import loadInicio from '../components/inicio/inicio';
import loadTemplates from '../utils/loadTemplates';

const PATHS = [
  {
    path: '/',
    action: () => {
      loadTemplates();
      loadInicio();
    },
  },
];
export default PATHS;
