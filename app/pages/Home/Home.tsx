import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Text, TextInput, FlatList
} from "react-native";
import RecipeSection, { IRecipe } from '../../components/RecipeSection/RecipeSection';
import { styles } from './Home.styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from "@react-native-firebase/firestore";
import LottieView from 'lottie-react-native';
import { InterstitialAd, AdEventType } from '@react-native-firebase/admob';
import { format } from 'date-fns';
import Timeline from 'react-native-timeline-flatlist'
import add from 'date-fns/add'
import { ScrollView } from 'react-native-gesture-handler';
import RecipeSelect from '../../components/RecipeSelect';


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-9770723451826598/9884755347', {
  requestNonPersonalizedAdsOnly: true,
});

function Home({navigation} :any) {

  const [recipeList, setRecipeList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bannerLoaded, setBannerLoaded] = useState<boolean>(true);
  const [today, setToday] = useState(new Date());

  async function getRecipes(data: string) {
    try {
      let response : any = await firestore()
        .collection('receitas')
        .doc(data)
        .get();
      if(response._data)
        return response._data
    } catch(error) {
      console.log(error);
    }
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // let formatted = format(today,"yyyyMMdd");
  

  useEffect(() => {
    
    const getRecipesEffect = async () => {
      setLoading(true);
      let fakeArray = []
      for(let i = -2; i <= 2; i++) {
        let formatted = addDays(today, i)
        let formattedDate = format(formatted, 'yyyyMMdd');
        console.log('%c⧭', 'color: #e50000', formattedDate);
        let responseDate = await getRecipes(formattedDate);
        console.log('%c⧭', 'color: #ff0000', responseDate);
        if(responseDate)
          fakeArray.push(responseDate)
      }
      console.log(fakeArray)
      setRecipeList(fakeArray)
      setLoading(false);
    }

    getRecipesEffect();

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


  return (
      <ScrollView style={styles.recipeSection}>
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
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={recipeList}
            renderItem={item => <RecipeSelect item={item.item}/>}
            keyExtractor={photo => photo.id}
          />
        }

        {/* {!loading && bannerLoaded &&
          <>
            {recipeList.length > 0 && recipeList.map((recipe:IRecipe, index:number) => {
              return  (
                <View key={index}>
                  <RecipeSection data={recipe} navigation={navigation} />
                </View>
              )
            })}
          </>
        } */}
      </ScrollView>
  )
}

export default Home
