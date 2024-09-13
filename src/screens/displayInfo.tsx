



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';


type DisplayInfoScreenProps = NativeStackScreenProps<RootStackParamList, 'DisplayInfo'>;

const DisplayInfo:React.FC<DisplayInfoScreenProps> = ( {route} ) => {

    const {name, email, password} = route.params


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>Password: {password}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});


export default DisplayInfo;