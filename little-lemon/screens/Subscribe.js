import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import { validateEmail } from "../utils/index";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    Alert.alert("Thanks for subscribing, stay tuned!");
  };

  const emailCheck = validateEmail(email);

  return (
    <KeyboardAvoidingView style={subscribeStyles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={subscribeStyles.container}>
        <Image
            style={subscribeStyles.logo}
            source={require("../assets/little-lemon-logo-grey.png")}
            resizeMode="contain"
        />
        <Text style={subscribeStyles.bodyText}>Subscribe to our newsletter for our {"\n"} latest delicious recipes!</Text>
        <TextInput
            style={subscribeStyles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Type Your Email"
        />
        <Pressable style={[subscribeStyles.button, !emailCheck ? subscribeStyles.disabledButton : subscribeStyles.notDisabledButton]} onPress={subscribe} disabled={!emailCheck}>
            <Text style={subscribeStyles.buttonText}>Subscribe</Text>
        </Pressable>
        </View>
    </KeyboardAvoidingView>
  );
};

const subscribeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20
  },
  bodyText: {
    textAlign: "center"
  },
  input: {
    height: 40,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderColor: "edefee",
    backgroundColor: "white",
    margin: 12,
    borderRadius: 8
  },
  button: {
    width: 350,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  },
  disabledButton: {
    backgroundColor: "grey"
  },
  notDisabledButton: {
    backgroundColor: "#006400",
  }
});

export default Subscribe;
