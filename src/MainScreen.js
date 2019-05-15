import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import WeatherBox from './components/WeatherBox';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchTurnOn: true
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                <TouchableOpacity
                >
                    <AntDesign name="bells" color="#916FF2" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Setting')}
                >
                    <AntDesign name="setting" color="#916FF2" size={30} />
                </TouchableOpacity>
                </View>
                <WeatherBox 
                    temperature="12"
                    weather="Sunny"
                    location="Daejeon"
                />
                <TouchableOpacity
                    onPress={() => this.setState({isSwitchTurnOn: !this.state.isSwitchTurnOn})}
                >
                    <Image
                        source={
                            this.state.isSwitchTurnOn
                            ?  require('./on.png')
                            :  require('./off.png')
                           }
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
    },
    icon: {
        width: 185,
        height: 300,
        marginTop: 30,
    },
    descriprtion: {
        fontSize: 16,
        color: '#5B5A5A',
        textAlign: 'center',
        marginBottom: 40,
    },
    iconContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        top: 60,
    },
});