import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Eyeshadows from './eyeshadows';
import Nightsaying from './nightsaying';
// 确保路径正确
import forum_styles from './forum_styles';
const Forum = () => {
  const [currentContent, setCurrentContent] = useState('eyeshadows');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        source={require('../../assets/forum/background.png')}
        style={forum_styles.bk}
      >
        <View style={forum_styles.ButtonContainer}>
          <TouchableOpacity onPress={() => setCurrentContent('eyeshadows')}>
            <Image
              style={forum_styles.button1}
              source={require('../../assets/forum/eyeshadows.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentContent('nightsaying')}>
            <Image
              style={forum_styles.button2}
              source={require('../../assets/forum/nightsaying.png')}
            ></Image>
          </TouchableOpacity>
        </View>
        {currentContent === 'eyeshadows' ? <Eyeshadows /> : <Nightsaying />}
      </ImageBackground>
    </View>
  );
};

export default Forum;
