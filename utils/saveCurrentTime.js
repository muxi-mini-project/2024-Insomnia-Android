import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const saveCurrentTime = async () => {
  const now = Date();
  const currentTime = now.toISOString();
  try {
    await AsyncStorage.setItem('saveTime', currentTime);
  } catch (e) {
    Alert.alert('错误', '保存时间时出现错误');
  }
};
