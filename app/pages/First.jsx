import {Dimensions, Image, ImageBackground, TouchableOpacity, View,StyleSheet} from "react-native";

function First({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center'}}>
                <ImageBackground source={require('../assets/First-1.png')} style={styles.backGround}>
                    <TouchableOpacity
        onPress={()=>{navigation.navigate('Login')}}>
                    <Image source={require('../assets/First-Login.png')} style={styles.button1}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('Signup')}}>
                        <Image source={require('../assets/First-Signup.png')} style={styles.button2}></Image>
                    </TouchableOpacity>
                </ImageBackground>
        </View>
    )
}
const windowWidth =Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create(
    {
        backGround:{
            justifyContent:'center',
            alignItems:'center',
            flex:1,
            width:'100%',
            height:'100%'
        },
        button2:{
            width:windowWidth*0.8,
            height:windowHeight*0.12,
            resizeMode:'stretch',
        },
        button1: {
            width:windowWidth*0.8,
            height:windowHeight*0.12,
            resizeMode:'stretch',
            marginTop:windowHeight*0.5
        }

    }
)
export  default First
