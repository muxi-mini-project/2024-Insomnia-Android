import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    modalContent: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        minHeight: "40%",
        fontFamily: "PMingLiU Regular",
        fontSize: 24,
        color: "#fff"
    },
    conversationBackground: {
        width:"100%",
        opacity: .94,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex:1,
    },
    conversationButtonWrap: {
        flexWrap: 'wrap',
        width: "90%",
    }
});

export default styles