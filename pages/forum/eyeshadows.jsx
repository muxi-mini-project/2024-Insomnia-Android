import React from 'react'
import { View, ScrollView } from 'react-native'
import MessagesList from './MessageList/MessagesList'
import styles from './forum_styles'
import useFetchMessages from '../api/useFetchMessages'
import Demo from './demo'

function NightSaying({ navigation }) {
   const messages = useFetchMessages('熬夜树洞')

   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={{ paddingTop: 10 }}>
            {/*  {messages.map((message) => (
               <MessagesList
                  key={message.id}
                  topic={message.topic}
                  time={message.createdAt}
                  text={message.body}
               />
            ))}*/}
            <Demo />
            <Demo />
            <Demo />
            <Demo />
            <Demo />
            <Demo />
            <Demo />
            <Demo />
         </ScrollView>
      </View>
   )
}

export default NightSaying
