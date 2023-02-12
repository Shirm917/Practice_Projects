import { View, Text } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        marginBottom: 1
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          color: "black"
        }}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
};

export default LittleLemonFooter;
