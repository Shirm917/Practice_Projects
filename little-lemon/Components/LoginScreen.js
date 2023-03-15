import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {isLoggedIn ? (
          <Text style={styles.regularText}>You are logged in!</Text>
        ) : (
          <>
            <Text style={styles.regularText}>Login to continue</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={true}
            />
            <Pressable
              style={styles.button}
              onPress={() => setIsLoggedIn(!isLoggedIn)}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "white",
    textAlign: "center",
  },
  input: {
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderColor: "edefee",
    backgroundColor: "white",
    margin: 12,
  },
  button: {
    backgroundColor: "#ee9972",
    borderColor: "#ee9972",
    padding: 10,
    marginVertical: 8,
    margin: 100,
    borderWidth: 2,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center"
  },
});

export default LoginScreen;
