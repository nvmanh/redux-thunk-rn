import { createStackNavigator } from 'react-navigation';
import Example from './../containers/Example';

const AppNavigator = createStackNavigator({
    Example: {
      screen: Example
    }
  });
export default AppNavigator;
