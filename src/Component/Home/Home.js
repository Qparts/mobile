import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button , cardItem } from "../../common";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOpacity: 0.1
  },
  orderNowText: {
    fontSize: 17,
    alignSelf: "center",
    color: "#5e6772",
    marginTop: 10
  },
  textContainer: {
    paddingRight: "10%",
    paddingLeft: "10%",
    paddingTop: "5%"
  },
  textInput: {
    fontSize: 20,
    borderWidth: 0.5,
    height: 45,
    borderColor: "#dfe3e8"
  },buttonContainer:{
    padding: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row"
  }
});
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.orderNowText}>ORDER NOW</Text>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            placeholder="Name Or Number"
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Year"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Make"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Model"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
         <Button style={styles.orderNowText}>Find</Button>
        </View>
       </View>
    );
  }
}

export default Home;
