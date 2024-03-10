import {Dimensions, StyleSheet} from "react-native";

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