import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 6
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "open-sans-bold",
    fontSize: 14
  }
});

export default MainButton;
