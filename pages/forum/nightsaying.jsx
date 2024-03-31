import React from 'react'
import { View, ScrollView } from 'react-native'
import MessagesList from './MessageList/MessagesList'
import useFetchMessages from '../api/useFetchMessages'

function NightSaying({ navigation }) {
   const messages = useFetchMessages('月夜心语')

   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={{ paddingTop: 10 }}>
            {messages.length > 0 &&
               messages.map((message) => (
                  <MessagesList
                     key={message.tUuid}
                     title={message.title}
                     time={message.createdAt}
                     text={message.body}
                  />
               ))}
         </ScrollView>
      </View>
   )
}

export default NightSaying
