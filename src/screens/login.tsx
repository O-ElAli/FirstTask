


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

import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../assets/styles'

import BackgroundAnimation from '../assets/animatedBg';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

// type LoginScreenProps = {
//     navigation: NativeStackScreenProps<RootStackParamList, 'Login'>
// }

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
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
        LOGIN
      </Text>
      <TextInput placeholder='USERNAME' style={styles.input} />
      <TextInput placeholder='PASSWORD' style={styles.input} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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