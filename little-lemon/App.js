import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';
import WelcomeScreen from './Components/WelcomeScreen';
import MenuItems from './Components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader/>
        {/* <WelcomeScreen/> */}
        <MenuItems/>
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },
  footer: {
    backgroundColor: "#333333"
  }
});
