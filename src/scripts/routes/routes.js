import HomePage from '../pages/home/home-page';
import RegisterPage from '../pages/auth/register/register-page';
import LoginPage from '../pages/auth/login/login-page';
import { checkAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';
import CreateStoryPage from '../pages/createStory/createStory-page';
import Page404 from '../pages/404';
import DetailStoryPage from '../pages/detailStory/detailStory-page';
import SavedPage from '../pages/saved/saved-page';
import SavedDetailPage from '../pages/savedDetail/savedDetail-page';

const routes = {
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),

  '/': () => checkAuthenticatedRoute(new HomePage()),
  '/detailStory/:id': () => checkAuthenticatedRoute(new DetailStoryPage()),
  '/createStory': () => checkAuthenticatedRoute(new CreateStoryPage()),
  '/saved': () => checkAuthenticatedRoute(new SavedPage()),
  '/saved/:id': () => checkAuthenticatedRoute(new SavedDetailPage()),
  '/404': () => checkAuthenticatedRoute(new Page404()),
};

export default routes;
