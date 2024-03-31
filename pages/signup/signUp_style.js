import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   background: {
      width: '100%',
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   img: {
      width: windowWidth * 0.6,
      height: windowHeight * 0.3,
      resizeMode: 'stretch',
      justifyContent: 'center',
   },
   email: {
      color: 'white',
      fontSize: 20,
      width: windowWidth * 0.5,
      height: windowHeight * 0.04,
      borderRadius: windowWidth * 0.02,
      borderColor: 'white',
      borderWidth: 1,
   },
   verificationCode: {
      borderRadius: windowWidth * 0.02,
      color: 'white',
      fontSize: 20,
      width: windowWidth * 0.5,

      borderColor: 'white',
      borderWidth: 1,
      marginTop: 10,
   },
   password: {
      color: 'white',
      fontSize: 20,
      width: windowWidth * 0.5,
      borderRadius: windowWidth * 0.03,
      borderColor: 'white',
      borderWidth: 1,
      marginTop: 10,
   },
   container: {
      flexDirection: 'row',
      height: windowHeight * 0.05,
      width: windowWidth * 0.5,
   },
   emailButton: {
      height: windowHeight * 0.04,
      width: windowWidth * 0.2,
      backgroundColor: '#E371F7',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
   },
   signupButton: {
      resizeMode: 'stretch',
      width: windowWidth * 0.25,
      height: windowHeight * 0.08,
      marginTop: 10,
   },
})
export default styles
