import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native'; // 从react-native中导入所需组件
import MessagesList from './MessageList/MessagesList';
import styles from './forum_styles';

function Eyeshadows({ navigation }) {
  const [messages, setMessages] = useState([]);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://8.130.69.161:8080/api/v1/thread/createThread',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              topic: '标题',
              text: '正文',
              username: '用户名',
              time: '时间',
            }),
          }
        );
        const data = await response.json();
        const filterMessages = data.filter(
          (message) => message.value === '熬夜树洞'
        );
        setMessages(filterMessages);
      } catch (error) {
        Alert.alert('错误', '无法从服务器获取消息，请稍后再试。');
      }
    };
    fetchData();
  }, []);*/

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingTop: 10 }}>
        {/* {messages.map((message, index) => (
          <MessagesList
            key={index}
            topic={message.topic}
            time={message.time}
            username={message.username}
            text={message.text}
          />
        ))}*/}
        <MessagesList />
        <MessagesList />
        <MessagesList />
        <MessagesList />
      </ScrollView>
    </View>
  );
}

export default Eyeshadows;
