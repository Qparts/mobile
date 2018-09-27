import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  CustomOrderContainer: {
    padding: "3%"
  },
  customOrder: {
    fontSize: 12,
    color: "#000000"
  },
  vechicleInfo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    paddingTop: "3%"
  },
  selectVechicle: {
    paddingLeft: "2%"
  },
  selectFromGarageContainer: {
    backgroundColor: "#c7c8c3",
    borderRadius: 15,
    width: width - 25,
    height: 40,
    flex: -1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#212121"
  },
  selectFromGarage: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#212121"
  },
  addVechile: {
    fontSize: 13,
    paddingTop: "4%",
    fontWeight: "bold",
    color: "#212121"
  },
  inputContainer: {
    marginTop: "3%"
  },
  inputSubContainer: {
    height: 45,
    width: width - 80,
    marginLeft: "6%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 25
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  textInput: {
    marginLeft: "3%"
  },
  buttonContainer: {
    marginTop: "5%"
  },
  buttonStyle: {
    height: 45,
    width: width - 25,
    borderRadius: 150,
    backgroundColor: "#b7b7b7",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: "4%"
  }
});
class CustomOrder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.CustomOrderContainer}>
        <View>
          <Text style={styles.customOrder}>Custom Order</Text>
        </View>
        <View>
          <Text style={styles.vechicleInfo}>Vehicle Information</Text>
        </View>
        <View>
          <Text style={styles.selectVechicle}>
            Select Vehicle you need parts for
          </Text>
        </View>
        <View style={styles.selectFromGarageContainer}>
          <Text style={styles.selectFromGarage}>SELECT FROM GARAGE</Text>
        </View>
        <View>
          <Text style={styles.addVechile}>Add Vehicle</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Year"
              secureTextEntry={false}
              autoCorrect={false}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Make"
              secureTextEntry={false}
              autoCorrect={false}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Model"
              secureTextEntry={false}
              autoCorrect={false}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Vin Number"
              secureTextEntry={false}
              autoCorrect={false}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CustomOrder;
