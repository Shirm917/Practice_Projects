import { View, Image, Text, Pressable, StyleSheet } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={welcomeStyles.container}>
      <View>
        <Text style={welcomeStyles.logoText}>LITTLE</Text>
        <Image
          style={welcomeStyles.logo}
          source={require("../assets/littleLemonLogo.png")}
          resizeMode="contain"
        />
        <Text style={welcomeStyles.logoText}>LEMON</Text>
      </View>
      <Text style={welcomeStyles.bodyText} numberOfLines={2}>
        Little Lemon, your local {"\n"} Mediterranean Bistro
      </Text>
      <Pressable style={welcomeStyles.button} onPress={() => navigation.navigate("Subscribe")}>
        <Text style={welcomeStyles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 100
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    textAlign: "center",
    fontSize: 30,
    color: "#006400"
  },
  bodyText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#006400",
    width: 300,
    height: 40,
    borderRadius: 10,
    marginTop: 100
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  }
});

export default Welcome;
