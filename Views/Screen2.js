import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Screen2 = ({navigation}) => {

   const showPage = (page)=>{
    navigation.navigate(page)
   }

   const [hour,setHour] = useState(0);
   const [minute,setMinute] = useState(0);
   const [second,setSecond] = useState(0);

   const [interv,setInterv] = useState(0);


   const [timeron,setTimerOn] = useState(0);
   const [stopped,setStopped] = useState(0);

   let currsec = second;
   let currmint = minute;
   let currhour = hour;



   const updatetimer = ()=>{
    if(currsec == 60){
        currsec = 0
        currmint = currmint+1;
    }
    if(currmint ==  60){
        currmint = 0
        currsec = 0
        currhour = currhour+1;
    }
    currsec++;
    setSecond(currsec);
    setMinute(currmint);
    setHour(currhour);
   }

   const starttimer = ()=>{
        setStopped(0);
        updatetimer();
        setInterv(setInterval(updatetimer, 1000));
        setTimerOn(1);
   }
   const stoptimer = ()=>{
    setStopped(1);
    clearInterval(interv);
   }
   const resettimer = ()=>{
    setTimerOn(0);
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(interv);
   }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{hour > 9 ? hour : '0'+hour}
        <Text style={styles.small}>HR</Text>
      </Text>
      <Text style={styles.number}>{minute > 9 ? minute : '0'+minute}
        <Text style={styles.small}>MIN</Text>
      </Text>
      <Text style={styles.number}>{second > 9 ? second : '0'+second}
        <Text style={styles.small}>SEC</Text>
      </Text>
      
      {timeron == 0 ?
      <View  style={styles.startstop}>
      <TouchableOpacity onPress={starttimer}>
          <Text style={styles.start}>Start</Text>
      </TouchableOpacity>
      
    </View> : 
    <View  style={styles.startstop}>
            <TouchableOpacity onPress={resettimer}>
                    <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>

        {stopped == 0 ? <TouchableOpacity onPress={stoptimer}>
        <Text style={styles.stop}>Pause</Text>
    </TouchableOpacity> : 
    <TouchableOpacity onPress={starttimer}>
        <Text style={styles.stop}>Continue</Text>
    </TouchableOpacity>}
  </View>}


    <View style={styles.bottomnav}>
        <TouchableOpacity style={styles.bottomnaviconout} onPress={()=>{showPage('s1')}}>
            {/*<Text style={styles.bottomnavtext}>+</Text>*/}
            <Image source={require('../assets/clock.png')} style={styles.bottomnavicon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomnaviconactive} onPress={()=>{showPage('s2')}}>
            {/*<Text style={styles.bottomnavtext}>-</Text>*/}
            <Image source={require('../assets/timer.png')} style={styles.bottomnavicon}/>
        </TouchableOpacity>
    </View>


    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",
      backgroundColor:"black",
      alignItems:"center",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
    },
    number:{
        color:"white",
        fontSize:100,
        fontWeight:"bold",
        lineHeight:170,
    },
    small:{
        color:"grey",
        fontSize:20
    },
   bottomnavtext:{
    color:"black",
    fontSize:30,
    backgroundColor:"white",
    marginHorizontal:10,
    //paddingHorizontal:10,
    width:50,
    height:40,
    textAlign:"center",
    borderRadius:20,
    //fontWeight:"bold"
   },
   bottomnav:{
    flexDirection:"row",
    //backgroundColor:"white",
    width:"100%",
    position:"absolute",
    bottom:0,
    alignItems:"center",
    justifyContent:"center"
   },
   bottomnavicon:{
    width:40,
    height:40
   },
   bottomnaviconactive:{
    width:100,
    height:50,
    backgroundColor:"white",
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:10,
    alignItems:"center",
    paddingTop:5
   },

   bottomnaviconout:{
    width:100,
    height:50,
    backgroundColor:"grey",
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:10,
    alignItems:"center",
    paddingTop:5
   },
   startstop:{
    display:"flex",
    flexDirection:"row",
    marginVertical:20
   },
   start:{
    color:"black",
    backgroundColor:"white",
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:20,
   // borderBottomLeftRadius:20,
   // borderTopLeftRadius:20,
    //marginRight:1
   },
   stop:{
    color:"black",
    backgroundColor:"white",
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:20,
   // borderBottomLeftRadius:20,
   // borderTopLeftRadius:20,
    marginLeft:1
   },
   reset:{
    color:"black",
    backgroundColor:"white",
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:20,
   // borderBottomLeftRadius:20,
   // borderTopLeftRadius:20,
    marginRight:1
   },
  });
  

export default Screen2
