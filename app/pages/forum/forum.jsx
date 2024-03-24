import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Eyeshadows from './eyeshadows';
import Nightsaying from './nightsaying';
// 确保路径正确
import styles from './forum_styles';
const Forum = ({ navigation }) => {
  const [currentContent, setCurrentContent] = useState('eyeshadows');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        source={require('../../assets/forum/background.png')}
        style={styles.bk}
      >
        <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={() => setCurrentContent('eyeshadows')}>
            <Image
              style={styles.button1}
              source={require('../../assets/forum/eyeshadows.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentContent('nightsaying')}>
            <Image
              style={styles.button2}
              source={require('../../assets/forum/nightsaying.png')}
            ></Image>
          </TouchableOpacity>
        </View>
        {currentContent === 'eyeshadows' ? <Eyeshadows /> : <Nightsaying />}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateMessage');
          }}
        >
          <Image
            source={require('../../assets/forum/sum.png')}
            style={styles.sumButton}
          ></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Forum;
