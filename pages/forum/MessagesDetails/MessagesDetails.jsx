import { ImageBackground, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import backgroundImg from '../../../assets/forum/background.png'
import MessagesBg from '../../../assets/forum/Messages.png'
import styles from './MessagesDetails_style'
import CreateComment from '../createComment/createComment'
import postRequest from '../../api/postRequest'
import CommentList from '../CommentList/CommentList'

function MessagesDetails({ route }) {
   const { title, time, text, tUuid } = route.params
   const [comments, setComments] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await postRequest('post/getPosts', { tUuid })
            setComments(data.data)
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
   }, [tUuid])
   return (
      <View style={{ flex: 1 }}>
         <ImageBackground source={backgroundImg} style={styles.background}>
            <ScrollView style={styles.container}>
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
               <View style={{ paddingTop: 15 }}>
                  <ImageBackground
                     source={MessagesBg}
                     style={styles.messagesBackground}
                  >
                     <Text style={styles.word}>评论区</Text>
                     <>
                        {comments &&
                           comments.length > 0 &&
                           comments.map((comment) => (
                              <CommentList
                                 id={comment.id}
                                 time={comment.createdAt}
                                 text={comment.body}
                              />
                           ))}
                     </>
                  </ImageBackground>
               </View>
            </ScrollView>
            <CreateComment tUuid={tUuid} />
         </ImageBackground>
      </View>
   )
}

export default MessagesDetails
