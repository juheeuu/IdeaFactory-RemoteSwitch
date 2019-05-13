import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import FooterButton from './components/FooterButton'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idText: '이메일',
            pwText: '비밀번호',
            id: '',
            pw: '',
        }
    }

    render() {
        return (
            <View style={styles.container}> 
                <Image
                    source={require('./icon.png')}
                    style={styles.icon}
                />
                <Text style={styles.welcomeText}>환영합니다</Text>
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(id) => this.setState({id})}
                    placeholder={this.state.idText}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(pw) => this.setState({pw})}
                    placeholder={this.state.pwText}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <FooterButton 
                    buttonText="로그인"
                    style={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('Main')}
                />
                <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}
                >
                    <Text style={styles.makeAccountText}>계정 만들기</Text>
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
        width: 60,
        height: 60,
        marginBottom: 70,
    },
    welcomeText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 23,
    },
    textInputButton: {
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
    },
    loginButton: {
        width: 315,
        height: 50,
        marginTop: 50,
    },
    noAccountText: {
        marginTop: 30,
        fontSize: 12,
        color: '#5B5A5A',
    },
    makeAccountText: {
        fontSize: 12,
        color: '#9013FE',
    },
});

