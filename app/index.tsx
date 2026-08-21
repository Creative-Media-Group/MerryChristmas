import { useAudioPlayer } from "expo-audio";
import { Button, Host, Text } from "@expo/ui";
import { useTheme } from "expo-router";

export default function Index() {
  const audiosrc = require("../assets/sound/we-wish-you-a-merry-christmas.mp3")
  const player = useAudioPlayer(audiosrc)
  const theme = useTheme();

  const playaudio = () => {
    player.seekTo(0);
    player.play()
    player.release()
  }

  return (
    <Host
      style={{
        flex: 1,
        backgroundColor: "#ff000041",
        //flex: 1,
        borderRadius: 10,
        height: "80%",
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        gap: "50%",
      }}

    >

      <Text textStyle={{ color: theme.colors.text.toString() }}>Merry Christmas</Text>
      <Button
        label="Merry Christmas"
        onPress={
          () => playaudio()
        }
        style={{ backgroundColor: "#ff0000" }}
      >
      </Button>
    </Host>
  );
}
