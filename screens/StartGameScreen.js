import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Number Game </Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonWrap}>
          <Button
            style={styles.resetBtn}
            color="#FF4848"
            title="Reset"
            onPress={() => {}}
          />
          <Button
            style={styles.confirmBtn}
            title="Confirm"
            color="#53E0BC"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: "center"
  },
  heading: {
    marginVertical: 10,
    fontSize: 20
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonWrap: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  resetBtn: {
    width: 400
  },
  confirmBtn: {
    width: 400
  }
});

export default StartGameScreen;
