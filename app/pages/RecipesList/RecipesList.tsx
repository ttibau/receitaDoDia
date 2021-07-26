import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'; 
import { 
    View,
    Image, 
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    ScrollView,
    TextInput
} from 'react-native';
import { getTypedRecipes } from '../../db/receitas';
import {styles} from './styles';
import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { IRecipe } from '../../components/RecipeSection/RecipeSection';


interface IRecipeContentProp {
    recipe: any
}

interface IBadgeProps {
    name: string;
}

const Badge = ({ name } : IBadgeProps ) => {

    const _checkBadgeBG = () => {
        let bg = ''
        switch(name) {
            case 'vegano': 
                bg = '#27ae60'
                break
            case 'massa':
                bg = '#d35400'
                break
            case 'frango':
                bg = '#2980b9'
                break
            default: 
                bg = '#8e44ad'
                break
        }
        return bg; 
    }

    return (
        <View 
            style={[styles.badgeContainer, { backgroundColor: _checkBadgeBG()}]}
        >
            <Text style={styles.badgeTxt}>{name}</Text>
        </View>
    )
}

function RecipeContent({ recipe } : IRecipeContentProp) {
    return (
        <View style={styles.recipeContent}>
            <View style={styles.recipeDetailsRow}>
                <Text>{format(recipe.data.toDate(), 'dd/MM/yyyy')}</Text>
                <Badge name={recipe.tipo} />
            </View>
            <Text style={styles.recipeTitle}>{recipe.nome}</Text>
            <Text>{recipe.description}</Text>
        </View>
    )
}

function RecipesList({ route }) {
    const { type } = route.params;
    const [list, setRecipeList] = useState<Array<any>>([])
    const [search, setSearch] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const navigation = useNavigation()
    
    useEffect(() => {
        async function getData() {
            try { 
                const response = await getTypedRecipes(type)
                setFilteredRecipes(response.reverse())
                setRecipeList(response.reverse())
                setLoading(false)
            } catch (e) {
                Alert.alert('Ocorreu um erro ao buscar a lista de receita, feche e abra o aplicativo');
                setLoading(false)
            }
        }
        getData()
    }, [type])

    const toggleSearch = () => {
        setSearch(!search)
    }

    const onSearch = (text:string) => {
        let arrCopy = [...list]
        let result = arrCopy.filter(recipe => {
            return recipe.nome.toLowerCase().includes(text.toLowerCase())
        })
        setFilteredRecipes(result)
    }

    return (
        <View>
            {loading &&
                <ActivityIndicator />
            }
            {!loading && list.length > 0 &&
            <>
                <TouchableOpacity onPress={() => toggleSearch()} style={{ alignSelf: 'flex-end'}}>
                    <Icon name="search" size={20} color={'#333333'} style={{ margin: 15 }}/>
                </TouchableOpacity>
                {search &&
                    <TextInput 
                        placeholder="Pesquisar"
                        style={styles.search}
                        onChangeText={(text) => onSearch(text)}
                    />
                }
                <ScrollView style={styles.scroll}>
                    {filteredRecipes.map((recipe:any, index:number) => (
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
            </>
            }
        </View>
    )
}




export default RecipesList
