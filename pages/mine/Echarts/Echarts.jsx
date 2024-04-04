import { Dimensions, View } from 'react-native'
import { ECharts } from 'react-native-echarts-wrapper'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function Chart() {
   const option = {
      backgroundColor: 'transparent',
      title: {
         text: '本周熬夜任务完成情况',
         textStyle: {
            color: 'pink',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            fontSize: 20,
         },
         left: 'center',
      },
      xAxis: {
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
         axisLine: {
            lineStyle: {
               color: '#333',
            },
         },
         axisLabel: {
            show: true,
            textStyle: {
               color: 'blue',
               fontSize: 18,
            },
         },
      },
      yAxis: {
         axisLine: {
            lineStyle: {
               color: 'black',
            },
         },
      },
      series: [
         {
            name: '完成任务数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 10],
            itemStyle: {
               color: '#8E64DE',
            },
         },
      ],
   }
   return (
      <View
         style={{
            flex: 1,
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <View
            style={{
               width: screenWidth,
               height: screenHeight * 0.5,
               backgroundColor: 'transparent',
            }}
         >
            <ECharts option={option} />
         </View>
      </View>
   )
}
export default Chart
