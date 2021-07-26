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
