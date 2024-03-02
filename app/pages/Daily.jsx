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

function Daily() {
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <ImageBackground source={require('../assets/DailyBackground.png')} style={styles.background}>
                <ScrollView style={styles.dailyContainer}>
                    <View>
                        {dailyTasks.map(
                            dailyTask=>(
                              <View style={styles.dailyTaskContainer}>
                                  <TouchableOpacity key={dailyTask.id}>
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
            alignItems: 'center',
            flex: 1
        },
        dailyContainer:{
            marginTop:windowHeight*0.2
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