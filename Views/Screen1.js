import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Screen1 = ({navigation}) => {
    const [hour,setHour] = useState('00');
    const [minute,setMinute] = useState('00');
   // const [second,setSeconds] = useState('00'); 
    const [amPm,setAmPm] = useState('AM');

    useEffect(()=>{
        getHour();
        getMinute();
        //getSecond();
        getAmPm();
    },[])

    const getHour = () => {
        const date = new Date();
        let hour = date.getHours();
        hour = hour % 12 || 12; // Converts 0-23 to 12-hour format, and makes sure 0 is shown as 12.
        hour < 10 ? setHour('0' + hour) : setHour(hour.toString());
    };
    
    const getMinute = ()=>{
        const date = new Date();
        const minute = date.getMinutes();
        minute < 10 ? setMinute('0'+ minute): setMinute(minute)
        //console.log(minute);
        //setMinute(minute);
    }
  //  const getSecond = ()=>{
  //      const date = new Date();
  //      const second = date.getSeconds();
  //      second < 10 ? setSeconds('0'+ second) : setSeconds(second)
  //      //console.log(minute);
  //      //setSeconds(second);
  //  }

    const getAmPm = () =>{
        const date = new Date();
        const  amPm = date.getHours() >= 12 ? 'PM' : 'AM';
        setAmPm(amPm);
    }




   setInterval(() => {
        getHour();
        getMinute();
        //getSecond();
        getAmPm();
   }, 1000);

   const showPage = (page)=>{
    navigation.navigate(page)
   }

  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.minute}>{minute}</Text>      
      <Text style={styles.ampm}>{amPm}</Text>
      {/*<Text style={styles.second}>{second}</Text>*/}


    <View style={styles.bottomnav}>
        <TouchableOpacity style={styles.bottomnaviconactive} onPress={()=>{showPage('s1')}}>
            {/*<Text style={styles.bottomnavtext}>+</Text>*/}
            <Image source={require('../assets/clock.png')} style={styles.bottomnavicon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomnaviconout} onPress={()=>{showPage('s2')}}>
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
    hour:{
        color:"white",
        fontSize:220,
        fontWeight:"bold",
        lineHeight:220,
    },
    minute:{
        color:"grey",
        fontSize:220,
        fontWeight:"bold",
        lineHeight:220,
    },
    ampm:{
        color:"white",
        fontSize:170,
        fontWeight:"bold",
        lineHeight:170,
    },
   // second:{
   //     color:"white",
   //     fontSize:190,
   //     fontWeight:"bold",
   //     lineHeight:190,
   // },
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
  });
  

export default Screen1
