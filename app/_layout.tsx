import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ title: "Merry Christmas", headerStyle: { backgroundColor: "#ff0000" } }} />;
}
