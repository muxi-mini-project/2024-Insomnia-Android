import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import First from './pages/first/first'
import { TasksProvider } from './pages/DailyDetail/TasksContext'
import Login from './pages/login/Login'
import SignUp from './pages/signup/signUp'
import Home from './pages/home/home'
import DailyDetail from './pages/DailyDetail/DailyDetail'
import Mine from './pages/mine/Mine'
import Conversation from './pages/conversation/conversation'
import Daily from './pages/daily/Daily'
import CreateMessage from './pages/forum/createMessage/createMessage'
import Forum from './pages/forum/forum'
import MessagesDetails from './pages/forum/MessagesDetails/MessagesDetails'
const Stack = createNativeStackNavigator()
function Page() {
   return (
      <TasksProvider>
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name="First" component={First} />
               <Stack.Screen name="Signup" component={SignUp} />
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="DailyDetail" component={DailyDetail} />
               <Stack.Screen name="Mine" component={Mine} />
               <Stack.Screen name="Conversation" component={Conversation} />
               <Stack.Screen name="Daily" component={Daily} />
               <Stack.Screen name="Createmessage" component={CreateMessage} />
               <Stack.Screen name="Forum" component={Forum} />
               <Stack.Screen
                  name="MessagesDetails"
                  component={MessagesDetails}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </TasksProvider>
   )
}
export default Page
