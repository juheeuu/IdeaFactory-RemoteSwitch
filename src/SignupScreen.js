import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';

import FooterButton from './components/FooterButton';

import firebase from 'react-native-firebase';

import Toast from 'react-native-easy-toast';

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '이메일',
            password: '비밀번호',
        }
    }

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(() => this.refs.toast.show('이메일 형식을 확인해 주세요.\n비밀번호는 6자 이상이어야 합니다.', 1000));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.swicthText}>SWITCH{"\n"}계정 만들기</Text>
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={this.state.email}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={this.state.password}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <Text style={styles.descriptionText}>회원가입 시 이용약관에 동의한 것으로 간주합니다.</Text> 
                <FooterButton
                    style={styles.signupButton}
                    buttonText="회원가입"
                    onPress={this.handleSignUp}
                />
                <Toast ref="toast" />
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
    swicthText: {
        fontSize: 16,
        color: '#5B5A5A',
        marginTop: 41,
        textAlign: 'center',
        marginBottom: 115,
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
    descriptionText: {
        marginTop: 20,
        fontSize: 12,
        color: '#5B5A5A',
        fontWeight: '200',
    },
    signupButton: {
        marginTop: 97.5,
    }
});