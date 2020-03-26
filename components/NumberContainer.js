import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    backgroundColor: Colors.accent,
    padding: 10,
    borderRadius: 4,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: "#ffffff",
    fontSize: 20
  }
});

export default NumberContainer;
