import {
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor,
} from 'react-navigation-redux-helpers';
import Route from './../common/Route';

const middleware = createReactNavigationReduxMiddleware(
  Route.ROOT,
  state => state.nav
);
const navigationPropConstructor = createNavigationPropConstructor(Route.ROOT);

export { middleware, navigationPropConstructor };
