import React from "react";
import {StyleSheet} from 'react-native';

export const onlineBodyStyles = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    body2:{
        flex: 0.06,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    input: {
        height: '7%',
        width: '80%',
        borderBottomWidth: 2,
        borderBottomColor: '#89A2FA',
        paddingHorizontal: '5%',
        fontFamily: 'MonsReg',
        fontSize: 20,
        color: "#000000"
    },
    inputDarkMode: {
        height: '7%',
        width: '80%',
        borderBottomWidth: 2,
        borderBottomColor: '#89A2FA',
        paddingHorizontal: '5%',
        fontFamily: 'MonsReg',
        fontSize: 20,
        color: "#ffffff"
    },
    btnRow: {
        flex: 0.1,
        flexDirection: "row",
        paddingTop: "11%",
    },
    
});