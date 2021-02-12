import React, { useState } from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from './Details.style'
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';

function Details() {
  const [action, setAction] = useState('pictures')

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/lasanha.jpg')}
          style={styles.img}
        />
      </View>

      <View style={styles.actionsSection}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
      <View>

        <Text
          style={styles.title}
        >
          Stir Fry Zucchini Noodles
        </Text>
      </View>

      <View
        style={styles.recipeDetails}
      >
        <View
          style={styles.box}
        >
          <Icon name="clock" size={20} color={'#FFFFFF'} />
          <Text style={styles.recipeDetailTxt}>20 min</Text>
        </View>
        <View
          style={styles.box}
        >
          <Icon name="heartbeat" size={20} color={'#FFFFFF'} />
          <Text style={styles.recipeDetailTxt}>130 cal</Text>
        </View>
        <View
          style={styles.box}
        >
          <Icon name="utensils" size={20} color={'#FFFFFF'} />
          <Text style={styles.recipeDetailTxt}>6 porções</Text>
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

      <View style={styles.recipeSection}>
        <Icon style={styles.iconMargin} color={'#9e1529'} name="list" size={20} />
        <Text style={styles.recipeSectionTxt}>INGREDIENTES</Text>
      </View>

      <View style={styles.ingredientsRow}>
        <CheckBox
          tintColor={'#9e1529'}
          onCheckColor={'#9e1529'}
          onFillColor={'#9e1529'}
          onTintColor={'#9e1529'}
        />
        <Text>6 Bifes de filé mignon</Text>
      </View>
      <View style={styles.ingredientsRow}>
        <CheckBox
          tintColor={'#9e1529'}
        />
        <Text style={styles.txtWrap}>1 vidro pequeno de champignon fatiado em lâminas finas</Text>
      </View>
      <View style={styles.ingredientsRow}>
        <CheckBox tintColor={'#9e1529'}  />
        <Text>4 colheres de sopa de manteiga</Text>
      </View>
      <View style={styles.ingredientsRow}>
        <CheckBox tintColor={'#9e1529'}  />
        <Text>1 cebola média picadinha</Text>
      </View>
      <View style={styles.ingredientsRow}>
        <CheckBox tintColor={'#9e1529'}  />
        <Text>2 tabletes de caldo de carne</Text>
      </View>

      <View style={styles.recipeSection}>
        <Icon style={styles.iconMargin} color={'#9e1529'} name="drumstick-bite" size={20} />
        <Text style={styles.recipeSectionTxt}>MODO DE PREPARO</Text>
      </View>

      <View style={styles.preparationMode}>
        <View style={styles.preparationRow}>
          <Text style={styles.preparationStep}>1. </Text>
          <Text>Frite os bifes em 2 colheres de manteiga e reserve.</Text>
        </View>
        <View style={styles.preparationRow}>
          <Text style={styles.preparationStep}>2. </Text>
          <Text>Em seguida refogue na manteiga a cebola, o champignon e os tabletes de carne.</Text>
        </View>
        <View style={styles.preparationRow}>
          <Text style={styles.preparationStep}>3. </Text>
          <Text>Em seguida dilua o amido de milho em 1/4 xícara de água e acrescente ao molho para engrossar.</Text>
        </View>
        <View style={styles.preparationRow}>
          <Text style={styles.preparationStep}>4. </Text>
          <Text>Acrescente o vinho e deixe ferver por uns 10 minutos.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details
