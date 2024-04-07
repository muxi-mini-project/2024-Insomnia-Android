import { Dimensions, StyleSheet } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   container: {
      minHeight: windowHeight * 0.1,
      margin: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 1,
      width: windowWidth * 0.8,
   },
   time: {
      fontSize: windowWidth * 0.06,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      top: windowWidth * 0.04,
   },
   text: {
      fontSize: windowWidth * 0.05,
   },
   avatar: {
      width: windowWidth * 0.14,
      height: windowHeight * 0.1,
      resizeMode: 'stretch',
   },
})
export default styles
