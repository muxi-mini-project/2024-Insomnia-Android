import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './pages/home/home';
// import Daily from './pages/daily/Daily';
import First from './pages/first/first';
// import SignUp from './pages/signup/signUp';
// import Login from './pages/login/Login';
// import Conversation from './pages/conversation/conversation';
// import DailyDetail from './pages/DailyDetail/DailyDetail';
// import Mine from './pages/mine/Mine';
import { TasksProvider } from './pages/DailyDetail/TasksContext';
// import Forum from './pages/forum/forum';
// import CreateMessage from './pages/forum/createMessage/createMessage';
const Stack = createNativeStackNavigator();
function Page() {
    return (
        <TasksProvider>
            <NavigationContainer >
                <Stack.Navigator>
                    <Stack.Screen name="First" component={First} />
                    {/*<Stack.Screen name="Signup" component={SignUp} />*/}
                    {/*<Stack.Screen name="Login" component={Login} />*/}
                    {/*<Stack.Screen name="Home" component={Home} />*/}
                    {/*<Stack.Screen name="DailyDetail" component={DailyDetail} />*/}
                    {/*<Stack.Screen name="Mine" component={Mine} />*/}
                    {/*<Stack.Screen name="Conversation" component={Conversation} />*/}
                    {/*<Stack.Screen name="Daily" component={Daily} />*/}
                    {/*<Stack.Screen name="Createmessage" component={CreateMessage} />*/}
                    {/*<Stack.Screen name="Forum" component={Forum} />*/}
                </Stack.Navigator>
            </NavigationContainer>
        </TasksProvider>
    );
}
export default Page