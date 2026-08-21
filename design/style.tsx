import { useTheme } from "expo-router";
import { StyleSheet } from "react-native";
export default function useStyle() {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "50%",
        },
        button: { color: "#ffffffff" },
        text: { color: theme.colors.text },
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
}