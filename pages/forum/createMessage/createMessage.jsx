import React, { useState } from 'react'
import {
   Alert,
   Image,
   ImageBackground,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import styles from './createMessage_style'
// 引入图片资源
import setbkImg from '../../../assets/forum/setbk.png'
import pickbkImg from '../../../assets/forum/pickbk.png'
import topicbkImg from '../../../assets/forum/topicbk.png'
import textbkImg from '../../../assets/forum/textbk.png'
import setoutImg from '../../../assets/forum/setout.png'
import postRequest from '../../api/postRequest'

function CreateMessage({ navigation }) {

   const [topic, setTopic] = useState('熬夜树洞')
   const [body, setBody] = useState('')
   const [title, setTitle] = useState('')
   const handleCreate = async () => {
      const messageData = {
         topic: topic,
         title: title,
         body: body,
      }
      try {
         const data = await postRequest('thread/createThread', messageData)
         Alert.alert('成功', '你的消息已成功创建！')
         navigation.navigate('Forum')
      } catch (error) {
         Alert.alert('错误', '消息创建失败，请稍后重试。')
      }
   }

   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         <ImageBackground source={setbkImg} style={styles.background}>
            <Text style={styles.topic}>欢迎来到夜猫栖息地！</Text>
            <Text style={styles.text}>
               熬夜树洞用于倾诉心事，月夜心语用于夜晚文学创作
            </Text>
            <ImageBackground source={pickbkImg} style={styles.picker}>
               <Picker
                  selectedValue={topic}
                  onValueChange={(itemValue, itemIndex) => setTopic(itemValue)}
               >
                  <Picker.Item label="熬夜树洞" value="熬夜树洞" />
                  <Picker.Item label="月夜心语" value="月夜心语" />
               </Picker>
            </ImageBackground>
            <ImageBackground source={topicbkImg} style={styles.topictext}>
               <TextInput
                  value={title}
                  onChangeText={setTitle}
                  placeholder="标题（16个字以内，包括标点符号）"
                  placeholderTextColor="white"
                  style={styles.textinput}
                  maxLength={16}
               />
            </ImageBackground>
            <ImageBackground source={textbkImg} style={styles.texts}>
               <TextInput
                  value={body}
                  onChangeText={setBody}
                  placeholder="添加正文 (熬夜树洞在500字以内，月夜心语1500字以内)"
                  placeholderTextColor="white"
                  maxLength={topic === '熬夜树洞' ? 500 : 1500}
                  multiline={true}
                  style={styles.texting}
               />
            </ImageBackground>
            <TouchableOpacity onPress={handleCreate}>
               <Image source={setoutImg} style={styles.button} />
            </TouchableOpacity>
         </ImageBackground>
      </View>
   )
}

export default CreateMessage
