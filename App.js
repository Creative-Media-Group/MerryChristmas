import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';
// import { Appbar } from 'react-native-paper';

const text = "todo";

export default function App() {
  return (
    // <ImageBackground source={require("./assets/background.png")} height={"100%"} width={"100%"}>
    <View style={styles.container}>
      <View style={styles.btn}>
        <Text>Merry Christmas!</Text>
      </View>
      <View style={styles.btn}>
        <Button title='Play gingle' onPress={playsound}></Button>
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
  styles.container.backgroundColor = "red",
    alert(text)
};
function greenbutton() {
  styles.container.backgroundColor = "green",
    alert(text)
};
function bluebutton() {
  styles.container.backgroundColor = "blue",
    alert(text)
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10

  },
  btn: {
    flex: 1,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 0
    //padding: 1
  },
});
