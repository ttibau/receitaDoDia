import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { styles } from './RecipeSection.style'
// @ts-ignore
import Icon from "react-native-vector-icons/dist/FontAwesome5";

function RecipeSection() {
  return (
    <View style={{ marginBottom: 20}}>
      <ImageBackground
        style={styles.imgBackground}
        source={require('../../assets/pasta.jpg')}
        imageStyle={{ borderRadius: 8}}
      >
        <TouchableOpacity style={styles.btnFavorite}>
          <Icon name="star" size={20} color={'#c3c988'} />
        </TouchableOpacity>
        <View style={styles.recipeData}>
          <View style={styles.recipeInfo}>
            <Icon name="clock" size={20} color={'#FFFFFF'} />
            <Text style={styles.recipeDetailTxt}>20 min</Text>
          </View>
          <View style={[styles.recipeInfo, { marginTop: 10, borderBottomWidth:  0}]}>
            <Icon name="heartbeat" size={20} color={'#FFFFFF'} />
            <Text style={styles.recipeDetailTxt}>130 cal</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.recipeTitle}>Macarrão com salsicha do refeitório</Text>
    </View>
  )
}

export default RecipeSection
