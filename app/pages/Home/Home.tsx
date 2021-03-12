import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Text, TextInput
} from "react-native";
import RecipeSection from '../../components/RecipeSection/RecipeSection';
import { styles } from './Home.styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import firestore from "@react-native-firebase/firestore";


function Home({navigation} :any) {

  const [date, setDate] = useState(new Date());
  const [showPicker, setShow] = useState(false);
  const [recipeList, setRecipeList] = useState();

  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  useEffect(() => {

    async function getRecipes() {
      try {
        let response = await firestore()
          .collection('receitas')
          .get();
        setRecipeList(response)
      } catch(error) {
        console.log(error)
      }

      console.log(response)

    }

    getRecipes()
  }, [])

  const showDatePicker = () => {
    setShow(true);
  };

  return (
      <View style={styles.recipeSection}>
        <View style={styles.searchbarSection}>
          <Icon name="search" size={20} color={'#c3c988'} />
          <TextInput
            style={styles.searchbar}
            placeholder="Pesquisar..."
            underlineColorAndroid="transparent"
            placeholderTextColor={'#c3c988'}
          />

        </View>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.btnDatePicker}
        >
          <Text
            style={styles.dateLabel}
          >
            12/02/2021
          </Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <RecipeSection navigation={navigation}/>
        <RecipeSection navigation={navigation}/>
        <RecipeSection navigation={navigation}/>
      </View>
  )
}

export default Home
