import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import backgroundImg from '../../../assets/forum/background.png'
import MessagesBg from '../../../assets/forum/Messages.png'
import styles from './MessagesDetails_style'

function MessagesDetails({ route }) {
   const { title, time, text } = route.params

   return (
      <View style={{ flex: 1 }}>
         <ImageBackground source={backgroundImg} style={styles.background}>
            <ImageBackground
               source={MessagesBg}
               style={styles.messagesBackground}
            >
               <Text style={styles.topic}>{title}</Text>
               <View style={styles.textcontainer}>
                  <Text style={styles.name}>{time}</Text>
               </View>
               <Text style={styles.text} numberOfLines={2}>
                  {text}
               </Text>
            </ImageBackground>
         </ImageBackground>
      </View>
   )
}

export default MessagesDetails
