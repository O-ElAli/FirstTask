
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'

import React,{ useState } from 'react';

const MyComponent = ( {state} : {state:string} ) =>{
//first state is a props, we destruct it first so we can directly use it. second part defines that the props being receive will be state of type string

//ChatGPT: "The first state is being destructured from the props object so that we can use it directly inside the component. The second part defines that the props object will contain a property called state of type string."

    return(
        <View>
            <Text>
                {state}
            </Text>
        </View>
    )
}


const DynamicList = () => {

    const [walk, setWalk] = useState(false)
    const [components, setComponents] = useState<string[]>([]) //use  state of time string array and initiate it with an empty array

    const addComponents = () => {
        const newStatus = walk ? 'walk' : 'stop'
        setComponents([...components,newStatus]); //we dont "add" an element to an existing array, we create a new one while copying the old info and adding the new variable
    }

    return (
        <View style={{flex:1, backgroundColor:'lightgrey'}}>
            <Text>
                Hello world!
            </Text>
            
            {/* toggling walk/stop mechanism*/}

            <TouchableOpacity style={{backgroundColor: 'lightgreen'}} onPress={()=>setWalk(!walk)}>
                <Text>
                    Change to {walk?'stop':'walk'}
                </Text>
            </TouchableOpacity>
            <Text>
                {walk? 'walk':'stop'}
            </Text>
            {/* add new components dynamically here*/}
            <TouchableOpacity onPress={addComponents}>
                <Text>
                    Create component

                </Text>
            </TouchableOpacity>
            <ScrollView>
                {components.map((state, index)=>{
                    return(
                        <MyComponent key={index} state={state} />
                    )
                })}
            </ScrollView>
            
        </View>
    )
}




export default DynamicList;


