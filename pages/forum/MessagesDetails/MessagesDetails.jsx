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
            <View style={{ paddingTop: 15 }}>
               <ImageBackground
                  source={MessagesBg}
                  style={styles.messagesBackground}
               >
                  <Text style={styles.topic}>{title}</Text>
                  <View style={styles.textcontainer}>
                     <Text style={styles.time}>{time}</Text>
                  </View>
                  <Text style={styles.text}>{text}</Text>
               </ImageBackground>
            </View>
         </ImageBackground>
      </View>
   )
}

export default MessagesDetails
