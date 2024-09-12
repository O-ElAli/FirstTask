import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/styles';
import { StyleSheet } from 'react-native';

import { sculptureList } from '../assets/data';

const UseStateTest = () => {

    {/* Declare the useState and implement function */}
    const [index, setIndex] = useState(0);

    function Next(){
        if(index == sculptureList.length-1){
            setIndex(0)
        }
        else{
            setIndex(index+1);
        }
    }

    function Previous(){
        if(index == 0){
            setIndex(sculptureList.length-1)
        }
        else{
            setIndex(index-1)
        }
    }

    const [show, setShow] = useState(false)

    function showMore(){
        setShow(!show)
    }


    let sculpture = sculptureList[index]
    return(
    <View style={{flex:1}}>
        <Text style={{fontSize:50}}>
            Sculpting
        </Text>
        <View>
            <TouchableOpacity style={{backgroundColor:'grey'}} onPress={() => Previous()}>
                <Text>
                    Previous
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'grey'}} onPress={() => Next()}>
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
            <Text>
                ({index} of {sculptureList.length-1})
            </Text>
            <Text>
                {sculpture.name} by {sculpture.artist}
            </Text>
            <Image 
                source={{ uri: sculpture.url }} 
                style={{ width: 200, height: 200 }} 
            />
            <TouchableOpacity onPress={() => showMore()}>
                <Text>
                    {show? 'Hide' : 'Show'} details
                </Text>
            </TouchableOpacity>
            <Text>
                {show && sculpture.description}
            </Text>
            {/* <Text>
                {sculpture.description}
            </Text> */}
        </View>
    </View>
    )  
}







export default UseStateTest;
