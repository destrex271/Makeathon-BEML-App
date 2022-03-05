import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch, TextInput} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from '../styles/globalStyles';
import { useFonts } from '@expo-google-fonts/inter';
import { useState } from 'react';
import JumpBtn from './customBtn'
import { HeadStyle } from '../styles/headerStyles';
import { Ionicons } from '@expo/vector-icons';
import { NetworkConsumer, NetworkProvider } from "react-native-offline";
import { onlineBodyStyles } from "../styles/onlineBody";

export default function Online(){
    const [conEst, setConest] = useState(false)
    const [dark, setDark] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setDark(!dark)
    };

    const syncData = () => {
        console.log("Syncing Data")
    }

    const toCloud = () => {
        console.log("Sending data")
    }

    return( 
        <View style={[styles.container, !dark?styles.body:styles.darkBody]}>
            {/* Header */}
            <View style={HeadStyle.headContainer}>
                <Switch
                    trackColor={{ false: "#ffffff", true: "#81b0ff" }}
                    thumbColor="#89A2FA"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={HeadStyle.swicth}
                />
                <Pressable style={HeadStyle.wifiBtn}>
                    <Ionicons name="wifi" size={32} color="#89A2FA" />
                </Pressable>
            </View>
            {/* --------- */}
            {/* Online Body */}
            <View style={onlineBodyStyles.body}>
                <TextInput
                    placeholderTextColor={!dark?"#00000066":"#ffffffaa"}
                    style={!dark?onlineBodyStyles.input:onlineBodyStyles.inputDarkMode}
                    placeholder="127.0.0.1:3000/home"
                />
                <View style={onlineBodyStyles.btnRow}>
                    <JumpBtn text="Sync" fn= {syncData} full={false} />
                </View>
            </View>
            <View style={onlineBodyStyles.body2}>
                <JumpBtn text="To Cloud" fn= {toCloud} full={true}/>
            </View>
            {/* ----------- */}
        </View>
    );
}