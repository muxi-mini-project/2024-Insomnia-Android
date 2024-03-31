import React, { useState } from 'react'
import {
   Image,
   ImageBackground,
   Text,
   TouchableOpacity,
   View,
} from 'react-native'
import styles from './MessagesList_style'
// 引入图片资源
import MessagesBg from '../../../assets/forum/Messages.png'
import createMessagesIcon from '../../../assets/forum/createMessages.png'
import goodIcon from '../../../assets/forum/good.png'

function MessagesList({ title, time, username, text }) {
   const [messagesCount, setMessagesCount] = useState(0)
   const [goodCount, setGoodCount] = useState(0)

   const handleMessage = () => {
      setMessagesCount(messagesCount + 1)
   }

   const handleGood = () => {
      setGoodCount(goodCount + 1)
   }

   return (
      <View
         style={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            paddingTop: 10,
         }}
      >
         <ImageBackground source={MessagesBg} style={styles.textBackground}>
            <Text style={styles.topic}>{title}</Text>
            <View style={styles.textcontainer}>
               <Text style={styles.name}>{time}</Text>
            </View>
            <Text style={styles.text} numberOfLines={2}>
               {text}
            </Text>
            {/*  <View style={styles.messagescontainer}>
               <TouchableOpacity onPress={handleMessage}>
                  <Image source={createMessagesIcon} style={styles.image} />
               </TouchableOpacity>
               <Text style={styles.counts}>{messagesCount}</Text>
               <TouchableOpacity onPress={handleGood}>
                  <Image source={goodIcon} style={styles.image} />
               </TouchableOpacity>
               <Text style={styles.counts}>{goodCount}</Text>
            </View>*/}
         </ImageBackground>
      </View>
   )
}

export default MessagesList
