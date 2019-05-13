import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

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
                <Text style={styles.descriprtion}>REMOTE{"\n"}SWITCH</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Setting')}
                >
                    <AntDesign name="setting" color="#5B5A5A" size={30} />
                </TouchableOpacity>
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
});