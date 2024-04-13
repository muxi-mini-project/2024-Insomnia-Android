import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   witch: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
   },
   clickable: {
      width: '100%',
      height: '50%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
   },
})

export default styles
