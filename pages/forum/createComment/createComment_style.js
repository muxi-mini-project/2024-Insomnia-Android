import { Dimensions, StyleSheet } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   container: {
      width: windowWidth * 0.9,
      height: windowHeight * 0.1,
   },
   bk: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   inputContainer: {
      width: '80%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
   },
   input: {
      marginBottom: 10,
      width: windowWidth * 0.5,
   },
})
export default styles
