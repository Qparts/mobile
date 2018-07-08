import React from 'react';
import { createStackNavigator, DrawerActions, createDrawerNavigator } from 'react-navigation';
import { TouchableOpacity,TouchableHighlight, Image } from 'react-native';
import Home from '../Component/Home/Home';
import Notification from '../Component/Notification/Notification';
import Cart from '../Component/Cart/Cart';
import LoginForm from '../Component/LoginForm/LoginForm';
import Splash from '../Component/Splash/Splash';
import Signup from '../Component/Signup/Signup';
import ConfirmCode from '../Component/Signup/ConfirmCode/ConfirmCode';
import DrawerScreen from './DrawerScreen';


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Notification: {
    screen: Notification,
  }, Cart: {
    screen: Cart,
  }
}, {
 
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  headerMode: 'none',
  drawerWidth: 300,
});

const MenuImage = ({ navigation }) => {
  if (!navigation.state.isDrawerOpen) {
    return <Image source={require('../Assets/img/menu-button.png')} />;
  }
  return <Image source={require('../Assets/img/left-arrow.png')} />;
};
 
const StackNavigator = createStackNavigator({
  Splash:{
    screen: Splash,
    navigationOptions: ({ navigation }) => ({
      title:'',
      headerLeft: null,
     }),
  }, Login:{
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      title:'Login',
    }),
  }, signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <TouchableOpacity onPress={() => { navigation.goBack()}}>
      <Image source={require('../Assets/img/left-arrow.png')}/>
    </TouchableOpacity>,
      title: 'signup',
    }),
  },ConfirmCode: {
    screen: ConfirmCode,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      title: 'Confirmation Code',
    }),
  },
 Dashboard: {
    screen: DrawerNavigator,

  },
}, {
  navigationOptions: ({ navigation }) => ({
    title: typeof (navigation.state.params) === 'undefined' || typeof (navigation.state.params.title) === 'undefined' ? 'Home' : navigation.state.params.title,
    headerLeft:
  <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()); }}>
    <MenuImage navigation={navigation} />
  </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }),
});

export default StackNavigator;
