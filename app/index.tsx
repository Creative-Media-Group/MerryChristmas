import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, Alert, ToastAndroid, ToastAndroidStatic, PushNotification } from "react-native";
import { useAudioPlayer } from "expo-audio";
import audiosrc from "../assets/we-wish-you-a-merry-christmas.mp3";

export default function Index() {
  var locale = Intl.DateTimeFormat().resolvedOptions().locale;
  var lang = locale.split("-")[0];
  var region = locale.split("-")[1];
  const containerStyles = ""
  const player = useAudioPlayer(audiosrc)

  const playaudio = () => {
    player.play()

  }
  const showToast = () => {
    Alert.alert(
      'Merry Christmas',
      'Merry Christmas',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel")
        },
        {
          text: "OK",
          onPress: () => playaudio()
        }
      ]
    )
  }

  return (
    <View
      style={styles.container}
    >
      <Text>Merry Christmas</Text>
      <Button
        title="Merry Christmas"
        onPress={
          () => showToast()
        }
        color={"#ff0000"}
      >
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "50%"
  },
  button: { color: "#fffff" }
});