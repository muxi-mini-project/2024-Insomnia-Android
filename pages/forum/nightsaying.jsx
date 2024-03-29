import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MessagesList from './MessageList/MessagesList';
import { useEffect, useState } from 'react';
import { log } from 'expo/build/devtools/logger';
import styles from './forum_styles';

function NightSaying({ navigation }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://8.130.69.161:8080/api/v1/thread/getThreads',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error('网络请求失败');
        }
        const data = await response.json();
        const dataArray = Object.values(data);

        const filterMessages = dataArray.filter(
          (item) => item.value === '月夜心语'
        );
        setMessages(filterMessages);
      } catch (error) {
        console.log(error);
        Alert.alert('错误', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <ScrollView>
        {messages.map((message) => (
          <MessagesList
            key={message.id}
            topic={message.topic}
            time={message.time}
            username={message.username}
            text={message.text}
          />
        ))}
      </ScrollView>
    </View>
  );
}
export default NightSaying;
