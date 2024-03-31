import AsyncStorage from '@react-native-async-storage/async-storage'
const BASE_URL = 'http://8.130.69.161:8080/api/v1'
const postRequest = async (endpoint, data) => {
   try {
      const token = await AsyncStorage.getItem('useToken')
      const headers = {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      }
      if (token) {
         headers['Authorization'] = `${token}`
      }
      const url = `${BASE_URL}/${endpoint}`
      const response = await fetch(url, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify(data),
      })
      if (!response.ok) {
         throw new Error('服务器错误')
      }
      return await response.json()
   } catch (error) {
      console.error('请求错误', error)
      throw error
   }
}

export default postRequest
