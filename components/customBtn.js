import React from "react";
import { View, Pressable, Text} from "react-native";
import { useState } from 'react';
import { styles } from "../styles/globalStyles";

export default function JumpBtn (props){
    const [pressed, setPress] = useState(false);
    const onPress = () => {
        setPress(true);
    }
    const outPress = () => {
        setPress(false);
    }
    
    return(
        <View>
            <Pressable style={[!props.full?(!pressed ? styles.customBtn : styles.customBtnOnPress):(!pressed ? styles.customBtn2 : styles.customBtnOnPress2)]} onPress={() => {onPress();props.fn();}} onPressOut={outPress}>
                <Text style={styles.btnText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}