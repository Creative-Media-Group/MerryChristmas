import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, Alert, ToastAndroid, ToastAndroidStatic, PushNotification } from "react-native";
import { useAudioPlayer } from "expo-audio";

export default function Index() {
  var locale = Intl.DateTimeFormat().resolvedOptions().locale;
  var lang = locale.split("-")[0];
  var region = locale.split("-")[1];
  const containerStyles = ""
  const player = useAudioPlayer("./assets/we-wish-you-a-merry-christmas.mp3")

  const playaudio = () => {
    player.play()

  }
  const showToast = () => {
    Alert.alert(
      'Merry Christmas',
      'Merry Christmas',
      [{
        text: "Cancel",
        onPress: () => console.log("Cancel")
      },
      { text: "OK", onPress: () => playaudio() }]
    )
  }

  return (
    <View
      style={styles.container}
    >
      <Button title="Hello" onPress={() => showToast()} ></Button>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, button: { color: "#fffff" }
});