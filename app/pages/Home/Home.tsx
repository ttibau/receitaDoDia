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
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import firestore from "@react-native-firebase/firestore";
import LottieView from 'lottie-react-native';
import { InterstitialAd, RewardedAd, BannerAd, TestIds, AdEventType } from '@react-native-firebase/admob';


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-9770723451826598/9884755347', {
  requestNonPersonalizedAdsOnly: true,
});

function Home({navigation} :any) {

  const [date, setDate] = useState(new Date());
  const [showPicker, setShow] = useState(false);
  const [recipeList, setRecipeList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bannerLoaded, setBannerLoaded] = useState<boolean>(true);


  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  useEffect(() => {
    
    async function getRecipes() {
      setLoading(true);
      try {
        let response : any = await firestore()
          .collection('receitas')
          .doc('20210308')
          .get();
          setRecipeList(response._data.receitas)
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
                  12/02/2021
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

            {recipeList.map((recipe:IRecipe, index:number) => {
              return <RecipeSection key={index} data={recipe} navigation={navigation} />
            })}
          </>
        }
      </View>
  )
}

export default Home
