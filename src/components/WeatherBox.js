import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class WeatherBox extends Component {

    renderWeatherIcon (weather) {
        switch(weather) {
            case "Sunny":
                return (
                    <View style={styles.weatherIcon}>
                        <Ionicons name="ios-sunny" color="#ffffff" size={80} />
                    </View>
                )

        }
    }

    render() {
        return (
            <View>
                <Image 
                    source={require('./WeatherBox.png')}
                    style={StyleSheet.weatherBox}
                />
                {this.renderWeatherIcon(this.props.weather)}
                <Text style={styles.temperatureText}>
                    {this.props.temperature}ºC
                </Text> 
                <Text style={styles.weatherText}>
                    {this.props.weather}
                </Text> 
                <Text style={styles.locationText}>
                    {this.props.location}
                </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    temperatureText: {
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        right: 30,
    },
    weatherText: {
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        right: 30,
    },
    locationText: {
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 80,
        right: 30,
    },
    weatherIcon: {
        position: 'absolute',
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
        left: 30,
    },
})