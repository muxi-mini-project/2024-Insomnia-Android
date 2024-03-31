import { Image, ImageBackground, Text, View } from 'react-native'
import bk from '../../assets/mine/background.png'
import avatar from '../../assets/mine/avator.png'
import logout from '../../assets/mine/logout.png'
import setmessages from '../../assets/mine/setmesssages.png'
import messages from '../../assets/mine/messages.png'
import styles from './mine_style'
function Mine() {
   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         <ImageBackground source={bk} style={styles.background}>
            <View style={styles.container}>
               <Image source={logout} style={styles.image1} />
               <Image source={setmessages} style={styles.image2} />
               <Image source={messages} style={styles.image3} />
            </View>
            <Image source={avatar} />
         </ImageBackground>
      </View>
   )
}
export default Mine
