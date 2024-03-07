import {Dimensions, StyleSheet} from "react-native";

const windowWidth =Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create(
    {
        button1: {
            width:windowWidth*0.8,
            height:windowHeight*0.12,
            resizeMode:'stretch',
            marginTop:windowHeight*0.5
        },
        imgBackground:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', // 使用百分比以适应不同屏幕尺寸
            height: '100%', // 使用百分比以适应不同屏幕尺寸
        },
        button2:{
            width:windowWidth*0.8,
            height:windowHeight*0.12,
            resizeMode:'stretch',
        },
        button3:{
            width:windowWidth*0.8,
            height:windowHeight*0.12,
            resizeMode:'stretch',
        }
    }
)

export default styles