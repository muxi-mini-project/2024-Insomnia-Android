import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "./pages/details/details";
import Home from "./pages/home/home";
// import Daily from "./pages/daily/daily";
// import First from "./pages/first/first";
// import SignUp from "./pages/signup/signUp";
// import Login from "./pages/login/login";
// import Conversation from "./pages/conversation/conversation";
// import DailyDetail from "./pages/DailyDetail";
const Stack =createNativeStackNavigator()
function Page(){
    return(
      <NavigationContainer independent={true}>
          <Stack.Navigator>
              {/*<Stack.Screen name="First" component={First}/>*/}
              {/*<Stack.Screen name="Signup" component={SignUp}/>*/}
              {/*<Stack.Screen name="Login" component={Login}/>*/}
              <Stack.Screen name="Home" component={Home}/>
              {/*<Stack.Screen name="Details" component={Details}/>*/}
              {/*<Stack.Screen name="Daily" component={Daily}/>*/}
              {/*<Stack.Screen name="DailyDetail" component={DailyDetail}/>*/}
              {/*<Stack.Screen name="Conversation" component={Conversation}/>*/}
          </Stack.Navigator>
      </NavigationContainer>
    )
}
export default  Page