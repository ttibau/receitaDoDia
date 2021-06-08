import firestore from '@react-native-firebase/firestore'

export const getRecipes = firestore().collection('receitas').doc()

export const getTypedRecipes = async (type:string) => {
    const snapshot = await firestore().collection(type).get()
    return snapshot.docs.map(doc => doc.data());
}
