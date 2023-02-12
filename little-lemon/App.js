import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';
import WelcomeScreen from './Components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader/>
        <WelcomeScreen/>
      </View>
      <View style={{backgroundColor: "#495E57"}}>
        <LittleLemonFooter/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57"
  },
});
