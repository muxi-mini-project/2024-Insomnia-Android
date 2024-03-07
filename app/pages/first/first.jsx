import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import styles from "./first_style";
function First({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center'}}>
                <ImageBackground source={require('../../assets/img/First-1.png')} style={styles.backGround}>
                    <TouchableOpacity
        onPress={()=>{navigation.navigate('Login')}}>
                    <Image source={require('../../assets/img/First-Login.png')} style={styles.button1}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('Signup')}}>
                        <Image source={require('../../assets/img/First-Signup.png')} style={styles.button2}></Image>
                    </TouchableOpacity>
                </ImageBackground>
        </View>
    )
}

export  default First
