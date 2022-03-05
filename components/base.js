import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from '../styles/globalStyles';
import { useFonts } from '@expo-google-fonts/inter';
import { useState } from 'react';
import JumpBtn from './customBtn'
import { HeadStyle } from '../styles/headerStyles';
import { Ionicons } from '@expo/vector-icons';
import { NetworkConsumer, NetworkProvider } from "react-native-offline";


export default function Base(){
    const a = () => {
        setDark(!dark);
    }
    const [conEst, setConest] = useState(false)
    const [dark, setDark] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setDark(!dark)
    };
    return(
        
        <View style={[styles.container, !dark?styles.body:styles.darkBody]}>
            <NetworkConsumer>
            {({isConnected}) =>
                        isConnected?
                        (<View style={HeadStyle.headContainer}>
                            <Switch
                            trackColor={{ false: "#ffffff", true: "#81b0ff" }}
                            thumbColor="#89A2FA"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{paddingHorizontal: 10}}
                            />
                            <Pressable style={HeadStyle.wifiBtn}>
                                <Ionicons name="wifi" size={32} color="#89A2FA" />
                            </Pressable>
                        </View>)
                        :(<View style={HeadStyle.headContainer}>
                            <Switch
                            trackColor={{ false: "#ffffff", true: "#81b0ff" }}
                            thumbColor="#89A2FA"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{paddingHorizontal: 10}}
                            />
                            <Pressable style={HeadStyle.wifiBtn}>
                                <Ionicons name="offline" size={32} color="#89A2FA" />
                            </Pressable>
                        </View>)}
            </NetworkConsumer>
        </View>
    );
}