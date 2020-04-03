import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button
} from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.9}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 6
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "open-sans-bold",
    fontSize: 14
  }
});

export default MainButton;
