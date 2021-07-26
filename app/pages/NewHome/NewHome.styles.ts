import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginBottom: 20
    }, 
   
    recipeContent: {
        height: 140, 
        position: 'relative',
        display:  'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },

    recipeFooter: {
        backgroundColor: '#34495e', 
        opacity: 0.7,
        width: '90%',
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',
    },

    recipeText: {
        color: '#FFFFFF',
        fontSize: 30, 
    }
})