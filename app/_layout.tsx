import { DarkTheme, Stack, ThemeProvider } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack
        screenOptions={
          {
            title: "Merry Christmas",
            headerStyle: {
              backgroundColor: "#ff0000"
            }
          }
        }
      />
    </ThemeProvider>);
}
