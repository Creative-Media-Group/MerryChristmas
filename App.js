import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

export default function App() {
  return (
    // <ImageBackground source={require("./assets/background.png")} height={"100%"} width={"100%"}>
    <View style={styles.container}>
      <View style={styles.btn}>
        <Text>Merry Christmas!</Text>
      </View>
      <View style={styles.btn}>
        <Button title='Hallo' onPress={playsound}></Button>
      </View>
      <View style={styles.btn}>
        <Button title='Red' onPress={redbutton} style={styles.hellobutton}></Button>
      </View>
      <View style={styles.btn}>
        <Button title='Green' onPress={greenbutton} style={styles.hellobutton}></Button>
      </View>
      <View style={styles.btn}>
        <Button title='Blue' onPress={bluebutton} style={styles.hellobutton}></Button>
      </View>
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
    justifyContent: 'center',
    padding: 10

  },
  btn: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 0
    //padding: 1
  },
});
