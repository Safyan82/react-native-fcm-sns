/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { getDeviceToken } from './services/firebase';
import messaging from '@react-native-firebase/messaging';



function App() {
  const [token, setToken] = useState();

  const isDarkMode = useColorScheme() === 'dark';
  useEffect(()=>{
    getDeviceToken().then((tok)=>{setToken(tok);console.log(tok)});
    messaging().onMessage(async(message)=>{
      console.log(message, "messageee");
    })
  },[]);
  return (
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          < Text>{token}</Text>
        </View>
  );
}

export default App;
