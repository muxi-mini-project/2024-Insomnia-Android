import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  dailyContainer: {
    marginTop: windowHeight * 0.1,
  },
  backButton: {
    width: windowWidth * 0.24,
    height: windowHeight * 0.08,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    left: 1,
  },

  dailyTaskContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyImg: {
    justifyContent: 'center',
    width: 0.9 * windowWidth,
    height: 0.15 * windowHeight,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginTop: 0.02 * windowHeight,
  },
  //想加一个完成之后透明度变化
  /*   dailyImgCompleted:{
            justifyContent:'center',
            width:0.9*windowWidth,
            height:0.15*windowHeight,
            resizeMode:'stretch',
            alignItems:'center',
            marginTop:0.02*windowHeight
        },*/
  dailyTaskOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyTaskText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  completedDailys: {
    color: 'white',
    fontSize: 20,
    left: '60%',
  },
});
export default styles;
