import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

export const HeadStyle = StyleSheet.create({
    headContainer: {
        flex: 0.05,
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        paddingHorizontal: '3%',
        paddingTop: '4%',
        flexDirection: "row"
    },
    textStyle: {
        fontFamily: "MonsReg",
        color: "#89A2FA"
    },
    wifiBtn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    },
})