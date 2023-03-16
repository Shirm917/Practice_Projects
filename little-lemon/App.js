import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import LittleLemonHeader from "./Components/LittleLemonHeader";
import LittleLemonFooter from "./Components/LittleLemonFooter";
import WelcomeScreen from "./Components/WelcomeScreen";
import MenuItems from "./Components/MenuItems";
import LoginScreen from "./Components/LoginScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Welcome") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Login") {
                iconName = "ios-enter"
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "grey"
          })}
        >
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
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
