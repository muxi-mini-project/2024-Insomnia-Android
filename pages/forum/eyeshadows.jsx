import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import MessagesList from './MessageList/MessagesList'
import useFetchMessages from '../api/useFetchMessages'
import { useNavigation } from '@react-navigation/native'
import Messages from './Messages'

function NightSaying() {
   const messages = useFetchMessages('熬夜树洞')
   return <Messages messages={messages} />
}
export default NightSaying
