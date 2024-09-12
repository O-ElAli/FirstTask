import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../assets/styles';

import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Directory'>;

const Directory: React.FC<ScreenProps> = ({navigation}) => {


    return(
        <View style={{flex:1, alignItems:'center',}}>
            <Text style={{fontSize: 70}}>
                Directory
            </Text>
            <View>
                <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('UseState')}>
                    <Text style={{color:'white'}}>
                        Use State test
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={{color:'white'}}>
                        Dynamic list test
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}







export default Directory;
