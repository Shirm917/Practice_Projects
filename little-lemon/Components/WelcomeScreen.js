import { View, ScrollView, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView indicatorStyle="white" style={welcomeStyles.container}>
      <Text style={welcomeStyles.headerText}>Welcome to Little Lemon </Text>
      <Text style={welcomeStyles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 50,
    color: "#edefee",
    padding: 40,
    textAlign: "center",
  },
  bodyText: {
    padding: 20,
    fontSize: 38,
    marginVertical: 8,
    color: "#edefee",
    textAlign: "center",
  },
});

export default WelcomeScreen;
