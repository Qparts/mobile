import { createStackNavigator } from 'react-navigation';
import Routes from './routes/routes';
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
  Routes: {
      screen: Routes,
      navigationOptions: {
        title: 'Home',
        headerLeft: null
      }
    },
  });
  
  export default RootNavigator;
  