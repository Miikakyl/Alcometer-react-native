import { StyleSheet } from "react-native";

export default StyleSheet.create({
    numberInputContainer: {
        width: "100%"
    },
    numberInputLabel: {
        fontSize: 18,
        paddingBottom: 5,
    }
    ,
    numberInputButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        width: "100%",
        borderWidth: 0,
        borderRadius: 20,
        textAlign: 'center',
        marginBottom: 25
    },
    numberButtonLeft: {
        height: "100%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20

    },
    numberButtonRight: {
        height: "100%",
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20

    },
    numberIndicator: {
        fontSize: 20
    }
})