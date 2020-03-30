import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const nextGuessHandler = direction => {
    if (direction === "lower" && currentGuess < props.userChoice) {
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={nextGuessHandler.bind(this, "lower")}
          color={Colors.accent}
        />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
          color={Colors.primary}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  heading: {
    fontSize: 20,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
