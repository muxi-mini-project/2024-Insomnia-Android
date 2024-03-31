import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useFetchMessages = (topic) => {
   const [messages, setMessages] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const token = await AsyncStorage.getItem('useToken')
            const headers = {
               'Content-Type': 'application/json',
               Accept: 'application/json',
            }
            console.log(token)
            headers['Authorization'] = `${token}`
            const requestBody = { topic }
            const response = await fetch(
               'http://8.130.69.161:8080/api/v1/thread/getThreads',
               {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(requestBody),
               }
            )
            const data = await response.json()
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
   }, [topic])

   return messages
}

export default useFetchMessages
