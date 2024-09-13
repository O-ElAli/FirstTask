


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';

import Login from './src/screens/login';
import Register from './src/screens/register'
import Directory from './src/screens/test'
import UseStateTest from './src/screens/useState';
import DynamicList from './src/screens/dynamicList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const myStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login"
        component={Login}
        />
        <Stack.Screen
        name="Register"
        component={Register}
        />
        <Stack.Screen
        name="Directory"
        component={Directory}
        />
        <Stack.Screen
        name="UseState"
        component={UseStateTest}
        />
        <Stack.Screen
        name="DynamicList"
        component={DynamicList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myStack;


