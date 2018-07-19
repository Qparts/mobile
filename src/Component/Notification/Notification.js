import React, { Component } from "react";
import { View } from "react-native";
import { Search, Badge } from "../../common";
class Notification extends Component {
  render() {
    return (
      <View style={{ padding: 50 }}>
        <Search>Search</Search>
        <View>
          <Badge color="#c7c8c3" />
        </View>
      </View>
    );
  }
}
export default Notification;
