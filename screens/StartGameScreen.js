import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Number Game </Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonWrap}>
          <View style={styles.button}>
            <Button color={Colors.accent} title="Reset" onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
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
    marginTop: 10,
    marginBottom: 20,
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
  button: {
    width: 80
  }
});

export default StartGameScreen;
