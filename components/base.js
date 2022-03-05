import React from "react";
import {View} from 'react-native';
import { NetworkConsumer} from "react-native-offline";
import Offline from "./offline";
import Online from "./online";

export default function Base(){
    return(
        
        <View style={{flex: 1}}>
            <NetworkConsumer>
                {({isConnected}) =>
                            isConnected?
                            (<Online />)
                            :(<Offline />)}
            </NetworkConsumer>
        </View>
    );
}