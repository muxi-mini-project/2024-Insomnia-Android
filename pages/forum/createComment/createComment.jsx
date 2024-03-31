import React, { useEffect, useState } from 'react'
import {
   FlatList,
   ImageBackground,
   TextInput,
   View,
   Text,
   Button,
} from 'react-native'
import styles from '../createMessage/createMessage_style'
import backgroundImg from '../../../assets/forum/background.png' // 假设这是您的背景图片路径

// 假设的API URL，您需要根据实际情况进行替换
const apiUrl = 'https://example.com/api/comments'

function CreateComment() {
   const [comments, setComments] = useState([])
   const [newComment, setNewComment] = useState('')

   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <ImageBackground source={backgroundImg} style={styles.bk}>
            <FlatList
               data={comments}
               renderItem={({ item }) => <Text>{item.comment}</Text>}
               keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
               value={newComment}
               onChangeText={setNewComment}
               placeholder="写评论..."
               style={{ margin: 10 }}
            />
            <Button title="发布评论" />
         </ImageBackground>
      </View>
   )
}

export default CreateComment
