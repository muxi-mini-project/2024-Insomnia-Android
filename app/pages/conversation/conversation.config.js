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
    .addChained("3_b", '具体是哪方面呢',['对人际交往很疲惫','对人际交往很疲惫','对人际交往很疲惫'],[
        {answer: ['我深有同感呢。但是如果这么复杂的事你都处理得好的话，还有什么能难得到你呢？/实在不想要的关系就抛弃掉吧，及时止损或许更有好处。'], nextID: null},
        {answer: ['每一场暴雨都是晴天的预告。换个角度想，重归于好是不是更快乐呢？/试着解开误会吧，如果是很重要的朋友，一定要珍视和ta的感情啊。'], nextID: null},
        {answer: [    '不管是因为什么，我都希望你能顺利解决它。三言两语难以说清的话，就写在熬夜树洞里吧，对亲近的人难以说出口的，或许跟陌生人更好启齿。'], nextID: null}])
    .addChained("4","今天的任务做完了吗？", ["都完成了", "还没呢"], [
        {answer: ["太棒了！这个夜晚很有价值！"], nextID: null},
        {answer: ["那要加油了，我相信你今晚能完成的。"], nextID: null}
    ])
    .addChained("1_noReply", "随时欢迎你把我当树洞来倾诉哦")
    .addChained("2_noReply", "有点累了吗？记得早点休息哦")
    .addChained("3_noReply", "分神了吗？专心才能早点完成任务早点睡觉呢")
    .addChained("4_noReply", '心情不好吗？没关系，我陪着你呢。')
    .addChained('5_noReply', "你看起来心事很重呢，在熬夜树洞留下你的心迹吧，说不定第二天醒来，就有人回应你的困扰了呢。")
    .addChained("6_noReply", '我今天做了很多有趣的事情，你呢？')
    .addChained("5", "为什么熬夜熬这么久",[
        "要做的事太多，心事太重",
        "要做的事太多，心事太重",
        "不熬了，马上睡"], [
        {answer: ["制定计划一步一步走，最后你会发现任务莫名其妙就做完了。至于心事......不要总是憋在心里啊。"], nextID: null},
        {answer: ["没来由的想熬夜其实背后一定有一个原没什么特别的原因，就是想熬因。白天实在太忙了？还是遇到想不明白的事儿了？不管是什么，我都希望你能早日拜托心理包袱。"], nextID: null},
        {answer: ["那么晚安，祝你梦到开心的事儿。"], nextID: null}
    ])

export const QuestionList =  replyQuestion.questionList
export const IDList = Object.keys(QuestionList)
export const SourceQuestions = IDList.filter((ID) => ID.split('_').length < 2)
export const AllNoReplyQuestionIDs = IDList.filter((ID) => ID.split("_").includes("noReply"))
export const AllReplyQuestionIDs = IDList.filter((ID) => !AllNoReplyQuestionIDs.includes(ID))

export const imageList = {
    "bubble":'https://img2.imgtp.com/2024/03/06/JFche1LS.png',
    "witch":'https://img2.imgtp.com/2024/03/06/LU9ZAChc.png'
}