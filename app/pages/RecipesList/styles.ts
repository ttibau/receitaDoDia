import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    recipeNewTitleTxt: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    }, 
    recipeNewTitle: {
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        backgroundColor: 'rgba(212, 0, 0, 0.7)',
        padding: 5,
        borderRadius: 10,
    },
    recipeTxt: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    recipeDate: {
        margin: 15,
        backgroundColor: 'rgba(212, 0, 0, 0.7)',
        borderRadius: 10,
        width: '20%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10,
    },
    recipeContainer: {
        width: '100%',
        height: 100,
    },
    recipeBackground: {
        width: '100%',
        height: '100%',
    },
    tomorrowRecipe: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderStyle: 'dotted',
        borderRadius: 10,
        margin: 10,
    },
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
    },
    search: {
        marginHorizontal: 15,
    },
    recipeDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    badgeContainer: {
        padding: 5,
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 10,
    },
    badgeTxt: {
        color: '#FFFFFF'
    }
})
