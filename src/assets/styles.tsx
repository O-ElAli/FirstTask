
import React from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    mainContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      top: '10%',
    },
    header:{
      height:100,
      width: '100%',
      backgroundColor: 'cyan',
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    headerText:{
      fontSize: 50,
    },
    input:{
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'grey',
      width: '80%',
      padding: 10,
      margin: '5%',
    },
    login:{
      fontSize: 75,
      fontFamily: 'cursive'
    },
    loginButton:{
      backgroundColor: 'red',
      width: '50%',
      margin: '5%',
      borderRadius: 25,
      padding: 5,
      alignItems: 'center'
    },
    loginText:{
      fontSize: 30,
    },
    new:{
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    newUser:{

    },
    background: {
      position: 'absolute',
      width: 1200,
      height: 1200,
      top: 0,
      opacity: 0.2,
      transform: [
        {
          translateX: 0,
        },
        {
          translateY: 0,
        },
      ],      
    },
    buttons:{
      height: 50,
      width: 150,
      backgroundColor: 'grey',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 25
    }
  })

  export default styles;

