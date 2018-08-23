import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler, AsyncStorage, AppState } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { initializeListeners } from 'react-navigation-redux-helpers';
import { navigationPropConstructor } from '../utils/redux';
import Route from './../common/Route';
import Const from './../common/Const';
import Router from './Router';
import navigateTo from './../action/NavigateTo';
import i18n from './../utils/i18n';

export const AppNavigator = Router;

class ReduxNavigation extends React.Component {
  state = {
    appState: AppState.currentState,
    lastActive: 0
  }
  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    initializeListeners(Route.ROOT, this.props.nav);
    BackHandler.addEventListener(Const.HARDWARE_BACK_PRESS, this.onBackPress);
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(Const.HARDWARE_BACK_PRESS, this.onBackPress);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/active/) && nextAppState.match(/inactive|background/)) {
      this.setState({ lastActive: new Date().getTime() })
    }
    if ((this.state.appState.match(/inactive|background/) && nextAppState === 'active') && this.state.lastActive) {
      var currentTime = new Date().getTime();
      if (currentTime - this.state.lastActive >= (30 * 60 * 1000)) { //auto-logout after 30minutes
        Toast.show(i18n.t('common.timeout'));
        this.logout();
      } else {
        this.setState({ lastActive: new Date().getTime() })
      }
    }
    this.setState({ appState: nextAppState });
  }

  logout = () => {
    const { dispatch } = this.props;
  };

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = navigationPropConstructor(dispatch, nav);
    return (
      <AppNavigator
        navigation={navigation}
      />
    );
  }
}

ReduxNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(ReduxNavigation);

