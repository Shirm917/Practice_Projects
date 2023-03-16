// import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Ionicons from "@expo/vector-icons/Ionicons";
import LittleLemonHeader from "./Components/LittleLemonHeader";
import LittleLemonFooter from "./Components/LittleLemonFooter";
import WelcomeScreen from "./Components/WelcomeScreen";
// import MenuItems from "./Components/MenuItems";
// import LoginScreen from "./Components/LoginScreen";
import RootNavigator from "./navigators/RootNavigator";

// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
      {/* <View style={styles.container}>
        <LittleLemonHeader />
        <Drawer.Navigator useLegacyImplementation initialRouteName="Welcome">
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View> */}
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
