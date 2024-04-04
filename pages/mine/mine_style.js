import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   background: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
   },
   container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingLeft: windowWidth * 0.52,
      paddingTop: windowHeight * 0.02,
   },
   image1: {
      resizeMode: 'stretch',
      width: windowWidth * 0.1,
      height: windowHeight * 0.08,
      margin: 5,
   },
   image2: {
      resizeMode: 'stretch',
      width: windowWidth * 0.1,
      height: windowHeight * 0.08,
      margin: 5,
   },
   image3: {
      resizeMode: 'stretch',
      width: windowWidth * 0.1,
      height: windowHeight * 0.08,
      margin: 5,
   },
   avatar: {
      resizeMode: 'stretch',
      width: windowWidth * 0.4,
      height: windowHeight * 0.2,
      alignItems: 'center',
      justifyContent: 'center',
   },
})
export default styles
