import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {Marker} from "react-native-maps";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";
const UserRoute=({route,navigation})=>{
  const {dataUser,exist}=route.params
  const [cityData,setcityData]=useState([])
  const [userRouteTest,setUserRouteTest]=useState([])
  useEffect(()=>{
    let data = [];
    let userDirection=[]
    axios.get('http://10.0.2.2:3000/getCity').then(result => {
      result.data.map(item => {
        //console.log(result);
        data.push(item);
      });
      setcityData(data);
      //console.log(cityData);
    });
    if(dataUser.length>0){
      dataUser.map((item)=>{
        console.log("lşömşö")
        userDirection.push(item)
      })
      let test=[]
      userDirection[0].map((item)=>{
        test.push(item)
      })
      setUserRouteTest(test)
      console.log("useroute")
      console.log(userRouteTest)
    }

  },[])
  return(
    <View>
      <Text>USerRoute</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width: '100%', height: 400}}
        region={{
          latitude: 40.7562,
          longitude: 29.8309,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {cityData.map(item => {
          return (
            <Marker
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
              image={{uri: 'custom_pin'}}
            />
          );
        })}
        {userRouteTest.length>=2 &&
          (
            <MapViewDirections
              origin={userRouteTest[0]}
              waypoints={ (userRouteTest.length > 2) ? userRouteTest.slice(1, -1): undefined}
              destination={userRouteTest[userRouteTest.length-1]}
              apikey={"AIzaSyDVWQYZhrkEc-PqWwWC5widzpBIdcTpBmw"}
              strokeColor="red"
              strokeWidth={4}
            />
          )
        }
        {!exist&&
        alert("herhangi bir araç tarafından alınmadınız")
        }
      </MapView>
    </View>
  )
}
export default UserRoute
