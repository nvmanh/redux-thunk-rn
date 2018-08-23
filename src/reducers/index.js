import { combineReducers } from 'redux';
import nav from './NavReducer';
import Const from './../common/Const';

const appReducer = combineReducers({
  nav,
});

const rootReducer = (state, action) => {
  let appState = state;
  if (action.type === Const.NEED_RESET_STORE) {
    appState = undefined;
  }
  return appReducer(appState, action);
};

export default rootReducer;
