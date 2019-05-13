import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

export default class FooterButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity
                style={[styles.ButtonContainer, this.props.style]}
                onPress={this.props.onPress}
            >
                <Image
                    source={require('./button.png')}
                    style={styles.footerButton}
                />
                <Text
                    style={styles.footerButtonText}
                >
                    {this.props.buttonText}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    footerButton: {
        width: 315,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerButtonText: {
        position: 'absolute',
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
    },
    ButtonContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
    }
})