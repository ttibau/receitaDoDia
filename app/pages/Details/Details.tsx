import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from './Details.style'
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import  {IRecipe } from '../../components/RecipeSection/RecipeSection'

function Details({ route, navigation }) {
  const [action, setAction] = useState('pictures')
  const [data, setData] = useState<IRecipe>();
useEffect(() => {
  console.log('%c⧭', 'color: #00e600', route.params.data);
  setData(route.params.data)
}, [route.params.data])

  return (
    <ScrollView
      style={styles.container}
    >
        <>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/lasanha.jpg')}
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
                <Icon name="star" size={20} color={'#FFFFFF'}  />
                <Icon name="star" size={20} color={'#FFFFFF'} />
                <Icon name="star" size={20} color={'#FFFFFF'} />
              </View>
              <Text style={styles.recipeDetailTxt}>Difícil</Text>
            </View>
          </View>

          <View>
            <Text style={styles.recipeSectionAds}>
              espaço para ganhar dinheiro
              </Text>
          </View>

          <View style={styles.recipeSection}>
            <Text style={styles.recipeSectionTxt}>INGREDIENTES</Text>
          </View>

          <View style={styles.ingredientsRow}>
            <Text style={styles.ingredientsRowTab}>{"\u2B24"}</Text>
            <Text style={styles.ingredientsRowData}>6 Bifes de filé mignon</Text>
          </View>

          <View style={styles.ingredientsRow}>
            <Text style={styles.ingredientsRowTab}>{"\u2B24"}</Text>
            <Text style={styles.ingredientsRowData}>1 vidro pequeno de champignon fatiado em lâminas finas</Text>
          </View>

          <View style={styles.ingredientsRow}>
            <Text style={styles.ingredientsRowTab}>{"\u2B24"}</Text>
            <Text style={styles.ingredientsRowData}>4 colheres de sopa de manteiga</Text>
          </View>

          <View style={styles.ingredientsRow}>
            <Text style={styles.ingredientsRowTab}>{"\u2B24"}</Text>
            <Text style={styles.ingredientsRowData}>1 cebola média picadinha</Text>
          </View>

          <View style={styles.ingredientsRow}>
            <Text style={styles.ingredientsRowTab}>{"\u2B24"}</Text>
            <Text style={styles.ingredientsRowData}>2 tabletes de caldo de carne</Text>
          </View>



          <View>
            <Text style={styles.recipeSectionAds}>
              espaço para ganhar dinheiro
              </Text>
          </View>


          <View style={styles.recipeSection}>
            <Text style={styles.recipeSectionTxt}>PREPARO</Text>
          </View>

          <View style={styles.preparationMode}>
            <View style={styles.preparationRow}>
              <Text style={styles.preparationRowStep}>1</Text>
              <Text style={styles.preparationRowData}>Frite os bifes em 2 colheres de manteiga e reserve.</Text>
            </View>
            <View style={styles.preparationRow}>
              <Text style={styles.preparationRowStep}>2</Text>
              <Text style={styles.preparationRowData}>Em seguida refogue na manteiga a cebola, o champignon e os tabletes de carne.</Text>
            </View>
            <View style={styles.preparationRow}>
              <Text style={styles.preparationRowStep}>3</Text>
              <Text style={styles.preparationRowData}>Em seguida dilua o amido de milho em 1/4 xícara de água e acrescente ao molho para engrossar.</Text>
            </View>
            <View style={styles.preparationRow}>
              <Text style={styles.preparationRowStep}>4</Text>
              <Text style={styles.preparationRowData}>Acrescente o vinho e deixe ferver por uns 10 minutos.</Text>
            </View>
          </View>

          <View>
            <Text style={styles.recipeSectionAds}>
              espaço para ganhar dinheiro
              </Text>
          </View>
        </>
      
      

    </ScrollView>
  )
}

export default Details
