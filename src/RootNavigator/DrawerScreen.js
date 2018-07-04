import React, {Component} from 'react';
import {NavigationActions,DrawerActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView,AsyncStorage, Text, View} from 'react-native';
 import styles from './SideMenu.style';
 
class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,       
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    this.props.navigation.setParams({ title: route});
  }


  _logout() {
    AsyncStorage.removeItem('app_token');
    this.props.navigation.navigate('Login');
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Notification')}>
              Notification
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Cart')}>
              Cart
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={()=>this._logout()} >
              Logout
              </Text>
            </View>
          </View>
         
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
