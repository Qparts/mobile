import { createStackNavigator } from 'react-navigation';
import Routes from './routes/routes';
import LoginForm from './LoginForm';
import Splash from './Splash';
import Signup from './Signup/Signup';
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
  }, signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
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
  