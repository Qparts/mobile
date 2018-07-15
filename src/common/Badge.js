import {View,Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const styles = StyleSheet.create({
    badge: {
        padding:5,
        minWidth:30,
        height:30,
        borderRadius: 20,
        backgroundColor:"#FF0000",
        justifyContent: "center",
        color: "#ffffff",
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        textAlignVertical: "center",
        includeFontPadding : false
      },
      badgeContainer : {
        flex : -1,
        flexDirection:"row"
      }
});

const Badge = (props) => {
    if (props.color) {
        styles.badge.color = props.color;
      }
      else {
        color = "#ff0000";
      }
  return(
    <View style={styles.badgeContainer}>
    <Text style={styles.badge}>{props.value}</Text>
  </View>
  );
};


export { Badge };
