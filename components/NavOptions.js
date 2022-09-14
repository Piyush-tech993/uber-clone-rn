import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {FlatList,TouchableOpacity, View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreeen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
]

const NavOptions = () => {
    return (
        <FlatList
            data = {data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image
                        style={{width: 120, height: 120, resizeMode: "contain"}}
                        source={{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                            name="arrowright"
                            type="antdesign"
                            style={tw`p-2 bg-black rounded-full w-10 m-4`}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions;
