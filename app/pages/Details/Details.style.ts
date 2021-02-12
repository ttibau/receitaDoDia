import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },

  img: {
    width: '100%',
    height: 250,
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },

  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '23%',
    height: 60,
    marginTop: 10,
    borderRightWidth:1,
    borderRightColor: '#d3d3d3',
    backgroundColor: '#9e1529',
    borderRadius: 10,
  },

  recipeDetailTxt: {
    color: 'white',
    fontWeight: 'bold',
  },

  recipeSection: {
    flexDirection: 'row',
    marginTop: 20,
  },

  recipeSectionTxt: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22,
  },

  iconMargin: {
    marginTop: 5,
    marginRight: 5,
  },

  actionsSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },

  btnAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#9e1529',
    borderRadius: 5,
    marginHorizontal: 5,
  },

  actionIcon: {
    marginHorizontal: 5,
  },
  btnActionTxt: {
    fontWeight: 'bold',
  },

  ingredientsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  txtWrap: {
    flexShrink: 1,
    width: '100%',
  },

  preparationMode: {

  },

  preparationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  preparationStep: {
    fontWeight: 'bold',
    fontSize: 26,
  },
})
