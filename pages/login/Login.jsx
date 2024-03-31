import { useState } from 'react'
import {
   ImageBackground,
   Text,
   TextInput,
   View,
   Image,
   TouchableOpacity,
} from 'react-native'
import LoginBackground from '../../assets/img/LoginBackground.png'
import Login1 from '../../assets/img/Login.png'
import LoginButton from '../../assets/LoginButton.png'
import styles from './login_style'
import { handleLogin } from '../api/handleLogin'

const Login = ({ navigation }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [loginDisabled, setLoginDisabled] = useState(true)
   const handleInputChange = (setter) => (text) => {
      setter(text)
      setLoginDisabled(!(email.trim() !== '' && password.trim() !== ''))
   }

   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <ImageBackground source={LoginBackground} style={styles.background}>
            <Image source={Login1} style={styles.img}></Image>
            <TextInput
               style={styles.username}
               placeholder="账户"
               placeholderTextColor="white"
               value={email}
               onChangeText={handleInputChange(setEmail)}
            />
            <TextInput
               style={styles.password}
               placeholder="密码"
               placeholderTextColor="white"
               value={password}
               onChangeText={handleInputChange(setPassword)}
               secureTextEntry={true}
            />
            <View style={styles.buttonContainer}>
               <Text
                  style={styles.ClickSign}
                  onPress={() => navigation.navigate('Signup')}
               >
                  还没有账号
               </Text>
               <TouchableOpacity
                  disabled={loginDisabled}
                  onPress={() => handleLogin(email, password, navigation)}
               >
                  <Image
                     source={LoginButton}
                     style={styles.LoginButton}
                  ></Image>
               </TouchableOpacity>
            </View>
         </ImageBackground>
      </View>
   )
}

export default Login
