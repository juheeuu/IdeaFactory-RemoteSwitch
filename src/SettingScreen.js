import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import FooterButton from './components/FooterButton';

export default class SettingScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <AntDesign name="arrowleft" size={30} color="#5B5A5A" />
                </TouchableOpacity>
                <Image 
                    source={require('./icon.png')}
                    style={styles.icon}
                />
                <Text style={styles.currentVersionText}>현재 버전 1.0.0</Text>
                <Text style={styles.currentVersionText}>지원환경 iOS 7.0 이상</Text>
                <FooterButton
                    buttonText="로그아웃"
                    style={styles.footerButton}
                />
                <Text style={styles.currentVersionText}> ©️ 원래는 웹을 하려고 했었다. </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
    },
    icon: {
        width: 60,
        height: 60,
    },
    currentVersionText: {
        marginVertical: 15,
        fontSize: 12,
        color: '#5B5A5A',
    },
    footerButton:{
        marginTop: 250,
    },
    arrow: {
        position: 'absolute',
        left: 20,
        top: 50,
    },
});