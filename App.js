import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'

export default function App() {
  return (
    <Svg height="100%" width="100%">
      <SvgImage href={require("./assets/menuescreen.svg")} height="100%" width="100%"></SvgImage>
      <View style={styles.container}>
        <Text>Merry Christmas!</Text>
        <StatusBar style="auto" />
      </View>
    </Svg>
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
