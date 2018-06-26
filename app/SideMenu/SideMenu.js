import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {Button,Spinner } from '../../common'
import Icon from 'react-native-vector-icons/FontAwesome';
 
class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  _onLogotPressed() {
   console.log("Logout");
  }

  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Icon.Button  backgroundColor="#37d1fc" onPress={this._onLogotPressed.bind(this)}>
Logout      </Icon.Button>
     );
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
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Cart')}>
              Cart
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Notification')}>
                Notification
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}> 
        { this._renderButton() } 
        </View>

        
       </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
