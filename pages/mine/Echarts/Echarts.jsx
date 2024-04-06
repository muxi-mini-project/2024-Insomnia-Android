import { Dimensions, View } from 'react-native'
import { ECharts } from 'react-native-echarts-wrapper'
import { useEffect, useState } from 'react'
import postRequest from '../../api/postRequest'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function Chart() {
   const [datas, setDatas] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await postRequest('task/getAllTask', {})
            setDatas(data.data)
         } catch (e) {
            console.error(e)
         }
      }
      fetchData()
   }, [])
   const option = {
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
         type: 'value',
         min: 0,
         max: 15,
         interval: 3,
         axisLine: {
            lineStyle: {
               color: 'black',
            },
         },
      },
      tooltip: {
         show: true,
         trigger: 'axis',
         formatter: function (params) {
            const param = params[0]
            return param.name + ': ' + param.value + ' 个任务'
         },
      },

      series: [
         {
            name: '完成任务数',
            type: 'bar',
            data: datas,
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
            paddingTop: 15,
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
