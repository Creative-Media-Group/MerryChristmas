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
      <View style={styles.secondcontainer}>
        <Text style={styles.text}>Merry Christmas</Text>
        <Button
          title="Merry Christmas"
          onPress={
            () => playaudio()
          }
          color={"#ff0000"}
        >
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "50%",
    backgroundColor: "#000000ff"
  },
  button: { color: "#fffff" },
  text: { color: "#ffffffff" },
  secondcontainer: {
    //flex: 1,
    borderRadius: 10,
    height: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: "50%",
    backgroundColor: "#ff000041"
  }
});