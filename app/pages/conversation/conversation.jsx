import {ImageBackground} from "react-native";
import {useState} from "react";
import {ChainedModal, NoReplyModal} from "./components/modal/conversationModal";
import styles from "./conversation_style";
import {imageList} from "./conversation.config";
import {useImagePrefetch} from "../../hooks/useImagePrefetch";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync().then(null,null);
const Conversation = () => {
    const [updateQuestion, setUpdateQuestion] = useState(false);
    const [noReply, setNoReply] = useState(true);

    useImagePrefetch(Object.values(imageList))
    const handleEndReply = () => {
        setNoReply(true)
    }
    return (
        <>
            <ImageBackground  style={{...styles.witch}} source={{uri: imageList.witch}}>
                {noReply ? <NoReplyModal></NoReplyModal> : <ChainedModal update={updateQuestion}  onEnd={handleEndReply}></ChainedModal>}
            </ImageBackground>

        </>
    )
}

export default Conversation