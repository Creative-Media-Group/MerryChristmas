import { Button, Text, View } from "react-native";
import { useAudioPlayer } from "expo-audio";
import useStyle from "../design/style";

export default function Index() {
  const audiosrc = require("../assets/sound/we-wish-you-a-merry-christmas.mp3")
  const player = useAudioPlayer(audiosrc)
  const style = useStyle()

  const playaudio = () => {
    player.seekTo(0);
    player.play()
    // player.release()
  }

  return (
    <View
      style={style.container}
    >
      <View style={style.secondcontainer}>
        <Text style={style.text}>Merry Christmas</Text>
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
