import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Text, TextInput
} from "react-native";
import RecipeSection, { IRecipe } from '../../components/RecipeSection/RecipeSection';
import { styles } from './Home.styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from "@react-native-firebase/firestore";
import LottieView from 'lottie-react-native';
import { InterstitialAd, AdEventType } from '@react-native-firebase/admob';
import { format } from 'date-fns';


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-9770723451826598/9884755347', {
  requestNonPersonalizedAdsOnly: true,
});

function Home({navigation} :any) {

  const [date, setDate] = useState(new Date());
  const [showPicker, setShow] = useState(false);
  const [recipeList, setRecipeList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bannerLoaded, setBannerLoaded] = useState<boolean>(true);
  const [today, setToday] = useState(new Date());

  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setToday(selectedDate);
  };

  useEffect(() => {
    
    async function getRecipes() {
      setLoading(true);
      let formatted = format(today,"yyyyMMdd");
      try {
        let response : any = await firestore()
          .collection('receitas')
          .doc(formatted)
          .get();
        if(response._data)
          console.log(response)
          // setRecipeList(response._data.receitas)
          setLoading(false);
      } catch(error) {
        console.log(error);
        setLoading(false);
      }
    }

    getRecipes()

    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setBannerLoaded(true);
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };

  }, [])

  const showDatePicker = () => {
    setShow(true);
  };

  return (
      <View style={styles.recipeSection}>

        {loading &&
          <View style={styles.loadingContainer}>
            <LottieView source={require('../../assets/loading.json')} style={{ width: 250, height: 250}} autoPlay loop />
            <Text style={styles.loadingTxt}>Estamos procurando algo incrível para você!</Text>
          </View>
        }

        {!bannerLoaded &&
          <View style={styles.loadingContainer}>
            <LottieView source={require('../../assets/loading.json')} style={{ width: 250, height: 250}} autoPlay loop />
            <Text style={styles.loadingTxt}>Estamos procurando algo incrível para você!</Text>
          </View>
        }

        {!loading && bannerLoaded &&
          <>
            {/* <View style={styles.searchbarSection}>
              <Icon name="search" size={20} color={'#c3c988'} />
              <TextInput
                style={styles.searchbar}
                placeholder="Pesquisar..."
                underlineColorAndroid="transparent"
                placeholderTextColor={'#c3c988'}
              />

            </View> */}
            <View>
              <Text style={styles.dateDescription}>clique na data para selecionar uma outra</Text>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.btnDatePicker}
              >
                <Text
                  style={styles.dateLabel}
                >
                  {format(today,"dd/MM/yyyy")}
                </Text>
              </TouchableOpacity>

            </View>
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

            {recipeList.length > 0 && recipeList.map((recipe:IRecipe, index:number) => {
              return <RecipeSection key={index} data={recipe} navigation={navigation} />
            })}
          </>
        }
      </View>
  )
}

export default Home
