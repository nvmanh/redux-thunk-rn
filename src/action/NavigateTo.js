import { StackActions, NavigationActions } from 'react-navigation';

const navigateTo = (dispatch, routeName, { params = null, resetStack = false } = {}) => {
  if (resetStack) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })],
    });
    dispatch(resetAction);
  } else {
    dispatch(NavigationActions.navigate({ routeName, params }));
  }
};

export default navigateTo;
