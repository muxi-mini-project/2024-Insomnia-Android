import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import MessagesList from './MessageList/MessagesList'
import { useNavigation } from '@react-navigation/native'
function Messages({ messages }) {
   const navigation = useNavigation()
   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={{ paddingTop: 10 }}>
            {messages &&
               messages.length > 0 &&
               messages.map((message) => (
                  <TouchableOpacity
                     key={message.id}
                     onPress={() => {
                        navigation.navigate('MessagesDetails', {
                           id: message.id,
                           tUuid: message.tUuid,
                           title: message.title,
                           time: message.createdAt,
                           text: message.body,
                        })
                     }}
                  >
                     <MessagesList
                        title={message.title}
                        time={message.createdAt}
                        text={message.body}
                     />
                  </TouchableOpacity>
               ))}
         </ScrollView>
      </View>
   )
}

export default Messages
