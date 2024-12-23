import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, Alert, ToastAndroid, ToastAndroidStatic } from "react-native";
import { Audio } from "expo-av";

export default function Index() {
  var locale = Intl.DateTimeFormat().resolvedOptions().locale;
  var lang = locale.split("-")[0];
  var region = locale.split("-")[1];

  function playaudio() {
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
  },
});