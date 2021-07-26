import React from 'react'; 
import { styles } from './NewHome.styles';
import { 
    View, 
    Text, 
    ImageBackground, 
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  Banner  from '../../components/Banner/Banner';
import {  BannerAdSize } from '@react-native-firebase/admob';

interface NewHomeProps { 
    imagem: string;
    titulo: string;
    type: string;
}


function NewHomeSection({ imagem, titulo, type } : NewHomeProps) {
    const navigation = useNavigation();

    function redirect() {
        navigation.navigate('recipeList', { type })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => redirect()}>
            <ImageBackground
                style={styles.recipeContent }
                source={{ uri: imagem }}
                imageStyle={{borderRadius:8, margin: 15}}
            >   
                <View style={styles.recipeFooter}>
                    <Text style={styles.recipeText}>
                        {titulo}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}


function NewHome() {
    return (
        <ScrollView>
            <NewHomeSection
                imagem='https://anamaria.uol.com.br/images/large/2021/04/22/buraco-quente-1298522.jpg'
                titulo='Diário'
                type='daily'
            />

            <NewHomeSection
                imagem='https://diaonline.ig.com.br/wp-content/uploads/2019/01/doces-em-goiania-lugares-para-provar-verdadeiras-delicias-9.jpg'
                titulo='Doces'
                type='candy'
            />


            <NewHomeSection
                imagem='https://www.emporiomuseudagula.com.br/media/upload/ckeditor/2020/02/10/txt-quais-tipos-de-bebidas-que-combinadas-dao-certo.jpg'
                titulo='Bebidas'
                type='drink'
            />

            {/* banner bottom */}
            <Banner 
              id={'ca-app-pub-5774339234804708/2371751274'}
              size={BannerAdSize.ADAPTIVE_BANNER}
            />

        </ScrollView>
        
    )
}

export default NewHome
