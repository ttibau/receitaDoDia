import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome5";

function HeaderFavorites() {
    return (
        <TouchableOpacity style={{ marginRight: 20}}>
            <Icon name="heartbeat" size={20} color={'#FFFFFF'} />
        </TouchableOpacity>
    )
}


export default HeaderFavorites