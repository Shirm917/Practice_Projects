import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Subscribe from "../screens/Subscribe";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Subscribe" component={Subscribe}/>
        </Stack.Navigator>
      );
}
 
export default RootNavigator;