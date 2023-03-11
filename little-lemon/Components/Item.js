import { View, Text, StyleSheet } from "react-native";

const Item = ({ name, price }) => {
  return (
    <View style={itemStyles.innerContainer}>
      <Text style={itemStyles.itemText}>{name}</Text>
      <Text style={itemStyles.itemText}>{price}</Text>
    </View>
  );
};

const itemStyles = StyleSheet.create({
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between"
      },
  itemText: {
    color: "#f4ce14",
    fontSize: 20,
  },

});

export default Item;

