class QuestionBase {
    constructor() {
        this.questionList = {}
    }
    addChained(ID="1", question="", options=[""], answers=[{answer:["empty"], nextID: null}], ) {
        if(options.length !== answers.length) {
            console.error(ID,'options not match answers')
            return this;
        }
        this.questionList[ID] = {
            question,
            replies: options.map((option, index) => {
                return {
                    option: option,
                    reply: answers[index].answer,
                    nextID: answers[index].nextID,
                }
            })
        }
        return this;
    }
}

let replyQuestion = new QuestionBase()
replyQuestion
    .addChained("1","你今天的心情如何？（请告知女巫你的心情状态）", ["心情挺不错的o(*￣▽￣*)ブ", "心情不好(；′⌒`)"], [
        {answer: ["真好。你心情好，我也开心，希望你一直这么开心下去。"], nextID: null},
        {answer: [], nextID: "2_a"}
    ])
    .addChained("2_a","在为什么事烦恼吗？", ["关于学业","关于人际", "其他"], [
        {answer: [], nextID: "3_a"},
        {answer: [], nextID: "3_b"},
        {answer: [], nextID: "3_c"}
    ])
    .addChained("3_a", "具体是哪方面呢？", ["作业赶不完", "成绩太差了", "考试快到了"], [
        {answer: ["原来这就是熬夜的原因啊，辛苦你了。",
                "作业太多也不要熬太晚哦，注意劳逸结合。"], nextID: null},
        {answer: ["一次失手也不能代表什么，别灰心，下次扳回一局！",
                "找到原因了吗？以后制定合理的计划去弥补断短板吧！",
                "如果心里实在太难受的话，就好好睡一觉吧，不要熬太久了。"], nextID: null},
        {answer: ["别紧张，放平心态，认真准备！",
                "那要注意作息规律哦。睡眠充足，复习效率才高，不要经常熬夜啦。",
                "熬夜复习很辛苦吧，遇到困难了及时寻求帮助哦。"]}
    ])
    .addChained("4","今天的任务做完了吗？", ["都完成了", "还没呢"], [
        {answer: ["太棒了！这个夜晚很有价值！"], nextID: null},
        {answer: ["那要加油了，我相信你今晚能完成的。"], nextID: null}
    ])
    .addChained("1_noReply", "123123")
    .addChained("2_noReply", "456456456")

export const QuestionList =  replyQuestion.questionList
export const IDList = Object.keys(QuestionList)
export const SourceQuestions = IDList.filter((ID) => ID.split('_').length < 2)
export const AllNoReplyQuestionIDs = IDList.filter((ID) => ID.split("_").includes("noReply"))
export const AllReplyQuestionIDs = IDList.filter((ID) => !AllNoReplyQuestionIDs.includes(ID))

export const imageList = {
    "bubble":'https://img2.imgtp.com/2024/03/06/JFche1LS.png',
    "witch":'https://img2.imgtp.com/2024/03/06/LU9ZAChc.png'
}