import { Button, Text, View } from "react-native";

export default function Index() {
  var locale = Intl.DateTimeFormat().resolvedOptions().locale;
  var lang = locale.split("-")[0];
  var region = locale.split("-")[1];
  return (
    // <AppBar>Hello</AppBar>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Hello"></Button>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
