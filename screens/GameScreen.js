import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  Dimensions,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

import BodyText from "../components/BodyText";
import DefaultStyles from "../constants/defaultStyle";

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

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong you fucking liar", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds(curRounds => curRounds + 1);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses
    ]);
  };
  return (
    <View style={styles.screen}>
      <Text style={(styles.heading, DefaultStyles.bodyText)}>
        Opponent's Guess
      </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={20} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={20} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
        />
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 13 : 5,
    width: 300,
    maxWidth: "80%"
  },
  listContainer: {
    width: "100%",
    flex: 1
  },
  list: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "#ccc",
    borderStyle: "solid",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#f8fafb",
    justifyContent: "space-between",
    borderWidth: 1,
    flexDirection: "row",
    width: 300,
    maxWidth: "75%"
  }
});

export default GameScreen;
