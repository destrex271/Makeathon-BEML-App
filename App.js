import { Text, View, Switch} from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import { useState } from 'react';
import { NetworkProvider } from "react-native-offline";
import Base from './components/base';



export default function App() {
  

  let [fontsLoaded] = useFonts({
    'MonsReg' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'MonsBold' : require('./assets/fonts/Montserrat-SemiBold.ttf')
  })
  if(fontsLoaded){
    return (
      // <NetworkProvider>
      //   <View style={{flex:1}}>
      //     <Base />
      //   </View>
      // </NetworkProvider>
      <NetworkProvider>
        <View style={{flex:1}}>
          <Base />
        </View>
      </NetworkProvider>
    );
  }else{
    return(
      <View>
      </View>
    );
  }
}

