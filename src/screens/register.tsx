


import React, { useState } from 'react';
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

import styles from '../assets/styles'

import BackgroundAnimation from '../assets/animatedBg';

import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;


const Register:React.FC<LoginScreenProps> = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name ,setName] = useState("");

  const [error,setError] = useState<string | null>("");


  async function handleRegister() {
    try {
      const response = await axios.post("http://127.0.0.1:8081/api/register", {
        email,
        password,
        name
        // device_name: `${Platform.OS} ${Platform.Version}`,
      });
      if(response.data.user){ 
        setError(null);
        const { token, user } = response.data; // Destructure token and user from response

        // You can also navigate and pass user data to the next screen
        navigation.navigate('Directory', { user, token });
      }
    } catch (e) {
      setError("Invalid input")
      console.log(e.response.data); // Log the error response for more details
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

    {/* Authentication */}
    <View style={styles.mainContainer}>
      <Text style={styles.login}>
        Register
      </Text>
      <TextInput placeholder='USERNAME' style={styles.input} value={name} onChangeText={(text) =>{setName(text)}} />
      <TextInput placeholder='EMAIL' style={styles.input} value={email} onChangeText={(text) =>{setEmail(text)}} />
      <TextInput placeholder='PASSWORD' style={styles.input} value={password} onChangeText={(text) =>{setPassword(text)}} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText} onPress={handleRegister}>
          Sign up
        </Text>
      </TouchableOpacity>
      {error && 
      <Text style={{color:'red'}}>
        {error}
      </Text>
      }
      <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.new}>
            Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}




export default Register;