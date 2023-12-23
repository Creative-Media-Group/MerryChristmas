import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

export default function App() {
  return (
    // <ImageBackground source={require("./assets/background.png")} height={"100%"} width={"100%"}>
    <View style={styles.container}>
      <Text>Merry Christmas!</Text>
      <Button title='Hallo' onPress={playsound} style={styles.hellobutton}></Button>
      <Button title='Red' onPress={redbutton} style={styles.hellobutton}></Button>
      <Button title='Green' onPress={greenbutton} style={styles.hellobutton}></Button>
      <Button title='Blue' onPress={bluebutton} style={styles.hellobutton}></Button>
      <StatusBar style="auto" />
    </View>
    // </ImageBackground>
  );
}
function playsound() {
  alert("playing")
};
function redbutton() {
  styles.container.backgroundColor = "red"
};
function greenbutton() {
  styles.container.backgroundColor = "green"
};
function bluebutton() {
  styles.container.backgroundColor = "blue"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hellobutton: {
    flex: 1
    //margin: "100px"
  },
});
