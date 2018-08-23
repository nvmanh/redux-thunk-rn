import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import ReduxNavigation from './src/navigators/AppNavigator';
import store from './src/store';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}

// _prefix = () => {
//   if (Constants.appOwnership === "standalone") {
//     return Platform.OS == "android" ? "demoapp://demoapp/" : "demoapp://";
//   } else {
//     return Constants.linkingUri;
//   }
// };

export default App;
