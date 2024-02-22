
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "./Details";
import Home from "./Home";
const Stack =createNativeStackNavigator()
function Page(){
    return(
      <NavigationContainer independent={true}>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Details" component={Details}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
/*const windowWidth =Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;*/

export default  Page