import React from 'react';
import { View, Text} from 'react-native';

export default function RecipeSelect (item:any, index:number) {
    const { dataReceita } = item.item;

    console.warn(dataReceita);
    return (
        <View>
           <Text>{new Date(dataReceita.seconds)}</Text>
        </View>
    )
}