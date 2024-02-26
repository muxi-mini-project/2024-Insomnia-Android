
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "../components/Details";
import Home from "../components/Home";
import Daily from "../components/daily";
import First from "../components/First";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
const Stack =createNativeStackNavigator()
function Page(){
    return(
      <NavigationContainer independent={true}>
          <Stack.Navigator>
              <Stack.Screen name="First" component={First}/>
              <Stack.Screen name="Signup" component={SignUp}/>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Details" component={Details}/>
              <Stack.Screen name="Daily" component={Daily}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
export default  Page