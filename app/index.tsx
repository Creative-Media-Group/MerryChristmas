import { Button, Text, View, StyleSheet } from "react-native";
import { useAudioPlayer } from "expo-audio";

export default function Index() {
  const audiosrc = require("../assets/sound/we-wish-you-a-merry-christmas.mp3")
  const player = useAudioPlayer(audiosrc)

  const playaudio = () => {
    player.play()
    // player.release()
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