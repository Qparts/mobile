import React, { Component } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import I18n from "../../I18n";

var { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  wizardContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  mainContainer: {
    width: width,
    height: height - 200
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  niceTo: {
    color: "#707070",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: "4%"
  },
  chooseYour: {
    fontSize: 11
    // paddingBottom: "6%"
  },
  buttonContainer: {
    marginTop: "5%"
  },
  buttonStyle: {
    height: 40,
    width: width - 125,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 1.25,
    justifyContent: "center"
  },
  buttonText: {
    color: "#212121",
    textAlign: "center",
    fontSize: 15
  },
  selected: {
    marginTop: "5%",
    color: "#212121",
    fontSize: 15,
    textAlign: "center",
    textDecorationLine: "underline"
  }
});
class ShipmentLocation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wizardContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <View>
              <Image
                style={{ marginLeft: 5 }}
                source={require("../../Assets/img/skip1.png")}
              />
            </View>
            <View>
              <Text style={styles.niceTo}>
                {I18n.t("shipment_location_hi_nice")}
              </Text>
            </View>
            <View>
              <Text style={styles.chooseYour}>
                {I18n.t("shipment_location_choose_your")}
              </Text>
            </View>
            <View>
              <Text style={styles.chooseYour}>
                {I18n.t("shipment_location_show_the")}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                  <Icon size={18} name="md-locate" />
                  {I18n.t("shipment_location_user_current")}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.selected}>
                {I18n.t("shipment_location_select_it")}
              </Text>
            </View>
          </View>
          <View />
        </View>
      </View>
    );
  }
}
export default ShipmentLocation;
