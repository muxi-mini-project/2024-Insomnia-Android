import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './createMessage_style';
// 引入图片资源
import setbkImg from '../../../assets/forum/setbk.png';
import pickbkImg from '../../../assets/forum/pickbk.png';
import topicbkImg from '../../../assets/forum/topicbk.png';
import textbkImg from '../../../assets/forum/textbk.png';
import setoutImg from '../../../assets/forum/setout.png';

function CreateMessage({ navigation }) {
  const [value, setValue] = useState('熬夜树洞');
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');

  const handleCreate = async () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const messageData = {
      category: value,
      title: topic,
      content: text,
    };
    try {
      const response = await fetch(
        'http://8.130.69.161:8080/api/v1/thread/createThread',
        {
          method: 'POST',
          headers,
          body: JSON.stringify(messageData),
        }
      );

      const data = await response.json();
      Alert.alert('成功', '你的消息已成功创建！');
      navigation.navigate('Forum');
    } catch (error) {
      Alert.alert('错误', '消息创建失败，请稍后重试。');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ImageBackground
        source={setbkImg}
        style={styles.background}
      >
        <Text style={styles.topic}>欢迎来到夜猫栖息地！</Text>
        <Text style={styles.text}>
          熬夜树洞用于倾诉心事，月夜心语用于夜晚文学创作
        </Text>
        <ImageBackground
          source={pickbkImg}
          style={styles.picker}
        >
          <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
          >
            <Picker.Item label="熬夜树洞" value="熬夜树洞" />
            <Picker.Item label="月夜心语" value="月夜心语" />
          </Picker>
        </ImageBackground>
        <ImageBackground
          source={topicbkImg}
          style={styles.topictext}
        >
          <TextInput
            value={topic}
            onChangeText={setTopic}
            placeholder="标题（16个字以内，包括标点符号）"
            placeholderTextColor="white"
            style={styles.textinput}
            maxLength={16}
          />
        </ImageBackground>
        <ImageBackground
          source={textbkImg}
          style={styles.texts}
        >
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="添加正文 (熬夜树洞在500字以内，月夜心语1500字以内)"
            placeholderTextColor="white"
            maxLength={value === '熬夜树洞' ? 500 : 1500}
            multiline={true}
            style={styles.texting}
          />
        </ImageBackground>
        <TouchableOpacity onPress={handleCreate}>
          <Image
            source={setoutImg}
            style={styles.button}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default CreateMessage;

