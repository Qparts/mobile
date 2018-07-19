import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Image,
  ImageBackground,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput
} from "react-native";
import PropTypes from "prop-types";
import { Card, CardItem, Input, Button } from "../../common";

import mainColor from "./constants";

import Email from "./Email";
import Separator from "./Separator";
import Tel from "./Tel";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0
  },
  container: {
    flex: 1
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1
      },
      android: {
        alignItems: "center"
      }
    })
  },
  placeIcon: {
    color: "white",
    fontSize: 26
  },
  scroll: {
    backgroundColor: "#FFF"
  },
  telContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row"
  },
  userCityRow: {
    backgroundColor: "transparent"
  },
  userCityText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  },
  userImage: {
    borderColor: mainColor,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170
  },
  userNameText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center"
  },
  input: {
    fontSize: 22,
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    paddingBottom: 10
  }
});

class Contact extends Component {
  ShowModalFunction(visible) {
    this.setState({ ModalVisibleStatus: visible });
  }

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    }).isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    tels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired
  };

  state = {
    telDS: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.tels),
    emailDS: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.emails),
    ModalVisibleStatus: false,
    full_name: "",
    phone_number: "",
    email: "",
    Password: ""
  };

  onPressPlace = () => {
    console.log("place");
  };

  onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log("Error:", err));
  };

  onPressSms = () => {
    console.log("sms");
  };

  onPressEmail = email => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
      console.log("Error:", err)
    );
  };

  renderHeader = () => {
    const {
      avatar,
      avatarBackground,
      name,
      address: { city, country }
    } = this.props;

    return (
      <View style={styles.headerContainer}>
        <Modal
          transparent={false}
          animationType="slide"
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.ShowModalFunction(!this.state.ModalVisibleStatus);
          }}
        >
          <Card>
            <CardItem>
              <Input
                label="Full Name"
                placeholder="Full Name"
                secureTextEntry={false}
                onChangeText={full_name => {
                  this.setState({ full_name: full_name });
                }}
              />
            </CardItem>
            <CardItem>
              <Input
                label="Phone Number"
                placeholder="Phone Number"
                secureTextEntry={false}
                onChangeText={phone_number => {
                  this.setState({ phone_number: phone_number });
                }}
              />
            </CardItem>
            <CardItem>
              <Input
                label="Email"
                placeholder="Email"
                secureTextEntry={false}
                onChangeText={email => {
                  this.setState({ email: email });
                }}
              />
            </CardItem>
            <CardItem>
              <Input
                label="Password"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={Password => {
                  this.setState({ Password: Password });
                }}
              />
            </CardItem>
            <CardItem>
              <Button
                onPress={() => {
                  this.ShowModalFunction(!this.state.ModalVisibleStatus);
                }}
              >
                Update
              </Button>
            </CardItem>
          </Card>
        </Modal>

        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri: avatarBackground
          }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri: avatar
              }}
            />
            <Text style={styles.userNameText}>
              {name}{" "}
              <Icon
                name="edit"
                color="transparent"
                style={styles.placeIcon}
                onPress={() => {
                  this.ShowModalFunction(true);
                }}
              />
            </Text>

            <View style={styles.userAddressRow}>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {city}
                  , {country}
                </Text>
              </View>
              <View>
                <Icon
                  name="map-marker"
                  color="transparent"
                  style={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  renderTel = () => (
    <ListView
      contentContainerStyle={styles.telContainer}
      dataSource={this.state.telDS}
      renderRow={({ id, name, number }, _, k) => (
        <Tel
          key={`tel-${id}`}
          index={k}
          name={name}
          number={number}
          onPressSms={this.onPressSms}
          onPressTel={this.onPressTel}
        />
      )}
    />
  );

  renderEmail = () => (
    <ListView
      contentContainerStyle={styles.emailContainer}
      dataSource={this.state.emailDS}
      renderRow={({ email, id, name }, _, k) => (
        <Email
          key={`email-${id}`}
          index={k}
          name={name}
          email={email}
          onPressEmail={this.onPressEmail}
        />
      )}
    />
  );

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {this.renderTel()}
            {Separator()}
            {this.renderEmail()}
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;
