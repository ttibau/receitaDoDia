import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'; 
import { 
    View,
    Image, 
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import { getTypedRecipes } from '../../db/receitas';
import {styles} from './styles';
import { format } from 'date-fns'


interface IRecipeContentProp {
    recipe: any
}

function RecipeContent({ recipe } : IRecipeContentProp) {
    return (
        <View style={styles.recipeContent}>
            <Text>{format(recipe.data.toDate(), 'dd/MM/yyyy')}</Text>
            <Text style={styles.recipeTitle}>{recipe.nome}</Text>
            <Text>{recipe.description}</Text>
        </View>
    )
}

function RecipesList({ route }) {
    const { type } = route.params;
    const [list, setRecipeList] = useState<Array<any>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation()
    
    useEffect(() => {
        async function getData() {
            try { 
                const response = await getTypedRecipes(type)
                setRecipeList(response)
                setLoading(false)
            } catch (e) {
                Alert.alert('Ocorreu um erro ao buscar a lista de receita, feche e abra o aplicativo');
                setLoading(false)
            }
        }
        getData()
    }, [type])
    return (
        <View>
            {loading &&
                <ActivityIndicator />
            }
            {!loading && list.length > 0 &&
                <ScrollView style={styles.scroll}>
                    {list.reverse().map((recipe:any, index:number) => (
                        <TouchableOpacity key={index} style={styles.container} onPress={() => navigation.navigate('Details', recipe)}>
                            <View style={styles.recipeRow}>
                                <Image 
                                    source={{
                                        uri: recipe.imagem,
                                    }}
                                    style={styles.recipeImg}
                                />
                                <RecipeContent recipe={recipe}/>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            }
        </View>
    )
}


export default RecipesList
