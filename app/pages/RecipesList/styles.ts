import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    },
    recipeList: {
        flexDirection: 'row', 
    },
    recipeImg: {
        width: 100,
        height: 100,
    },
    recipeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    recipeContent: {
        marginLeft: 10,
        width: '70%',
    },
    recipeTitle: {
        fontWeight: 'bold', 
        fontSize: 18, 
    },
    scroll: {
        marginBottom: 30,
    }
})
