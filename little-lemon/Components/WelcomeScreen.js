import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const WelcomeScreen = () => {
  const [firstName, onChangeFirstName] = useState("");
  return (
    <KeyboardAvoidingView style={welcomeStyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView
        keyboardDismissMode="on-drag"
        indicatorStyle="white"
      >
        <Text style={welcomeStyles.headerText}>Welcome to Little Lemon </Text>
        <Text style={welcomeStyles.bodyText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={welcomeStyles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="First Name"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    color: "#edefee",
    padding: 40,
    textAlign: "center",
  },
  bodyText: {
    padding: 20,
    fontSize: 24,
    marginVertical: 8,
    color: "#edefee",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "edefee",
    backgroundColor: "white",
  },
});

export default WelcomeScreen;
