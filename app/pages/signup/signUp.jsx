import { Image, ImageBackground, View } from "react-native";

function SignUp ()
{
    return(
        <View style={{flex:1,justifyContent:'center'}}>
                <ImageBackground source={require('../../assets/img/SignBackground.png')} style={styles.background}>
                    <Image source={require('../../assets/img/Signup.png')} style={styles.img}></Image>

                </ImageBackground>
        </View>
    )

}

export default SignUp