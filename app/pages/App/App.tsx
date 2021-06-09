import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home/Home";
import Details from "../Details/Details";
import NewHome from '../NewHome/NewHome';
import HeaderFavorites from '../../components/HeaderFavorites/HeaderFavorites';
import RecipesList from '../RecipesList/RecipesList';
import { View, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { InterstitialAd, AdEventType, TestIds } from '@react-native-firebase/admob';
import OneSignal from 'react-native-onesignal'



function App () {
  const Stack = createStackNavigator();
  const [adLoaded, setAdLoaded] = useState<boolean>(false);

  const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-9770723451826598/1593477950', {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setAdLoaded(true);
      }
    });
    interstitial.load()

    OneSignal.setAppId("e9dcdf0b-750f-4d1b-8835-ea51ba8fc4b9");
    OneSignal.setLogLevel(6, 0);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      this.OSLog("Prompt response:", response);
    });
    
    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // if(!adLoaded) {
  //   return <View>
  //     <Text>Carregando...</Text>
  //   </View>
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="newHome" 
          component={NewHome} 
          options={{ 
            title: 'Receitas', 
            headerStyle: {
              backgroundColor: '#d40000',
            }, 
            headerTintColor: '#FFFFFF', 
            headerRight: () => {
              return (
                <HeaderFavorites />
              )
            },
          }}
        />
        <Stack.Screen 
          name="recipeList"
          component={RecipesList}
          options={({ navigation }) => ({
            title: 'Lista', 
            headerStyle: {
              backgroundColor: '#d40000',
            }, 
            headerTintColor: '#FFFFFF', 
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  interstitial.load();
                  setTimeout(async () => {
                    await interstitial.show();
                    interstitial.onAdEvent(type => {
                      if (type === AdEventType.CLOSED) {
                        navigation.goBack()
                      }
                    });
                  }, 1000)
                }}
              />
            ),
            
          })}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{ 
            title: 'Detalhes', 
            headerStyle: {
              backgroundColor: '#d40000',
            }, 
            headerTintColor: '#FFFFFF', 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
