


import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Image from 'react-native-svg'

import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../assets/styles'

import BackgroundAnimation from '../assets/animatedBg';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

import { useState } from 'react';

import axios from 'axios';

// type LoginScreenProps = {
//     navigation: NativeStackScreenProps<RootStackParamList, 'Login'>
// }

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  async function handleLogin(){
    try{
      const response = await axios.post("http://127.0.0.1:8081/api/login", {
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      }
    );
    if(response.data.user){
      navigation.navigate('Directory')
    }
  }
    catch(e){
      console.log(e)
    }
  }

  return (
  <View style={{flex:1}}>
    {/* header */}
    <View style={[styles.header]}>
      <Text style={styles.headerText}>
        Welcome!
      </Text>
    </View>

    {/* <BackgroundAnimation /> */}

    {/* Authentication */}
    <View style={styles.mainContainer}>
      <Text style={styles.login}>
        LOGIN
      </Text>
      <TextInput placeholder='USERNAME' style={styles.input} value = {email} onChangeText={(text) => {setEmail(text)}}/>
      <TextInput placeholder='PASSWORD' style={styles.input} value = {password} onChangeText={(text) => {setPassword(text)}}/>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} >
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.new}>
            New user?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Directory')} style={styles.buttons}>
        <Text>
          Go to testing page
        </Text>
      </TouchableOpacity>
    </View>

  </View>
  )
}




export default Login;