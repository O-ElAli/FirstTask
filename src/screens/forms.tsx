import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';




const FormsScreen = () => {

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

    return (
        <View>
            <Text style={{fontSize:50, }}>
                Forms test
            </Text>
            <TextInput
            placeholder='Username'
            onChangeText={(text) => setName(text)} //arrow function is given text as param to be able to change the usestate
            value={name}
            style={{borderWidth: 2, borderColor: 'black', margin:10}}
            />
            <TextInput
            placeholder='Email'
            onChangeText={(text) => setEmail(text)} //arrow function is given text as param to be able to change the usestate
            value={email}
            style={{borderWidth: 2, borderColor: 'black', margin:10}}
            />
            <TextInput
            placeholder='Password'
            onChangeText={(text) => setPassword(text)} //arrow function is given text as param to be able to change the usestate
            value={password}
            style={{borderWidth: 2, borderColor: 'black', margin:10}}
            />
            <View style={{margin:10}}>
                <Button 
                title='Display information'
                onPress={() => setDisplay(true)}
                />
            </View>
            <View style={{margin:10}}>
                <Button 
                title='Clear information'
                onPress={clearInfo}
                />
            </View>
            <View style={{margin:10}}>
                {display ?
                <View>
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{password}</Text>
                </View>
                :null}
            </View>

        </View>
    );
};

export default FormsScreen;