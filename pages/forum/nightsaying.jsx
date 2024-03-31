import React from 'react'
import useFetchMessages from '../api/useFetchMessages'
import Messages from './Messages'

function NightSaying() {
   const messages = useFetchMessages('月夜心语')
   return <Messages messages={messages} />
}

export default NightSaying
