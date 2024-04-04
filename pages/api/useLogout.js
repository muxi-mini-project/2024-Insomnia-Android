// useLogout.js
import { useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const useLogout = () => {
   const navigation = useNavigation()

   const logout = useCallback(async () => {
      try {
         await AsyncStorage.removeItem('useToken')
         navigation.navigate('First')
         console.log('成功退出')
      } catch (e) {
         console.error('退出失败', e)
      }
   }, [navigation])

   return logout
}

export default useLogout
