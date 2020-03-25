import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 25,
    paddingBottom: 0,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 22
  }
});

export default Header;
