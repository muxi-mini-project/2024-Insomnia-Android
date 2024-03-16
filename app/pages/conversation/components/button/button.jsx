import {Button} from "react-native";
import styles from "./button_style";

const ConversationButton = ({onClick, title}) => {
    return (
        <Button title={title} style={styles.conversationModalButton} onPress={onClick}></Button>
    )
}

export default ConversationButton