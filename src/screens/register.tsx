


import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;


const Register:React.FC<LoginScreenProps> = ({navigation}) => {
  return (
  <View style={{flex:1}}>
    {/* header */}
    <View style={[styles.header]}>
      <Text style={styles.headerText}>
        Welcome!
      </Text>
    </View>
    <BackgroundAnimation />

    {/* Authentication */}
    <View style={styles.mainContainer}>
      <Text style={styles.login}>
        Register
      </Text>
      <TextInput placeholder='USERNAME' style={styles.input} />
      <TextInput placeholder='PASSWORD' style={styles.input} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>
          Sign up
        </Text>
      </TouchableOpacity>
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