import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Alert } from 'react-native'
const BASE_URL = 'http://8.130.69.161:8080/api/v1'
const saveToken = async (token) => {
   try {
      await AsyncStorage.setItem('useToken', token)
      console.log('Token被获取')
      console.log(token)
   } catch (error) {
      throw new Error('Token没找到')
   }
}
export const handleLogin = (email, password, navigation) => {
   axios
      .post(`${BASE_URL}/auth/login`, { email, password })
      .then(async (response) => {
         if (response.data.code === 1000) {
            try {
               await saveToken(response.data.data.token)
               navigation.navigate('Home')
               Alert.alert('登录成功', response.data.message)
            } catch (error) {
               console.error(error)
               Alert.alert('登录失败', '无法保存登录信息，请稍后重试。')
            }
         } else {
            Alert.alert('登录失败', response.data.message)
         }
      })
      .catch((error) => {
         console.error('登录失败', error)
         Alert.alert('登录失败', '发生了一个错误，请稍后重试。')
      })
}
