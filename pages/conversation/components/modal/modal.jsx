import { Animated, Modal, ImageBackground } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import styles from './modal_style'
import bubble from '../../../../assets/bubble.png'

const ConversationModal = ({ children, modalShow }) => {
   const [modalVisible, setModalVisible] = useState(false)
   const opacityValue = useRef(new Animated.Value(0)).current
   useEffect(() => {
      modalShow ? showModal() : hideModal()
   }, [modalShow])
   const showModal = () => {
      setModalVisible(true)
      Animated.timing(opacityValue, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start()
   }

   const hideModal = () => {
      Animated.timing(opacityValue, {
         toValue: 0,
         duration: 500,
         useNativeDriver: true,
      }).start(() => setModalVisible(false))
   }
   return (
      <Modal
         visible={modalVisible}
         transparent
         animationType="none"
         onRequestClose={hideModal}
      >
         <Animated.View
            style={[styles.modalContent, { opacity: opacityValue }]}
         >
            <ImageBackground
               source={bubble}
               style={styles.conversationBackground}
            >
               {children}
            </ImageBackground>
         </Animated.View>
      </Modal>
   )
}

export default ConversationModal
