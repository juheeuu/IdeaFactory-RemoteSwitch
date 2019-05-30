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
            isSwitchTurnOn: true,
            weatherIcon: "",
            weatherText: "",
            temperature: null,
            location: null,
        };
    }

    handleWeatherBox = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lng = position.coords.longitude

            let key = "ef544af16dd544cd8b141222192205"
            let URL = "https:api.apixu.com/v1/current.json?key="+key+"&q="+lat+","+lng

            fetch(URL)
            .then(res => res.json())
            .then((data) => {                
                this.setState({
                weatherIcon: "https:"+data.current.condition.icon,
                weatherText: data.current.condition.text,
                temperature: data.current.temp_c,
                location: data.location.name,
            })})

        })
    }

    handleSwich = () => {
        let URL = this.state.isSwitchTurnOn
        ? "http://192.168.4.1/OFF"
        : "http://192.168.4.1/ON"
        fetch(URL).then(res => console.log(res.json())).catch(err => console.log(err));
        this.setState({isSwitchTurnOn: !this.state.isSwitchTurnOn})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <AntDesign name="bells" color="#916FF2" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Setting')}
                >
                    <AntDesign name="setting" color="#926FF2" size={30} />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    onPress={this.handleWeatherBox}
                >
                    <WeatherBox 
                        weatherIcon={this.state.weatherIcon}
                        temperature={this.state.temperature}
                        weather={this.state.weatherText}
                        location={this.state.location}
                    />
                </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={this.handleSwich}
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