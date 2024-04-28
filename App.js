import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

const red = "Red";
const green = "Green";
const blue = "Blue";

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
        <Button title={red} onPress={button => red} style={styles.hellobutton}></Button>
      </View>
      <View style={styles.btn}>
        <Button title={green} onPress={button => green} style={styles.hellobutton}></Button>
      </View>
      <View style={styles.btn}>
        <Button title={blue} onPress={button => blue} style={styles.hellobutton}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
    // </ImageBackground>
  );
}
function playsound() {
  alert("playing"),
    console.log("playing")
};
function button(text = "Hallo Welt") {
  styles.container.backgroundColor = "red",
    alert(text),
    console.log(text)
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
