import { StyleSheet } from "react-native";
export default function mystyle() {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "50%",
            backgroundColor: "rgb(0, 0, 0)"
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
}