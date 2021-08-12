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
    TextInput,
    ImageBackground
} from 'react-native';
import { getTypedRecipes } from '../../db/receitas';
import {styles} from './styles';
import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Banner from '../../components/Banner/Banner';
import { BannerAdSize } from '@react-native-firebase/admob';


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

function verifyDate(recipe) {
    let today = new Date()
    return format(recipe.data.toDate(), 'dd/MM/yyyy') === format(today, 'dd/MM/yyyy')
}

function RecipeContainer({ recipe }) {
    return (
        <View style={[styles.recipeContainer, { height: verifyDate(recipe) ? 150 : 100 }]}>
            <ImageBackground
                source={{
                    uri: recipe.imagem,
                }}
                style={styles.recipeBackground}
            >
                <View style={[styles.recipeDate, { backgroundColor: !verifyDate(recipe) ? 'rgba(52, 73, 94, 0.8)' : 'rgba(212, 0, 0, 0.7)'}]}>
                    <Text style={styles.recipeTxt}>{format(recipe.data.toDate(), 'dd/MM')}</Text>
                </View>
                <View 
                    style={[
                        styles.recipeNewTitle, 
                        { 
                            backgroundColor: !verifyDate(recipe) ? 'rgba(52, 73, 94, 0.8)' : 'rgba(212, 0, 0, 0.7)',
                            marginTop: !verifyDate(recipe) ? 0 : '10%',
                        },
                    ]}>
                    <Text style={styles.recipeNewTitleTxt}>{recipe.nome}</Text>
                </View>
            </ImageBackground>
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
                                <RecipeContainer recipe={recipe} />
                            </View>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.tomorrowRecipe}>
                        <View style={styles.recipeRow}>
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/doodle/452/apple-calendar--v1.png',
                                }}
                                style={styles.recipeImg}
                            />
                            <Text>asdf</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                        <Banner 
                            id={'ca-app-pub-9770723451826598/4885092994'}
                            size={BannerAdSize.BANNER}
                        />
                    </View>
                </ScrollView>
            </>
            }
        </View>
    )
}




export default RecipesList
