import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#01CBC6",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 19
  }
});

export default Header;
