import firestore from '@react-native-firebase/firestore'

export const getRecipes = firestore().collection('receitas').doc()
