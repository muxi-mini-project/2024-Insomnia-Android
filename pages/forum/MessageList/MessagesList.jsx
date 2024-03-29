import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import styles from './MessagesList_style';
function MessagesList({ topic, time, username, text }) {
  const [messagesCount, setMessagesCount] = useState(0);
  const [goodCount, setGoodCount] = useState(0);
  const handleMessage = () => {
    setMessagesCount(messagesCount + 1);
  };
  const handleGood = () => {
    setGoodCount(goodCount + 1);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
      }}
    >
      <ImageBackground
        source={require('../../../assets/forum/Messages.png')}
        style={styles.textBackground}
      >
        <Text style={styles.topic}>标题标题标题标题</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.name}>用户名用户名 </Text>
          <Text style={styles.name}>2024 3.20 13;34</Text>
        </View>
        <Text style={styles.text} numberOfLines={2}>
          正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
        </Text>
        <View style={styles.messagescontainer}>
          <TouchableOpacity onPress={handleMessage}>
            <Image
              source={require('../../../assets/forum/createMessages.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.counts}>{messagesCount}</Text>
          <TouchableOpacity onPress={handleGood}>
            <Image
              source={require('../../../assets/forum/good.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.counts}>{goodCount}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export default MessagesList;
