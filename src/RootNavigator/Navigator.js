import React from "react";
import {
  createStackNavigator,
  DrawerActions,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import { TouchableOpacity, Image } from "react-native";
import Home from "../Component/Home/Home";
import Notification from "../Component/Notification/Notification";
import Cart from "../Component/Cart/Cart";
import LoginForm from "../Component/LoginForm/LoginForm";
import Setting from "../Component/Setting";
import Splash from "../Component/Splash/Splash";
import Signup from "../Component/Signup/Signup";
import ConfirmCode from "../Component/Signup/ConfirmCode/ConfirmCode";
import AboutUs from "../Component/AboutUs/AboutUs";
import Garage from "../Component/Garage/Garage";
import Tyres from "../Component/Tyres/Tyres";
import Vendor from "../Component/Vendor/Vendor";
import Offers from "../Component/Offers/Offers";
import Blog from "../Component/Blog/Blog";
import ContactUs from "../Component/ContactUs/ContactUs";
import TrackOrder from "../Component/TrackOrder/TrackOrder";
import CustomOrder from "../Component/CustomOrder/CustomOrder";
import EsayReturns from "../Component/EsayReturns/EsayReturns";
import TermsConditions from "../Component/TermsConditions/TermsConditions";
import ReturnPolicy from "../Component/ReturnPolicy/ReturnPolicy";
import Accessories from "../Component/Accessories/Accessories";
import PasswordRecovery from "../Component/PasswordRecovery/PasswordRecovery";
import ResetPasswrd from "../Component/ResetPassword/ResetPassword";
import VerifyEmail from "../Component/VerifyEmail/VerifyEmail";
import Wizard from "../Component/Wizard/Wizard";
import LoginProfile from "../Component/LoginProfile/LoginProfile";
import ShipmentCity from "../Component/ShipmentCity/ShipmentCity";

import DrawerScreen from "./DrawerScreen";
import I18n from "../I18n";
const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    ReturnPolicy: {
      screen: ReturnPolicy
    },
    CustomOrder: {
      screen: CustomOrder
    },
    Cart: {
      screen: Cart
    },
    Setting: {
      screen: Setting
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "ReturnPolicy") {
          iconName = "print";
        } else if (routeName === "CustomOrder") {
          iconName = "clone";
        } else if (routeName === "Cart") {
          iconName = "shopping-cart";
        } else if (routeName === "Setting") {
          iconName = "user";
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: "CustomOrder",
    tabBarOptions: {
      showLabel: false,
      labelStyle: {
        fontSize: 12
      },
      order: ["Home", "ReturnPolicy", "CustomOrder", "Cart", "Setting"]
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Wizard: {
      screen: Wizard,
      headerMode: "none",
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Home: {
      screen: Tabs
    },
    Notification: {
      screen: Notification
    },
    Cart: {
      screen: Cart
    },
    Setting: {
      screen: Setting
    },
    AboutUs: {
      screen: AboutUs
    },
    Garage: {
      screen: Garage
    },
    Tyres: {
      screen: Tyres
    },
    Vendor: {
      screen: Vendor
    },
    Offers: {
      screen: Offers
    },
    Blog: {
      screen: Blog
    },
    ContactUs: {
      screen: ContactUs
    },
    TrackOrder: {
      screen: TrackOrder
    },
    EsayReturns: {
      screen: EsayReturns
    },
    TermsConditions: {
      screen: TermsConditions
    },
    ReturnPolicy: {
      screen: ReturnPolicy
    },
    Accessories: {
      screen: Accessories
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    headerMode: "none",
    drawerWidth: 300
  }
);

const MenuImage = ({ navigation }) => {
  // if (!navigation.state.isDrawerOpen) {
  //   return <Image source={require("../Assets/img/menu-button.png")} />;
  // }
  return (
    <Image
      style={{ marginLeft: 5 }}
      source={require("../Assets/img/menu-button.png")}
    />
  );
};

const RightHeader = () => {
  return (
    <Icon
      name="shopping-cart"
      style={{ marginRight: 10 }}
      size={35}
      color="#999"
    />
  );
};
const StackNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: null,
        headerRight: null
      })
    },
    LoginProfile: {
      screen: LoginProfile,
      headerMode: "none",
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Login: {
      screen: LoginForm,
      headerMode: "none",
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    signup: {
      screen: Signup,
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        title: null,
        headerRight: null,
        headerStyle: {
          backgroundColor: "#ffffff"
        },
        headerLeft: (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginLeft: 5 }}
          >
            <Image source={require("../Assets/img/left-arrow.png")} />
          </TouchableOpacity>
        )
      })
    },
    PasswordRecovery: {
      screen: PasswordRecovery,
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        title: null,
        headerRight: null,
        headerStyle: {
          backgroundColor: "#ffffff"
        },
        headerLeft: (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginLeft: 5 }}
          >
            <Image source={require("../Assets/img/left-arrow.png")} />
          </TouchableOpacity>
        )
      })
    },
    ResetPasswrd: {
      screen: ResetPasswrd,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        headerRight: null,
        title: "Reset Password"
      })
    },
    VerifyEmail: {
      screen: VerifyEmail,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        headerRight: null,
        title: "Verify Email"
      })
    },
    ConfirmCode: {
      screen: ConfirmCode,
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        title: null,
        headerRight: null,
        headerStyle: {
          backgroundColor: "#ffffff"
        },
        headerLeft: (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginLeft: 5 }}
          >
            <Image source={require("../Assets/img/left-arrow.png")} />
          </TouchableOpacity>
        )
      })
    },
    Dashboard: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title:
        typeof navigation.state.params === "undefined" ||
        typeof navigation.state.params.title === "undefined"
          ? I18n.t("navigator_title_home")
          : navigation.state.params.title,
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuImage navigation={navigation} />
        </TouchableOpacity>
      ),
      // headerRight: (
      //   <TouchableOpacity>
      //     <RightHeader navigation={navigation} />
      //   </TouchableOpacity>
      // ),
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  }
);
StackNavigator.propTypes = {
  navigation: PropTypes.object
};
export default StackNavigator;
