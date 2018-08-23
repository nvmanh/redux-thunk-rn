import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import Route from './../common/Route';

const firstAction = AppNavigator.router.getActionForPathAndParams(Route.LOGIN);
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case Route.LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case Route.LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: Route.LOGIN }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
