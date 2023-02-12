import { View, Text, StyleSheet } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
};

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ee9972",
    marginBottom: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
    fontStyle: "italic"
  },
});

export default LittleLemonFooter;
