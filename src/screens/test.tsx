import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../assets/styles';

import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Directory'>;

const Directory: React.FC<ScreenProps> = ({navigation, route}) => {

    

    const { user, token } = route.params || {};
    console.log(user);

    return(
        <View style={{flex:1, alignItems:'center',}}>
            <Text style={{fontSize: 70}}>
                Directory
            </Text>
            <Text>
                Welcome {user.name} 
            </Text>
            <View>
                <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('UseState')}>
                    <Text style={{color:'white'}}>
                        Use State test
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={{color:'white'}} onPress={() => navigation.navigate("DynamicList")}>
                        Dynamic list test
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={{color:'white'}} onPress={() => navigation.navigate("Forms")}>
                        Forms test
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={{color:'white'}} onPress={() => navigation.navigate("RegisterScreen")}>
                        Register Screen
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={{color:'white'}} onPress={() => navigation.navigate("MapTraining")}>
                        Map Training
                        </Text>
                </TouchableOpacity>
            </View>
            <Text>
                Token: {token}
            </Text>
        </View>
    )
}







export default Directory;
