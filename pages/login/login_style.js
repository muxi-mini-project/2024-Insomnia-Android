import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   background: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
   },
   img: {
      width: windowWidth * 0.6,
      height: windowHeight * 0.3,
      resizeMode: 'stretch',
   },
   username: {
      borderRadius: windowWidth * 0.02,
      color: 'white',

      fontSize: 20,
      marginTop: windowHeight * 0.1,
      borderColor: 'white',
      borderWidth: 1,
      width: windowWidth * 0.5,
   },
   password: {
      borderRadius: windowWidth * 0.02,
      color: 'white',
      borderColor: 'white',
      fontSize: 20,
      borderWidth: 1,
      marginTop: windowHeight * 0.01,
      width: windowWidth * 0.5,
   },
   LoginButton: {
      width: windowWidth * 0.25,
      height: windowHeight * 0.08,
      resizeMode: 'stretch',
      marginLeft: windowWidth * 0.15,
   },
   buttonContainer: {
      flexDirection: 'row',
   },
   ClickSign: {
      color: 'white',
      marginTop: windowWidth * 0.05,
   },
})
export default styles
