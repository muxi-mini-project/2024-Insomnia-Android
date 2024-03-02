import {Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";

function Home({navigation}) {
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',width:400,height:600}}>
            <ImageBackground source={require('../assets/home.png')} style={styles.imgBackground}>
                <TouchableOpacity onPress={() => navigation.navigate('Daily')}>
                    <Image source={require('../assets/home-1.png')} style={styles.button1}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../assets/home-2.png')} style={styles.button2}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../assets/home-3.png')} style={styles.button3}></Image>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
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
export default Home