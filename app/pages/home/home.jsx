import { Image, ImageBackground, TouchableOpacity, View} from "react-native";
import styles from "./home_style";

function Home({navigation}) {
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',width:400,height:600}}>
            <ImageBackground source={require('../../assets/img/home.png')} style={styles.imgBackground}>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Image source={require('../../assets/img/home-1.png')} style={styles.button1}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../../assets/img/home-2.png')} style={styles.button2}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../../assets/img/home-3.png')} style={styles.button3}></Image>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Home