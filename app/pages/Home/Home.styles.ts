import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1 ,
  },

  dateDescription: {
    fontSize: 11
  },

  loadingContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    height: '100%'
  },

  recipeSection: {
    margin: 15,
  },

  loadingTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  btnDatePicker: {
    backgroundColor: '#16a085',
    padding: 5,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  dateLabel: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  searchbarSection: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    paddingLeft: 10,
  },

  searchbar: {
    fontSize: 20,
    marginLeft: 10,
  },
})
