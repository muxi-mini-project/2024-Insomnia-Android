import { ImageBackground, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

function createMessages() {
  const [value, setValue] = useState('熬夜树洞');
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');
  return (
    <View>
      <Text>欢迎来到夜猫栖息地！</Text>
      <Text>熬夜树洞用于倾诉心事； 月夜心语用于夜晚文学创作</Text>
      <ImageBackground source={require('../../assets/forum/pickbk.png')}>
        <Picker
          selectedValue={Value}
          onValueChange={(itemValue, itemIndex) => {
            setValue(itemValue);
          }}
        >
          <Picker.Item label="熬夜树洞" value="熬夜树洞" />
          <Picker.Item label="月夜心语" value="月夜心语" />
        </Picker>
      </ImageBackground>
      <ImageBackground source={require('../../assets/forum/topicbk.png')}>
        <TextInput value={topic} onChangeText={setTopic}></TextInput>
      </ImageBackground>
      <ImageBackground source={require('../../assets/forum/textbk.png')}>
        <TextInput value={text} onChangeText={setText}></TextInput>
      </ImageBackground>
    </View>
  );
}
