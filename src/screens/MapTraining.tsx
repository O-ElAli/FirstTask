import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'


const places = [
    {
        category: 'Villa',
        locations: [
            { name: 'Evergreen', price: '180', location: 'Amman, Jordan' },
            { name: 'Deadsville', price: '250', location: 'Nordland' }
        ]
    },
    {
        category: 'Apartments',
        locations: [
            { name: 'Skyline', price: '120', location: 'New York, USA' },
            { name: 'OceanView', price: '150', location: 'Sydney, Australia' }
        ]
    }
];

type Types = {
    key:number
    value:string
}

interface Location {
    name:string;
    price:string;
    location:string
}

interface PlaceCategory {
    category:string;
    locations:Location[];
}


const Training:React.FC = () => {

    

    return(
        <SafeAreaView>
            {
                places.map((place : PlaceCategory, index: number) => {
                    return(
                        <View key={index}>
                            <Text>
                                {place.category}
                            </Text>

                            {
                                place.locations.map((location:Location, locIndex:number) =>{
                                    return(
                                        <View key={locIndex}>
                                            <Text>{location.name}</Text>
                                            <Text>{location.price}</Text>
                                            <Text>{location.location}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }


        </SafeAreaView>
    )


}

export default Training;