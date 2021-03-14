import React from 'react'
import {  BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import { View } from 'react-native';

interface IBanner {
    id: string, 
    size: string
}

const handleClose = () => {

}
const handleLoad = () => {

}
const handleFailedToLoad = () => {

}

const handleAdOpened = () => {

}

const handleLeftApplication = () => {
    
}

export default function Banner(props:IBanner) {
    return (
        <View>
            <BannerAd
                unitId={props.id} 
                size={props.size}
                onAdClosed={handleClose}
                onAdLoaded={handleLoad}
                onAdFailedToLoad={handleFailedToLoad}
                onAdOpened={handleAdOpened}
                onAdLeftApplication={handleLeftApplication}
            />
        </View>
    )
}