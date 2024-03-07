import {useState} from "react";
import axios from 'axios'
import {Alert, ImageBackground, Text, TextInput, View, StyleSheet, Dimensions, Image, Pressable} from "react-native";
function Login ({navigation}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <ImageBackground source={require('../../assets/img/LoginBackground.png')} style={styles.background}>
                <Image source={require('../../assets/img/Login.png')} style={styles.img}></Image>
                <TextInput style={styles.username} placeholder="账户" placeholderTextColor='white'
                value={username}    /*onChangeText={username=>onChangeText(username)}*/
                />
                <TextInput style={styles.password} placeholder="密码" placeholderTextColor='white' 
               value={password} /*onChangeText={password=>onChangeText(password)}*/
                />
                     <Text></Text>
                <Text style={styles.ClickSign} onPress={()=>{
                    navigation.navigate('Signup')
                }}>还没有账号</Text>
                <Pressable onPress={()=>{navigation.navigate('Home')}}>
                    <Text>登录</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export  default Login