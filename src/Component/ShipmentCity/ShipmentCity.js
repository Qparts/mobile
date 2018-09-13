import React, { Component } from "react";
import {
  View,
  Dimensions,
  FlatList,
  Text,
  StyleSheet,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

var { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  shipmentContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  mainContainer: {
    width: width,
    height: height - 200
  },
  icon: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  search: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 0,
    paddingLeft: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    width: width - 70,
    height: 40
  },
  field: {
    flex: 1,
    fontSize: 12
    // marginLeft: 5
  },
  userCurrent: {
    flex: 5,
    justifyContent: "flex-start",
    textAlign: "left",
    paddingLeft: "7%"
  },
  buttonText: {
    color: "#212121",
    fontSize: 15,
    textAlign: "left"
  },
  customLine: {
    borderWidth: 0.5,
    borderBottomColor: "#c7c8c3",
    width: width - 50
  },
  chooseText: {
    color: "#212121",
    fontSize: 15
  },
  flat: {
    paddingTop: "1%"
  },
  item: {
    padding: "3%",
    fontSize: 14,
    borderBottomColor: "#212121"
  },
  itemContainer: {
    flex: 2,
    padding: 10
  },
  itemContainerCenter: {
    flex: 0.1
  },
  itemIcons: {
    flex: 2,
    padding: 10,
    alignItems: "flex-end"
  }
});
class ShipmentCity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.shipmentContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <View style={styles.search}>
              <Icon size={25} name="md-search" />
              <TextInput
                placeholder="Enter Your Location"
                style={styles.field}
                returnKeyType="search"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.userCurrent}>
            <Text style={styles.buttonText}>
              <Icon size={18} name="md-locate" /> User current Location
            </Text>
            <View style={styles.customLine} />
            <View>
              <Text style={styles.chooseText}>Choose Your Country</Text>
            </View>
            <View style={styles.container}>
              <FlatList
                style={styles.flat}
                data={[
                  { key: "Amman" },
                  { key: "Zarqa" },
                  { key: "Irbid" },
                  { key: "Ajlun" },
                ]}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10
                    }}
                  >
                    <View style={styles.itemContainer}>
                      <Text style={styles.item}>{item.key}</Text>
                      <View style={styles.customLine} />
                    </View>
                    <View style={styles.itemContainerCenter} />
                    <View style={styles.itemIcons}>
                      <Icon size={18} name="md-arrow-dropright" />
                    </View>
                  </View>
                  // <View>
                  //   <View style={styles.customLine} />
                  //   <Text style={styles.item}>
                  //     {item.key} sdf <Icon size={18} name="md-locate" />
                  //   </Text>
                  // </View>
                )}
              />
            </View>
          </View>
          <View />
        </View>
      </View>
    );
  }
}
export default ShipmentCity;
