import {useState} from "react";
import axios from 'axios'
import {Alert, ImageBackground, Text, TextInput, View, StyleSheet, Dimensions, Image, Pressable} from "react-native";
function Login ({navigation}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <ImageBackground source={require('../assets/LoginBackground.png')} style={styles.background}>
                <Image source={require('../assets/Login.png')} style={styles.img}></Image>
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
const windowWidth =Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create(
    {
        background:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center',
            flex:1
        },
        username:{
            borderRadius:windowWidth*0.02,
            color:'white',
            borderColor:'white',
            fontSize:20,
            marginTop:windowHeight*0.1
        },
        password:{
            color:'white',
            fontSize:20,
            marginTop:windowHeight*0.01
        },
        ClickSign:{
            color:'white'
        },
        img:{
            width:windowWidth*0.6,
            height:windowHeight*0.3,
            resizeMode:'stretch',
        }
    }

)
export  default Login