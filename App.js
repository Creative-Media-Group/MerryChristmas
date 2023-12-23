import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

export default function App() {
  return (
    // <ImageBackground source={require("./assets/background.png")} height={"100%"} width={"100%"}>
    <View style={styles.container}>
      <Text>Merry Christmas!</Text>
      <Button title='Hallo' onPress={playsound} style={styles.hellobutton}></Button>
      <StatusBar style="auto" />
    </View>
    // </ImageBackground>

  );
}
function playsound() {
  alert("playing")
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "100px"
  },
  hellobutton: {
    flex: 1,
    backgroundColor: 'green',
    //margin: "100px"
  },
});
