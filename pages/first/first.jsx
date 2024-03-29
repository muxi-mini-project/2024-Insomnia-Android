import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

import bg_1 from '../../assets/img/First-1.png'
import bg_2 from '../../assets/img/First-Login.png'
import bg_3 from '../../assets/img/First-Signup.png'

import styles from './first_style';
function First({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={bg_1}
        style={styles.backGround}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Image
            source={bg_2}
            style={styles.button1}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Image
            source={bg_3}
            style={styles.button2}
          ></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default First;
