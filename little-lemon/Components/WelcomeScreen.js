import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  useColorScheme,
} from "react-native";

const WelcomeScreen = () => {
  const colorScheme = useColorScheme();
  const [firstName, setFirstName] = useState("");
  return (
    <KeyboardAvoidingView
      style={[welcomeStyles.container, colorScheme === "light" ? welcomeStyles.containerLightMode : welcomeStyles.containerDarkMode]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag" indicatorStyle="white">
        <View style={welcomeStyles.header}>
          <Image
            style={welcomeStyles.logo}
            source={require("../assets/littleLemonLogo.png")}
            resizeMode="cover"
            alt="Little Lemon Logo"
          />
          <Text style={[welcomeStyles.headerText, colorScheme === "light" ? welcomeStyles.textLightMode : welcomeStyles.textDarkMode]}>Little Lemon </Text>
        </View>
        <Text style={[welcomeStyles.bodyText, colorScheme === "light" ? welcomeStyles.textLightMode : welcomeStyles.textDarkMode]}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <Text>{colorScheme}</Text>
        {/* <TextInput
          style={welcomeStyles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
        /> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDarkMode: {
    backgroundColor: "#333",
  },
  containerLightMode: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    // color: "#edefee",
    textAlign: "center",
  },
  bodyText: {
    padding: 20,
    fontSize: 24,
    marginVertical: 8,
    // color: "#edefee",
    textAlign: "center",
  },
  textDarkMode: {
    color: "#edefee",
  },
  textLightMode: {
    color: "#333",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#edefee",
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});

export default WelcomeScreen;
