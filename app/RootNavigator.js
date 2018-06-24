import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import LoginForm from './LoginForm';
import Splash from './Splash';

const RootNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: false
    }
  },

  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
      headerLeft: null
    }
  },
  Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        headerLeft: null
      }
  },
  });
  
  export default RootNavigator;
  