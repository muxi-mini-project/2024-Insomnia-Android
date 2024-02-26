import {Dimensions, Image, ImageBackground, StyleSheet, Text, View} from "react-native";

function SignUp ()
{
    return(
        <View style={{flex:1,justifyContent:'center'}}>
                <ImageBackground source={require('../assets/SignBackground.png')} style={styles.background}>
                    <Image source={require('../assets/Signup.png')} style={styles.img}></Image>

                </ImageBackground>
        </View>
    )

}
const windowWidth =Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create(
    {
        background:{
            width:'100%',
            height:'100%',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        img:{
            width:windowWidth*0.6,
            height:windowHeight*0.3,
            resizeMode:'stretch',
justifyContent:'center'
        }
    }
)
export default SignUp