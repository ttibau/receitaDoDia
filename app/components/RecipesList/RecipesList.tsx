import React from 'react'; 
import { 
    View,
    Image, 
    Text,
} from 'react-native';
import {styles} from './styles';

function RecipeContent() {
    return (
        <View>
            <Text>Título da receita</Text>
            <Text>Lorem impsum sit amet aloha 123 123jasdf90n123</Text>
        </View>
    )
}

function RecipesList() {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={{
                        uri: 'https://www.casalcozinha.com.br/wp-content/uploads/sites/10/2020/09/receita-de-lasanha-lasagna-a-bolonhesa-super-pratica-18-1300x825.jpg',
                    }}
                    style={styles.recipeImg}
                />
                <RecipeContent />
            </View>
        </View>
    )
}

export default RecipesList
