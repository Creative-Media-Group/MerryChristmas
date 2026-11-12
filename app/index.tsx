import { useAudioPlayer } from "expo-audio";
import { Button, Column, Host, Text } from "@expo/ui";
import { useTheme } from "expo-router";

export default function Index() {
  const audiosrc = require("../assets/sound/we-wish-you-a-merry-christmas.mp3")
  const player = useAudioPlayer(audiosrc)
  const theme = useTheme();

  const playaudio = () => {
    player.play();
    player.seekTo(0);
  }

  return (
    <Host
      style={{
        flex: 1
      }}

    >
      <Column>
        <Text textStyle={{ color: theme.colors.text?.toString() }}>Merry Christmas</Text>
        <Button
          label="Merry Christmas"
          onPress={
            () => playaudio()
          }
        >
        </Button>
      </Column>
    </Host>
  );
}
