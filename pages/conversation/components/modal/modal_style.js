import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
   text: {
      fontSize: 20,
      color: 'white',
   },
   modalContent: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '50%',
      fontSize: 24,
      color: '#fff',
   },
   conversationBackground: {
      opacity: 0.94,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
   },
   conversationButtonWrap: {
      flexWrap: 'wrap',
      width: '90%',
   },
})

export default styles
