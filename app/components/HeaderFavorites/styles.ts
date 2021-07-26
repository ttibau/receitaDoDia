import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 25,
        marginTop: 70,
    },
    btnCloseModal: {
        backgroundColor: '#d40000',
        padding: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10
    },
    btnCloseModalTxt: {
        color: '#FFF', 
        fontWeight: 'bold'
    },
    modalTitle: {
        fontWeight: 'bold'
    }
})