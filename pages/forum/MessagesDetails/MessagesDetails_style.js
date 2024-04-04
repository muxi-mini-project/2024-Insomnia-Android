import { Dimensions, StyleSheet } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   topic: {
      fontSize: 40,
   },
   time: {
      fontSize: 20,
   },
   text: {
      fontSize: 18,
   },
   background: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   messagesBackground: {
      width: windowWidth,
      height: windowHeight * 0.6,
      borderRadius: 30,
      overflow: 'hidden',
      alignItems: 'center',
      paddingTop: 10,
   },
})
export default styles
