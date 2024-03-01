import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image,
    Pressable, TouchableOpacity
} from 'react-native';

const SignUp = (navigation) => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('')
/*//发送验证
    const handleSendVerificationCode = () => {
        fetch('http://8.130.69.161:8080/api/v1/common/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => {
                if (response.ok) {
                    Alert.alert('Verification Code Sent', 'Please check your email for verification code.');
                } else {
                    Alert.alert('Error', 'Failed to send verification code. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error sending verification code:', error);
                Alert.alert('Error', 'Failed to send verification code. Please try again later.');
            });
    };
//验证验证码
    const handleRegister = () => {
        fetch('http://8.130.69.161:8080/api/v1/common/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, verificationCode }),
        })
            .then(response => {
                if (response.ok) {
                    Alert.alert('Success', 'Registration successful.');
                } else {
                    Alert.alert('Error', 'Verification code is invalid. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error verifying code:', error);
                Alert.alert('Error', 'Failed to verify verification code. Please try again later.');
            });
    };*/

    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <ImageBackground source={require('../assets/SignBackground.png')} style={styles.background}>
                <Image source={require('../assets/Signup.png')} style={styles.img}></Image>
                <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="邮箱地址"
                style={styles.email}
            placeholderTextColor='white'
            />
                    <Pressable  style={styles.emailButton}>
                        <Text style={{justifyContent:"center",
                        alignItems:"center",
                            margin:"auto"
                        }}>发送验证码</Text>
                    </Pressable>
                </View>
                <TextInput
                value={verificationCode}
                onChangeText={setVerificationCode}
                placeholder="验证码"
                style={styles.verificationCode}
                placeholderTextColor='white'
            />
            <TextInput value={password}
                       onChangeText={setPassword}
                       placeholder="密码"
                       placeholderTextColor='white'
                       style={styles.password}></TextInput>

                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Image source={require('../assets/SignupButton.png')} style={styles.signupButton}></Image>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles=StyleSheet.create(
    {
     background:{
         width: '100%',
         height: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         flex: 1
     },
        img:{
            width: windowWidth * 0.6,
            height: windowHeight * 0.3,
            resizeMode: 'stretch',
        },
        email:{
            color: 'white',
            borderColor: 'white',
            fontSize: 20,
            width:windowWidth*0.5,
            height:windowHeight*0.05,
            borderRadius: windowWidth * 0.05,
        },
        verificationCode:{
            borderRadius: windowWidth * 0.02,
            color: 'white',
            borderColor: 'white',
            fontSize: 20,
            width:windowWidth*0.5,
        },

        password:{
            color: 'white',
            fontSize: 20,
            marginTop: windowHeight * 0.01,
            width:windowWidth*0.5,
            borderRadius: windowWidth * 0.05,
        },
        container:{
         flexDirection:'row',
            height:windowHeight*0.05,
            width:windowWidth*0.5,
        },
        emailButton:{
         height:windowHeight*0.05,
            width:windowWidth*0.2,
            backgroundColor:'white',
        },
        signupButton:{

        }

    }
)
export default SignUp;
