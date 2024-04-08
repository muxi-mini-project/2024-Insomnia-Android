import { Image, Text, View } from 'react-native'
import avatar from '../../../assets/img/Login.png'
import styles from './CommentList_style'
function CommentList({ time, text }) {
   return (
      <View>
         <View style={{ flexDirection: 'row' }}>
            <Image source={avatar} style={styles.avatar}></Image>
            <Text style={styles.time}>{time}</Text>
         </View>
         <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
         </View>
      </View>
   )
}
export default CommentList
