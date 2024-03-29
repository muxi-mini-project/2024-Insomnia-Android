import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import bg from '../../assets/homeBackground.png'
import styles from './home_style';
import home1 from '../../assets/img/home-1.png'
import home2 from '../../assets/img/home-2.png'
import home3 from '../../assets/img/home-3.png'
import person from '../../assets/person.png'
function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 600,
      }}
    >
      <ImageBackground
        source={bg}
        style={styles.imgBackground}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Daily')}>
          <Image
            source={home1}
            style={styles.button1}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forum')}>
          <Image
            source={home2}
            style={styles.button2}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mine')}>
          <Image
            source={home3}
            style={styles.button3}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Conversation')}>
          <Image
            source={person}
            style={styles.person}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Home;
