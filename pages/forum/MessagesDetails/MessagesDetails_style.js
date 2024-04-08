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
   container: {
      top: windowHeight * 0.1,
      flex: 1,
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
      width: windowWidth * 0.9,
      minHeight: windowHeight * 0.5,
      borderRadius: 30,
      overflow: 'hidden',
      alignItems: 'center',
      paddingTop: 10,
   },
   word: {
      fontSize: windowWidth * 0.1,
   },
})
export default styles
