import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { log } from 'expo/build/devtools/logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginBackground from '../../assets/img/LoginBackground.png'
import Login1 from '../../assets/img/Login.png'
import LoginButton from '../../assets/LoginButton.png'

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);

  const checkInputs = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };
  const handleUsernameChange = (text) => {
    setEmail(text);
    checkInputs();
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    checkInputs();
  };
  const handleLogin = () => {
    // 发送POST请求到后端验证
    axios
      .post('http://8.130.69.161:8080/api/v1/auth/login', {
        email: email,
        password: password,
      })
      .then(async (response) => {
        // 注意这里使用了 async 关键字
        // 后端返回验证结果
        if (response.data.code === 1000) {
          // 登录成功，保存token到本地存储
          try {
            await AsyncStorage.setItem('userToken', response.data.data.token);
            console.log('Token saved');
            // 导航到Home页面
            navigation.navigate('Home');
            Alert.alert('登录成功', response.data.message);
          } catch (error) {
            console.error('Error saving token:', error);
            Alert.alert('登录失败', '无法保存登录信息，请稍后重试。');
          }
        } else {
          // 登录失败，显示错误提示
          Alert.alert('登录失败', response.data.message);
        }
      })
      .catch((error) => {
        // 处理请求错误
        console.error('登录失败', error);
        Alert.alert('登录失败', '发生了一个错误，请稍后重试。');
      });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        source={LoginBackground}
        style={styles.background}
      >
        <Image
          source={Login1}
          style={styles.img}
        ></Image>
        <TextInput
          style={styles.username}
          placeholder="账户"
          placeholderTextColor="white"
          value={email}
          onChangeText={handleUsernameChange}
        />
        <TextInput
          style={styles.password}
          placeholder="密码"
          placeholderTextColor="white"
          value={password}
          onChangeText={handlePasswordChange}
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
            //等接口好了换成handleLogin
             onPress={() => {
              navigation.navigate('Home');
            }}
           /* onPress={handleLogin}*/
          >
            <Image
              source={LoginButton}
              style={styles.LoginButton}
            ></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  username: {
    borderRadius: windowWidth * 0.02,
    color: 'white',
    borderColor: 'white',
    fontSize: 20,
    marginTop: windowHeight * 0.1,
    borderWidth: 1,
    width: windowWidth * 0.5,
  },
  password: {
    borderRadius: windowWidth * 0.02,
    color: 'white',
    borderColor: 'white',
    fontSize: 20,
    borderWidth: 1,
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.5,
  },
  LoginButton: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.08,
    resizeMode: 'stretch',
    marginLeft: windowWidth * 0.15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  ClickSign: {
    color: 'white',
    marginTop: windowWidth * 0.05,
  },
  img: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.3,
    resizeMode: 'stretch',
  },
});

export default Login;
