import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

const red = "Red";
const green = "Green";
const blue = "Blue";

export default function App() {
  return (
    <ImageBackground source={require("./assets/background.png")} resizeMode='cover' style={styles.background}>
      <View style={styles.container}>
        <Text>Merry Christmas!</Text>
      </View>
      <View style={styles.btn}>
        <Button title='Play gingle' onPress={playsound}></Button>
      </View>
      <View style={styles.btn}>
        <Button title={red} onPress={playsound} style={styles.hellobutton}></Button>
      </View>
      <View style={styles.btn}>
        <Button title={green} onPress={playsound} style={styles.hellobutton}></Button>
      </View>
      <View style={styles.btn}>
        <Button title={blue} onPress={playsound} style={styles.hellobutton}></Button>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
function playsound() {
  Alert.alert("playing")
};
function button(text) {
  styles.container.backgroundColor = "red",
    Alert.alert(text)
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

    margin: 0,
    padding: 1
  },
});
