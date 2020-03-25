import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#1b1b1b",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    padding: 20,
    backgroundColor: "#fbfbfb",
    borderRadius: 6
  }
});

export default Card;
