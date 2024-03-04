import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {useState} from "react";
import {dailyTasks} from "./DailyTask";

function Daily({navigation}) {
    return(
        <View style={{flex:1,justifyContent:'center',position:'relative'}}>
            <ImageBackground source={require('../assets/DailyBackground.png')} style={styles.background}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <Image source={require('../assets/DailyBack.png')} style={styles.backButton}></Image>
                </TouchableOpacity>
                <ScrollView style={styles.dailyContainer}>
                    <View>
                        {dailyTasks.map(
                            dailyTask=>(
                              <View style={styles.dailyTaskContainer}>
                                  <TouchableOpacity key={dailyTask.id} onPress={()=>{navigation.navigate('DailyDetail')}}>
                                      <Image source={dailyTask.image} style={styles.dailyImg}>
                                      </Image>
                                  </TouchableOpacity>
                                  <View style={styles.dailyTaskOverlay}>
                                      <Text style={styles.dailyTaskText}>{dailyTask.title}</Text>
                                  </View>
                              </View>
                            )
                        )}
                    </View>

                </ScrollView>
            </ImageBackground>
        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles =StyleSheet.create(
    {
        background:{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            flex: 1
        },
        dailyContainer:{
            marginTop:windowHeight*0.2
        },
        backButton:{
            width:windowWidth*0.24,
            height:windowHeight*0.08,
            resizeMode:'stretch',
            position:'absolute',
            top:0,
            left:1
        },

        dailyTaskContainer:{
            position:'relative',
            alignItems: 'center',
            justifyContent: 'center',
        },
        dailyImg:{
            justifyContent:'center',
            width:0.9*windowWidth,
            height:0.15*windowHeight,
            resizeMode:'stretch',
            alignItems:'center',
           marginTop:0.02*windowHeight
        },
        dailyTaskOverlay:{
            ...StyleSheet.absoluteFillObject,
            alignItems:'center',
            justifyContent:'center'

        },
        dailyTaskText: {
            color: 'white',
            fontSize: 25,
            textAlign:'center'
        }



    }
)
export default Daily