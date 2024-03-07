import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "./pages/details/details";
import Home from "./pages/home/home";
import Daily from "./pages/daily/daily";
import First from "./pages/first/first";
import SignUp from "./pages/signup/signUp";
import Login from "./pages/login/login";
import Conversation from "./pages/conversation/conversation";
const Stack =createNativeStackNavigator()
function Page(){
    return(
      <NavigationContainer independent={true}>
          <Stack.Navigator>
              <Stack.Screen name="Conversation" component={Conversation}></Stack.Screen>

          </Stack.Navigator>
      </NavigationContainer>
    )
}
export default  Page