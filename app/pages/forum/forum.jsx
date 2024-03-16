import {Dimensions, ImageBackground, StyleSheet, Text, View} from "react-native";

function Forum (){
    return(
        <View style={{flex:1,justifyContent:'center',position:'relative'}}>
            <ImageBackground source={require('../../assets/forum/background.png')} style={styles.background}>

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

        }
    }

)
export default Forum