import { View, ScrollView, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 50,
          color: "#edefee",
          padding: 40,
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon{" "}
      </Text>
      <Text
        style={{
          padding: 20,
          fontSize: 38,
          marginVertical: 8,
          color: "#edefee",
          textAlign: "center",
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
};

export default WelcomeScreen;
