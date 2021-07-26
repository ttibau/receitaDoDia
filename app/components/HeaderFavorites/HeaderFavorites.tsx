import React, { useState } from 'react'
import { 
    TouchableOpacity,
    Modal,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { styles } from './styles'
import LottieView from 'lottie-react-native';
function HeaderFavorites() {
    const [modalVisible, setModalVisible] =  useState<boolean>(false);
    const { modalContainer, btnCloseModal, btnCloseModalTxt, modalTitle } = styles;
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={modalContainer}>
                    <Text style={modalTitle}>Estamos preparando algo incrível para você</Text>
                    <Text>Receitas favoritas</Text>
                    <Text>Melhorias no layout</Text>
                    <Text>Pesquisar receitas</Text>
                    <LottieView source={require('../../assets/loading.json')} style={{ width: 100, height: 100}} autoPlay loop />
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={btnCloseModal}>
                        <Text style={btnCloseModalTxt}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 20}}>
                <Icon name="heartbeat" size={20} color={'#FFFFFF'} />
            </TouchableOpacity>
        </>
    )
}


export default HeaderFavorites