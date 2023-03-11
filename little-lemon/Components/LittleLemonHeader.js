import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Little Lemon</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#ee9972",
  },
  text: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});

export default LittleLemonHeader;


