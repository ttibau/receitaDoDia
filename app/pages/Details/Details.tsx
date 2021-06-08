import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from './Details.style'
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import  {IRecipe } from '../../components/RecipeSection/RecipeSection'
import _ from 'lodash';
import  Banner  from '../../components/Banner/Banner';

function Details({ route, navigation }) {
  const [action, setAction] = useState('pictures')
  const [data, setData] = useState<IRecipe>();


  useEffect(() => {
  console.warn(route.params.data);
  if(route.params.data) {
    setData(route.params.data)
  }
}, [route.params.data])

const verifyDificulty = () => {
  switch(route.params.data.dificuldade){
    case 1: 
      return 'Fácil';
    case 2: 
      return 'Médio';
    case 3:
      return 'Difícil';
  }
}

  return (
    <ScrollView
      style={styles.container}
    >
        <>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: route.params.data.imagem }}
              style={styles.img}
            />
            
          </View>

          <View style={styles.actionsSection}>
            {/* <TouchableOpacity
              style={[styles.btnAction, { backgroundColor: action === 'pictures' ? '#9e1529': '#FFFFFF'}]}
              onPress={() => setAction('pictures')}
            >
              <Icon name="camera" size={20} color={action === 'pictures' ? '#FFFFFF' : '#9e1529'} style={styles.actionIcon} />
              <Text style={[styles.btnActionTxt, { color: action === 'pictures' ? '#FFFFFF' : '#9e1529'}]}>Fotos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnAction, { backgroundColor: action === 'video' ? '#9e1529': '#FFFFFF'}]}
              onPress={() => setAction('video')}
            >
              <Icon name="video" size={20} color={action === 'video' ? '#FFFFFF' : '#9e1529'} style={styles.actionIcon} />
              <Text style={[styles.btnActionTxt, { color: action === 'video' ? '#FFFFFF' : '#9e1529'}]}>Vídeo</Text>
            </TouchableOpacity> */}
          </View>
          <View>

            <Text
              style={styles.title}
            >
            {route.params.data.nome}
            </Text>
          </View>

          <View
            style={styles.recipeDetails}
          >
            <View
              style={styles.box}
            >
              <Icon name="clock" size={20} color={'#FFFFFF'} />
              <Text style={styles.recipeDetailTxt}>{route.params.data.tempo}</Text>
            </View>
            <View
              style={styles.box}
            >
              <Icon name="heartbeat" size={20} color={'#FFFFFF'} />
              <Text style={styles.recipeDetailTxt}>{route.params.data.caloria} cal</Text>
            </View>
            <View
              style={styles.box}
            >
              <Icon name="utensils" size={20} color={'#FFFFFF'} />
              <Text style={styles.recipeDetailTxt}>{route.params.data.porcao} porções</Text>
            </View>
            <View
              style={styles.box}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                { _.times(route.params.data.dificuldade, (i:number) => (
                  <Icon key={i} name="star" size={20} color={'#FFFFFF'}  />
                ))}
              </View>
              <Text style={styles.recipeDetailTxt}>{verifyDificulty()}</Text>
            </View>
          </View>

          <View>
            <Banner 
              id={'ca-app-pub-9770723451826598/4885092994'}
              size={'MEDIUM_RECTANGLE'}
            />
          </View>

          <View style={styles.recipeSection}>
            <Text style={styles.recipeSectionTxt}>INGREDIENTES</Text>
          </View>

          {route.params.data.ingredientes.map((ingrediente:string, index:number) => {
              return (
                <View key={index} style={styles.ingredientsRow}>
                <Text style={styles.ingredientsRowTab}>{"\u2B24"}</Text>
                <Text style={styles.ingredientsRowData}>{ingrediente.value}</Text>
              </View>
          )})}
           
          <View>
            <Banner 
              id={'ca-app-pub-9770723451826598/9754276296'}
              size={'MEDIUM_RECTANGLE'}
            />
          </View>


          <View style={styles.recipeSection}>
            <Text style={styles.recipeSectionTxt}>PREPARO</Text>
          </View>

          <View style={styles.preparationMode}>
            {route.params.data.preparo.map((preparo: string, index:number) => {
              return (
                <View key={index} style={styles.preparationRow}>
                  <Text style={styles.preparationRowStep}>{index + 1}</Text>
                  <Text style={styles.preparationRowData}>{preparo.modo}</Text>
                </View>
              )
            })}
          </View>

          <View>
            <Banner 
              id={'ca-app-pub-9770723451826598/3012951585'}
              size={'MEDIUM_RECTANGLE'}
            />
          </View>
        </>
      
      

    </ScrollView>
  )
}

export default Details
