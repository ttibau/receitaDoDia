import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home/Home";
import Details from "../Details/Details";
import NewHome from '../NewHome/NewHome';
import HeaderFavorites from '../../components/HeaderFavorites/HeaderFavorites';
import RecipesList from '../RecipesList/RecipesList';


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
          options={{ 
            title: 'Lista', 
            headerStyle: {
              backgroundColor: '#d40000',
            }, 
            headerTintColor: '#FFFFFF', 
          }}
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
