import React, { useEffect, useState } from 'react'
import { ImageBackground, TextInput, View, Button, Alert } from 'react-native'
import styles from '../createComment/createComment_style'
import backgroundImg from '../../../assets/forum/createMessagesBk.png'
import postRequest from '../../api/postRequest'

function CreateComment({ tUuid }) {
   const [newComment, setNewComment] = useState('')
   const handleCreateComment = async () => {
      const messageData = {
         body: newComment,
         tUuid: tUuid,
      }
      try {
         const data = await postRequest('post/createPost', messageData)
         Alert.alert('成功', '你的评论已成功创建！')
      } catch (error) {
         Alert.alert('错误', '消息评论失败，请稍后重试。')
      }
      setNewComment('')
   }

   return (
      <View style={styles.container}>
         <ImageBackground source={backgroundImg} style={styles.bk}>
            <View style={styles.inputContainer}>
               <TextInput
                  value={newComment}
                  onChangeText={setNewComment}
                  placeholder="写评论..."
                  placeholderTextColor="white"
                  style={styles.input}
                  multiline={true}
               />
               <Button title="发布评论" onPress={handleCreateComment} />
            </View>
         </ImageBackground>
      </View>
   )
}

export default CreateComment
