import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from './styles/globalStyles';
import { useFonts } from '@expo-google-fonts/inter';
import { useState } from 'react';
import JumpBtn from './components/customBtn'
import { HeadStyle } from './styles/headerStyles';

export default function App() {
  
  const a = () => {
    setDark(!dark);
  }
  
  const [dark, setDark] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      setDark(!dark)
  };

  let [fontsLoaded] = useFonts({
    'MonsReg' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'MonsBold' : require('./assets/fonts/Montserrat-SemiBold.ttf')
  })
  if(fontsLoaded){
    return (
      <View style={[styles.container, dark?styles.darkBody:styles.body]}>
        {/* <JumpBtn fn={a} /> */}
        <View style={HeadStyle.headContainer}>
          <Switch
            trackColor={{ false: "#ffffff", true: "#81b0ff" }}
            thumbColor="#89A2FA"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{paddingHorizontal: 10}}
          />
          <Pressable>
            
          </Pressable>
        </View>
      </View>
    );
  }else{
    return(
      <View>

      </View>
    )
  }
}

