import React, { useState } from 'react'
import {
   View,
   Text,
   TextInput,
   Alert,
   ImageBackground,
   Image,
   Pressable,
   TouchableOpacity,
   Button,
} from 'react-native'
import SignBackground from '../../assets/img/SignBackground.png'
import Signup from '../../assets/img/Signup.png'
import SignupButton from '../../assets/SignupButton.png'
import styles from './signUp_style'
const SignUp = ({ navigation }) => {
   const [email, setEmail] = useState('')
   const [verificationCode, setVerificationCode] = useState('')
   const [password, setPassword] = useState('')
   //发送验证
   const handleSendVerificationCode = () => {
      fetch('http://8.130.69.161:8080/api/v1/common/sendEmail', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email }),
      })
         .then((response) => {
            if (response.ok) {
               Alert.alert('验证码已经发送', '请检查你的邮箱')
            } else {
               Alert.alert('错误!', '发送验证码失败')
            }
         })
         .catch((error) => {
            console.error('Error sending verification code:', error)
            Alert.alert(
               'Error',
               'Failed to send verification code. Please try again later.'
            )
         })
   }
   const setRegisters = () => {
      fetch('http://8.130.69.161:8080/api/v1/auth/signup', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, verificationCode, password }),
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.code === 1000) {
               Alert.alert('成功', data.message || '注册成功!')
            } else {
               Alert.alert('错误', data.message || '注册失败')
            }
         })
         .catch((error) => {
            console.error('请求错误', error)
            Alert.alert('错误', '网络请求失败，请稍后再试')
         })
   }

   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <ImageBackground source={SignBackground} style={styles.background}>
            <Image source={Signup} style={styles.img}></Image>
            <View style={styles.container}>
               <TextInput
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  placeholder="邮箱地址"
                  style={styles.email}
                  placeholderTextColor="white"
               />
               <Pressable
                  style={styles.emailButton}
                  onPress={handleSendVerificationCode}
               >
                  <Text
                     style={{
                        fontSize: 16,
                        color: 'white',
                        flex: 1,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                     }}
                     numberOfLines={1}
                  >
                     发送验证码
                  </Text>
               </Pressable>
            </View>
            <TextInput
               value={verificationCode}
               onChangeText={setVerificationCode}
               placeholder="验证码"
               style={styles.verificationCode}
               placeholderTextColor="white"
            />
            <TextInput
               value={password}
               onChangeText={setPassword}
               placeholder="密码"
               placeholderTextColor="white"
               style={styles.password}
               secureTextEntry={true}
            />
            <TouchableOpacity onPress={setRegisters}>
               <Image source={SignupButton} style={styles.signupButton}></Image>
            </TouchableOpacity>
         </ImageBackground>
      </View>
   )
}

export default SignUp
