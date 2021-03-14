import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { styles } from './RecipeSection.style'
// @ts-ignore
import Icon from "react-native-vector-icons/dist/FontAwesome5";

interface  IRecipeProps {
  navigation: any;
  data?: IRecipe;
}

export interface IRecipe {
  caloria: number;
  dificuldade: number;
  ingredientes: Array<string>;
  preparo: Array<string>;
  imagem: string;
  nome: string;
  tempo: string;
}

function RecipeSection({ navigation, data }  : IRecipeProps) {
  return (
    <TouchableOpacity style={{ marginBottom: 20}} onPress={() => navigation.navigate('Details', { data })}>
      <ImageBackground
        style={styles.imgBackground }
        source={{ uri: data.imagem }}
        imageStyle={{ borderRadius: 8}}
      >
        {/* <TouchableOpacity style={styles.btnFavorite}>
          <Icon name="star" size={20} color={'#c3c988'} />
        </TouchableOpacity> */}
        <View style={styles.recipeData}>
          <View style={styles.recipeInfo}>
            <Icon name="clock" size={20} color={'#FFFFFF'} />
            <Text style={styles.recipeDetailTxt}>{data.tempo}</Text>
          </View>
          <View style={[styles.recipeInfo, { marginTop: 10, borderBottomWidth:  0}]}>
            <Icon name="heartbeat" size={20} color={'#FFFFFF'} />
            <Text style={styles.recipeDetailTxt}>{data.caloria}</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.recipeTitle}>{data.nome}</Text>
    </TouchableOpacity>
  )
}

export default RecipeSection
