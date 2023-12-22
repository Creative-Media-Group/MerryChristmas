import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

export default function App() {
  return (
    <ImageBackground source={require("./assets/splash.png")} style={styles.container}>
    <View style={styles.container}>
      <Text>Merry Christmas!</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
