import { NativeModules, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ }); // eslint-disable-line

/**
 * Store設定、Middlware設定
 * @param {Object} initialState
 */
const configureStore = initialState => {
  const enhancer = compose(
    applyMiddleware(
       loggerMiddleware,
      thunk
    ),
  );
  return createStore(reducers, initialState, enhancer);
};

// initialState
const initialState = {};

const store = configureStore(initialState);

const lang = (NativeModules.I18nManager.localeIdentifier)
  ? NativeModules.I18nManager.localeIdentifier
  : NativeModules.SettingsManager.settings.AppleLocale;

AsyncStorage.getItem('lang').then(data => {
  if (!data) {
    store.dispatch({ type: 'SET_LANG', payload: AsyncStorage.setItem('lang', lang) });
  }
});

export default store;
