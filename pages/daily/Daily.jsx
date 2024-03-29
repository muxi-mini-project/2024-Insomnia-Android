import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { dailyTasks } from '../DailyDetail/DailyTask';
import { useTasks } from '../DailyDetail/TasksContext';
import styles from './daily_style';
function Daily({ navigation }) {
  const { tasks } = useTasks(); // 从Context获取任务列表
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  return (
    <View style={{ flex: 1, justifyContent: 'center', position: 'relative' }}>
      <ImageBackground
        source={require('../../assets/DailyDetailsBackground.png')}
        style={styles.background}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Image
            source={require('../../assets/DailyBack.png')}
            style={styles.backButton}
          ></Image>
        </TouchableOpacity>
        <View>
          <Text style={styles.completedDailys}>
            已完成任务数:{completedTasksCount}
          </Text>
        </View>
        <ScrollView style={styles.dailyContainer}>
          <View>
            {dailyTasks.map((dailyTask) => (
              <View style={styles.dailyTaskContainer} key={dailyTask.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DailyDetail', {
                      taskId: dailyTask.id,
                    });
                  }}
                >
                  <Image
                    source={dailyTask.image}
                    style={styles.dailyImg}
                  ></Image>
                </TouchableOpacity>
                <View style={styles.dailyTaskOverlay}>
                  <Text style={styles.dailyTaskText}>{dailyTask.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default Daily;
