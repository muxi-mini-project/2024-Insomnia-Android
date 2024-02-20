import {Button, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

function Page(){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',width:400,height:600}}>
        <ImageBackground source={require('../assets/home.png')} style={styles.imgBackground}>
            <Link href="/details" asChild>
                <Pressable style={styles.button} >
                    <Text>daily</Text>
                </Pressable>
            </Link>
            <Link href="/details" asChild >
                <Pressable style={styles.button}>
                    <Text>daily</Text>
                </Pressable>
            </Link>
            <Link href="/details" asChild >
                <Pressable style={styles.button}>
                    <Text>daily</Text>
                </Pressable>
            </Link>

        </ImageBackground>
    </View>
    )


}
const styles=StyleSheet.create(
    {
        button: {
            alignItems: "center",
           borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            flex: 1,
            justifyContent: "center",
            opacity: 0.8,
            width: 50,
            margin:"auto",
            zIndex: 100,
            backgroundColor:'black'

        },
        imgBackground:{
            zIndex:-1,
            justifyContent:'center',
            alignItems:'center'
        }


    }

)
export default  Page