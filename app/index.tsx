import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, Alert, ToastAndroid, ToastAndroidStatic } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";
// import { useAudioPlayer } from "expo-audio";

export default function Index() {
  var locale = Intl.DateTimeFormat().resolvedOptions().locale;
  var lang = locale.split("-")[0];
  var region = locale.split("-")[1];
  //const player = useAudioPlayer("./assets/we-wish-you-a-merry-christmas.mp3")

  function playaudio() {
    //player.play()
  }
  return (
    <View
      style={styles.container}
    >
      <Button title="Hello" onPress={playaudio}></Button>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, button: { color: rgbaColor(0,0,0).toString() }
});