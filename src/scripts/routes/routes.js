import homePage from '../views/pages/home';
import favoritePage from '../views/pages/favorite';
import detailPage from '../views/pages/detail';

const routes = {
  '/': homePage,
  '/home': homePage,
  '/favorite': favoritePage,
  '/detail/:id': detailPage,
};

export default routes;
