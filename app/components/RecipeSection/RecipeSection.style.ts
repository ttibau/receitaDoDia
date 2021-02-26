import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  imgBackground: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  recipeData: {
    backgroundColor: '#9e1529',
    padding: 15,
    alignSelf: 'flex-end',
    width: '30%',
    height: 140,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius:8,
    borderTopRightRadius: 8,
    alignItems:'center',
  },

  btnFavorite: {
    backgroundColor: 'white',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },

  recipeInfo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '100%',
    paddingBottom: 10,
  },

  recipeDetailTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
})
