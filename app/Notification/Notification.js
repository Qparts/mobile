

import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
 class Notification extends Component {
  static navigationOptions = {
    title: 'Notification',
}
  render () {
    return (
      <View style={{padding: 50}}>
        <Text>
          Notifaction
        </Text>
      </View>
    );
  }
}
export default Notification;