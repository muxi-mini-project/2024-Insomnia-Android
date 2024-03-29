import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { dailyTasks } from './DailyTask';
import { useState } from 'react';
import styles from './DailyDetail_style';
import { useTasks } from './TasksContext';
import DailyBackground from '../../assets/DailyBackground.png'
import DailyDetailsBackground from '../../assets/DailyDetailsBackground.png'
import DeleteButton from '../../assets/DeleteButton.png'
import FinishButton from '../../assets/FinishButon.png'
function DailyDetail({ navigation, route }) {
  const { taskId } = route.params;
  const { tasks, markTaskAsCompleted } = useTasks();
  const task = tasks.find((task) => task.id === taskId);

  const AsCompleted = () => {
    markTaskAsCompleted(taskId);
    navigation.navigate('Daily');
  };
  if (!task) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ImageBackground
          source={DailyBackground}
          style={styles.background}
        >
          <ImageBackground
            source={DailyDetailsBackground}
            style={styles.detailBackground}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Daily');
              }}
            >
              <Image
                source={DeleteButton}
                style={styles.deleteButton}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.title}>未找到该任务</Text>
            <TouchableOpacity>
              <Image
                source={FinishButton}
                style={styles.finishButton}
              ></Image>
            </TouchableOpacity>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        source={DailyBackground}
        style={styles.background}
      >
        <ImageBackground
          source={DailyDetailsBackground}
          style={styles.detailBackground}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Daily');
            }}
          >
            <Image
              source={DeleteButton}
              style={styles.deleteButton}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.details}>{task.details}</Text>
          <TouchableOpacity onPress={AsCompleted}>
            <Image
              source={FinishButton}
              style={styles.finishButton}
            ></Image>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

export default DailyDetail;
