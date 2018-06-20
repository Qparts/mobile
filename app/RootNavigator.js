import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import LoginForm from './LoginForm';
const RootNavigator = createStackNavigator({
    Login: {
      screen: LoginForm,
      navigationOptions: {
        title: 'Login'
      }
    },
    Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home'
        }
    },
  
  });
  
  export default RootNavigator;
  