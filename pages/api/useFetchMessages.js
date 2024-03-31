import { useState, useEffect } from 'react'
import postRequest from './postRequest'

const useFetchMessages = (topic) => {
   const [messages, setMessages] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await postRequest('thread/getThreads', { topic })
            setMessages(data.data)
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
   }, [topic])

   return messages
}

export default useFetchMessages
