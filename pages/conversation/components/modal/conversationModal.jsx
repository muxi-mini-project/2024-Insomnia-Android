import {View, Text} from "react-native";
import ConversationModal from "../../components/modal/modal";
import {
    AllNoReplyQuestionIDs,
    QuestionList,
    SourceQuestions
} from "../../conversation.config";
import Button from "../../components/button/button";
import styles from "./modal_style";
import {useEffect, useState} from "react";
import {useShowState} from "../../hooks/useShowState";
import {key} from "../../../../utils/keyGenerator";
import {randomPickFromArray} from "../../../../utils/randomPickFromArray";

export const ChainedModal = ({update, onEnd}) => {
    const [questionGenerated, setQuestionGenerated] = useState([]);
    const [currentQuestionID, setCurrentQuestionID] = useState();
    const [currentPick, setCurrentPick] = useState({nextID: "1", reply:[], option: ""});
    const [show, setShow, setShowFalse] = useShowState()
    const updateQuestion = () => {
        setCurrentQuestionID(randomPickFromArray(SourceQuestions))
        setShow(true)
    }
    useEffect(() =>{
        updateQuestion()
    },[update])
    useEffect(() => {
        // 一个连续问题结束
        if(currentQuestionID && !show) {
            let timer = setTimeout(() =>{
                setQuestionGenerated([...questionGenerated, currentQuestionID])
                setCurrentPick({nextID: "1", reply:[], option: ""})
                onEnd && onEnd()
            }, 500)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [show])
    const handleSelect = (item) => {
        setCurrentPick(item)
        if(item.nextID) {
            QuestionList[item.nextID].replies.every((item) => !item['option']) && setShowFalse()
            setCurrentQuestionID(item.nextID)
        } else {
            setShowFalse()
        }
    }
    return (
            <Questions
                questionInfo={QuestionList[currentQuestionID || '1']}
                onSelected={handleSelect}
                show={show}
                currentPick={currentPick}
            ></Questions>
    )
}

export const NoReplyModal = () => {
    const [show,setShow, setShowFalse] = useShowState(false)
    const [questionID, setQuestionID] = useState(randomPickFromArray(AllNoReplyQuestionIDs));
    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeout = 3000
            setShow(true)
            setTimeout(() => {
                setQuestionID(randomPickFromArray(AllNoReplyQuestionIDs))
            }, timeout + 500)
            setShowFalse(timeout)
            return () => {
                clearInterval(intervalId)
            };
        }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 5000);

        return () => clearInterval(intervalId);
    }, [])
    return (
       <Questions questionInfo={QuestionList[questionID]} show={show}></Questions>
    )
}
export const Questions = ({questionInfo, onSelected, show, currentPick={nextID:"1",reply:[], option:""}}) => {
    const {question, replies} = questionInfo
    const handleClick = (item) => {
        onSelected && onSelected(item)
    }
    return (
        <ConversationModal modalShow={show}>
            {!currentPick.nextID
                ? (<Text style={styles.text}>{randomPickFromArray(currentPick.reply)}</Text>)
                : (<>
                    <Text style={styles.text}>{question}</Text>
                    {replies.length &&
                        <View style={styles.conversationButtonWrap}>
                            {replies.map(item=>(<Button title={item.option} key={key.next().value} onClick={()=> handleClick(item)}></Button>))}
                        </View>}
                </>)}
        </ConversationModal>
    )
}
