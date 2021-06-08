import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home/Home";
import Details from "../Details/Details";
import NewHome from '../NewHome/NewHome';
import HeaderFavorites from '../../components/HeaderFavorites/HeaderFavorites';


function App () {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="newHome" 
          component={NewHome} 
          options={{ 
            title: 'Receitas', 
            headerStyle: {
              backgroundColor: '#d40000'
            }, 
            headerTintColor: '#FFFFFF', 
            headerRight: () => {
              return (
                <HeaderFavorites />
              )
            }
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
