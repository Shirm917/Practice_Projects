import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LittleLemonHeader from "./Components/LittleLemonHeader";
import LittleLemonFooter from "./Components/LittleLemonFooter";
import WelcomeScreen from "./Components/WelcomeScreen";
import MenuItems from "./Components/MenuItems";
import LoginScreen from "./Components/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  footer: {
    backgroundColor: "#333",
  },
});
