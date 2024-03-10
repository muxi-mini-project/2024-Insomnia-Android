
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import First from "./pages/First";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DailyDetail from "./pages/DailyDetail";
import Mine from "./pages/Mine";
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
              <Stack.Screen name="DailyDetail" component={DailyDetail}/>
              <Stack.Screen name="Mine" component={Mine}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
export default  Page