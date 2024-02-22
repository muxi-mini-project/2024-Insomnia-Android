import {useState} from "react";
import axios from 'axios'
import {Alert, TextInput, View} from "react-native";
function Login (){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async () => {
        try {
            const response = await axios.post('', {
                username,
                password,
            });

            if (response.data.success) {
                Alert.alert('登录成功', `欢迎, ${username}!`);
                // 这里可以进行更多的逻辑处理，如跳转到其他页面或保存令牌
            } else {
                Alert.alert('登录失败', '请检查您的用户名和密码。');
            }
        } catch (error) {
            Alert.alert('登录错误', '发生了一些错误，请稍后再试。');
        }
    };
    return(
        <View>
                <TextInput ></TextInput>
        </View>
    )
}