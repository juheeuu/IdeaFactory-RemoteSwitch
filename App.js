
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import MainScreen from './src/MainScreen';
import SettingScreen from './src/SettingScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    },
  },
  SignUp: {
    screen: SignupScreen,
    navigationOptions: {
      header: null
    },
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: null
    },
  },
});

export default createAppContainer(AppNavigator);

