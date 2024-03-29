import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Eyeshadows from './eyeshadows';
import Nightsaying from './nightsaying';
import styles from './forum_styles';
// 引入图片资源
import backgroundImg from '../../assets/forum/background.png';
import eyeshadowsImg from '../../assets/forum/eyeshadows.png';
import nightsayingImg from '../../assets/forum/nightsaying.png';
import sumImg from '../../assets/forum/sum.png';

const Forum = ({ navigation }) => {
  const [currentContent, setCurrentContent] = useState('eyeshadows');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        source={backgroundImg}
        style={styles.bk}
      >
        <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={() => setCurrentContent('eyeshadows')}>
            <Image
              style={styles.button1}
              source={eyeshadowsImg}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentContent('nightsaying')}>
            <Image
              style={styles.button2}
              source={nightsayingImg}
            />
          </TouchableOpacity>
        </View>
        {currentContent === 'eyeshadows' ? <Eyeshadows /> : <Nightsaying />}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Createmessage');
          }}
        >
          <Image
            source={sumImg}
            style={styles.sumButton}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Forum;
