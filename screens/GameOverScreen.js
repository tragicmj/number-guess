import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import MainButton from "../components/MainButton";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <ScrollView>
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
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  imageContainer: {
    // borderRadius: 125,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    elevation: 4,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    // height: 250,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  endText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 18,
    marginHorizontal: 10,
    marginBottom: 25
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
