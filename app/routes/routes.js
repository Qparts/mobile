import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import Notification from '../Notification/Notification';
import SideMenu from '../SideMenu/SideMenu';
import {createDrawerNavigator} from 'react-navigation';

 export default createDrawerNavigator({
 
  Home: {
    screen: Home,
},
  Cart: {
    screen: Cart
  },
  Notification: {
    screen: Notification
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
