import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function Index() {
  const [sound, setSound] = useState();
  var locale = Intl.DateTimeFormat().resolvedOptions().locale;
  var lang = locale.split("-")[0];
  var region = locale.split("-")[1];

  async function playaudio() {
    const { sound } = await Audio.Sound.createAsync(require('./assets/we-wish-you-a-merry-christmas.mp3'));
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
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