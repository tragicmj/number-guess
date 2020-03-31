import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Color from "../constants/colors";
import colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Bingo! Number Found</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/sucess.png")}
          // source={{
          //   uri:
          //     "https://images.unsplash.com/photo-1527484795999-ad361ca8efd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText style={styles.endText}>
        Your phone needed
        <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.highlight}> {props.userNumber}</Text>
      </BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  imageContainer: {
    borderRadius: 125,
    elevation: 4,
    width: 250,
    height: 250,
    overflow: "hidden",
    marginVertical: 25
  },
  image: {
    width: "100%",
    height: "100%"
  },
  endText: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 25
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
