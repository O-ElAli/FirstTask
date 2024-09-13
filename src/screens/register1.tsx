


import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

const registerStyles = StyleSheet.create({
    title:{
        fontSize: 50,
        textAlign:'center',
        color: 'navy',
        marginTop:20
    },
    description:{
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
    },
    input:{
        padding:20,
        marginTop: 20,
        margin: 10,
        fontSize:20,
        backgroundColor: 'lightgrey',
        borderRadius: 15
    },
    button:{
        backgroundColor: 'navy',
        borderRadius: 15,
        marginTop: 40,
        margin: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})



const RegisterScreen: React.FC<ScreenProps> = ({navigation}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [display, setDisplay] = useState(false)

    function clearInfo(){
        setName("");
        setEmail("");
        setPassword("");
        setDisplay(false)
    }

    function displayInfo(){
        navigation.navigate('DisplayInfo', { name, email, password });
    }



    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{alignItems:'center', marginTop:0}}>
                    <Image source={require("../assets/React.png")} style={{height:100,width:100}}/>
                </View>
                <Text style={registerStyles.title}>
                    Create Account
                </Text>
                <Text style={registerStyles.description}>
                    Create an account so you can all the existing jobs
                </Text>
                <View>
                    <TextInput 
                    placeholder='Username'
                    onChangeText={(text) => setName(text)} //arrow function is given text as param to be able to change the usestate
                    value={name}
                    placeholderTextColor={'black'}
                    style={registerStyles.input}
                    />
                    <TextInput 
                    placeholder='Email'
                    onChangeText={(text) => setEmail(text)} //arrow function is given text as param to be able to change the usestate
                    value={email}
                    placeholderTextColor={'black'}
                    style={registerStyles.input}
                    />
                    <TextInput 
                    placeholder='Password'
                    onChangeText={(text) => {setPassword(text)}}
                    value={password}
                    placeholderTextColor={'black'}
                    style={registerStyles.input}
                    />
                </View>
                <View>
                    <TouchableOpacity style={registerStyles.button}>
                        <Text style={{
                            fontSize:20,
                            color: 'white',
                            textAlign: 'center',
                            padding: 20,
                        }}
                        onPress={() => displayInfo()

                        }
                        >
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

export default RegisterScreen;