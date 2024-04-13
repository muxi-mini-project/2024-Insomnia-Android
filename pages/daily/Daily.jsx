import {
   Image,
   ImageBackground,
   ScrollView,
   Text,
   TouchableOpacity,
   View,
} from 'react-native'
import { dailyTasks } from '../DailyDetail/DailyTask'
import { useTasks } from '../DailyDetail/TasksContext'
import styles from './daily_style'
import DailyBack from '../../assets/DailyBack.png'
import DailyDetailsBackground from '../../assets/DailyBackground.png'
import { useEffect } from 'react'
import postRequest from '../api/postRequest'
function Daily({ navigation }) {
   const { tasks } = useTasks() // 从Context获取任务列表
   const completedTasksCount = tasks.filter((task) => task.completed).length
   useEffect(() => {
      const fetchData = async () => {
         const num = completedTasksCount
         try {
            await postRequest('task/upTask', {
               num,
            })
            console.log('成功更新数据')
         } catch (e) {
            console.error(e)
         }
      }
      fetchData()
   }, [completedTasksCount])
   return (
      <View style={{ flex: 1, justifyContent: 'center', position: 'relative' }}>
         <ImageBackground
            source={DailyDetailsBackground}
            style={styles.background}
         >
            <TouchableOpacity
               onPress={() => {
                  navigation.navigate('Home')
               }}
            >
               <Image source={DailyBack} style={styles.backButton}></Image>
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
                              })
                           }}
                        >
                           <Image
                              source={dailyTask.image}
                              style={styles.dailyImg}
                           />
                           <View style={styles.dailyTaskOverlay}>
                              <Text style={styles.dailyTaskText}>
                                 {dailyTask.title}
                              </Text>
                           </View>
                        </TouchableOpacity>
                     </View>
                  ))}
               </View>
            </ScrollView>
         </ImageBackground>
      </View>
   )
}

export default Daily
