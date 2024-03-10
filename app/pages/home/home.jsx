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
                <TouchableOpacity onPress={()=>navigation.navigate('Mine')} >
                    <Image source={require('../assets/home-3.png')} style={styles.button3}></Image>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Home