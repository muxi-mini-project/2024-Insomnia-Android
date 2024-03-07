import {ImageBackground} from "react-native";
import {useCallback, useState} from "react";
import {ChainedModal, NoReplyModal} from "./components/modal/conversationModal";
import styles from "./conversation_style";
import {imageList} from "./conversation.config";
import {useImagePrefetch} from "../../hooks/useImagePrefetch";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync().then(null,null);
const Conversation = () => {
    const [updateQuestion, setUpdateQuestion] = useState(false);
    const [noReply, setNoReply] = useState(true);
    const [fontsLoaded, fontError] = useFonts({
        'pml': require('../../assets/font/pml.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    useImagePrefetch(Object.values(imageList))
    const handleClick = () => {
        setUpdateQuestion(!updateQuestion)
        setNoReply(false)
    }
    if (!fontsLoaded && !fontError) {
        return null;
    }
    const handleEndReply = () => {
        setNoReply(true)
    }
    return (
        <>
            <ImageBackground onLayout={onLayoutRootView} style={{...styles.witch}} source={{uri: imageList.witch}}>
                {noReply ? <NoReplyModal></NoReplyModal> : <ChainedModal update={updateQuestion}  onEnd={handleEndReply}></ChainedModal>}
            </ImageBackground>

        </>
    )
}

export default Conversation