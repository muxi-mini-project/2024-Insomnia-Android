import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import bk from '../../assets/mine/background.png'
import avatar from '../../assets/mine/avator.png'
import logouts from '../../assets/mine/logout.png'
import setmessages from '../../assets/mine/setmesssages.png'
import messages from '../../assets/mine/messages.png'
import styles from './mine_style'
import Chart from './Echarts/Echarts'
import useLogout from '../api/useLogout'

function Mine({ navigation }) {
   const logout = useLogout()
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <ImageBackground source={bk} style={styles.background}>
            <View style={styles.container}>
               <TouchableOpacity onPress={logout}>
                  <Image source={logouts} style={styles.image1} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Image source={setmessages} style={styles.image2} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Image source={messages} style={styles.image3} />
               </TouchableOpacity>
            </View>
            <Image source={avatar} style={styles.avatar} />
            <View
               style={{ flex: 1, zIndex: 100, backgroundColor: 'transparent' }}
            >
               <Chart />
            </View>
         </ImageBackground>
      </View>
   )
}
export default Mine
