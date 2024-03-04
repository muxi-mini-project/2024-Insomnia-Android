import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {dailyTasks} from "./DailyTask";

function DailyDetail(){
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <ImageBackground source={require('../assets/DailyBackground.png')} style={styles.background}>
                <ImageBackground source={require('../assets/DailyDetailsBackground.png')} style={styles.detailBackground}>
                    <Text>{dailyTasks.title}</Text>
                    <Image source={require('../assets/DeleteButton.png')} style={styles.deteleButton}></Image>
                    <Image source={require('../assets/FinishButon.png')}></Image>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles=StyleSheet.create(
    {
        background:{
        width:'100%',
        height:'100%',
        zIndex:-1
    },
        detailBackground:{
            resizeMode:'stretch',
            width:windowWidth*0.8,
            height:windowHeight*0.6,
        },
        deleteButton:{}

    }

)
export default DailyDetail