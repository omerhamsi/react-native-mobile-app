import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View ,StyleSheet} from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';
import {Marker} from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';
import MapViewDirections from 'react-native-maps-directions';
import PickerComponent from '../../components/PickerComponent';
const Admin = ({route, navigation}) => {
  const {city} = route.params;
  const origin = {latitude: 40.7562, longitude: 29.8309};
  const destination = {latitude: 40.7764, longitude: 29.7377};
  let myArr=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"]
  const [cityData, setcityData] = useState([]);
  const [test, setTest] = useState([]);
  const [firstCar, setFirstCar] = useState([]);
  const [secondCar, setSecondCar] = useState([]);
  const [thirdCar, setThirdCar] = useState([]);
  let car1=[]
  let car2=[]
  let car3=[]
  const [selectedDarıcaValue, setSelectedDarıcaValue] = useState(0);
  const [selectedCayırovaValue, setSelectedCayırovaValue] = useState(0);
  const [selectedGebzeValue, setSelectedGebzeValue] = useState(0);
  const [selectedDilovasıValue, setSelectedDilovasıValue] = useState(0);
  const [selectedKörfezValue, setSelectedKörfezValue] = useState(0);
  const [selectedDerinceValue, setSelectedDerinceValue] = useState(0);
  const [selectedİzmitValue, setSelectedİzmitValue] = useState(0);
  const [selectedKandıraValue, setSelectedKandıraValue] = useState(0);
  const [selectedKartepeValue, setSelectedKartepeValue] = useState(0);
  const [selectedBaşiskeleValue, setSelectedBaşiskeleValue] = useState(0);
  const [selectedGölcükValue, setSelectedGölcükValue] = useState(0);
  const [selectedKaramürselValue, setSelectedKaramürselValue] = useState(0);
  let customers=[];
  useEffect(() => {
    let data = [];
    axios.get('http://10.0.2.2:3000/getCity').then(result => {
      result.data.map(item => {
        //console.log(result);
        data.push(item);
      });
      setcityData(data);
      //console.log(cityData);
    });
  }, []);

  const handleUserRoute=()=>{
    let userRouteData=[]
    let userTestData=[]
     cityData.map((item,index)=>{
       if(index===parseInt(city)){
         userTestData.push(item)
       }
     })
    firstCar.map((item)=>{
      if(item.latitude===userTestData[0].latitude && item.longitude===userTestData[0].longitude){
        alert("first car")
        userRouteData.push(firstCar)
        navigation.navigate("UserRoute",{
          dataUser:userRouteData,
          exist:true
        })
        return
      }
    })
    secondCar.map((item)=>{
      if(item.latitude===userTestData[0].latitude && item.longitude===userTestData[0].longitude){
        alert("second car")
        userRouteData.push(secondCar)
        navigation.navigate("UserRoute",{
          dataUser:userRouteData,
          exist:true
        })
        return
      }
    })
    thirdCar.map((item)=>{
      if(item.latitude===userTestData[0].latitude && item.longitude===userTestData[0].longitude){
        alert("third car")
        userRouteData.push(thirdCar)

        navigation.navigate("UserRoute",{
          dataUser:userRouteData,
          exist:true
        })
        return
      }
    })
    if(userRouteData.length<1){
      navigation.navigate("UserRoute",{
        dataUser:userRouteData,
        exist:false
      })
    }
    console.log(userRouteData)
  }

  const handleNumberCustomer=()=>{
    customers=[]
    car1=[]
    car2=[]
    car3=[]
    setFirstCar([])
    setSecondCar([])
    setThirdCar([])
    customers.push(parseInt(selectedDarıcaValue));
    customers.push(parseInt(selectedCayırovaValue));
    customers.push(parseInt(selectedGebzeValue))
    customers.push(parseInt(selectedDilovasıValue))
    customers.push(parseInt(selectedKörfezValue))
    customers.push(parseInt(selectedDerinceValue))
    customers.push(parseInt(selectedİzmitValue))
    customers.push(parseInt(selectedKandıraValue))
    customers.push(parseInt(selectedKartepeValue))
    customers.push(parseInt(selectedBaşiskeleValue))
    customers.push(parseInt(selectedGölcükValue))
    customers.push(parseInt(selectedKaramürselValue))
    axios.post('http://10.0.2.2:3000/getRoutes', {data: customers})
      .then((result)=>{
        //console.log(result)
        result.data[0].map((item)=>{
          car1.push(item)
        })
        result.data[1].map((item)=>{
          car2.push(item)
        })
        result.data[2].map((item)=>{
          car3.push(item)
        })
        setFirstCar(car1)
        setSecondCar(car2)
        setThirdCar(car3)
      })
      .catch((result)=>{

      })
    console.log(firstCar)
    console.log(secondCar)
    console.log(thirdCar)
    if(firstCar.length>0 && secondCar.length>0 && thirdCar.length>0){
      axios.post('http://10.0.2.2:3000/addRoute',{
        "firstCar":firstCar,
        "secondCar":secondCar,
        "thirdCar":thirdCar
      }).then((result)=>{
        console.log(result)
      })
    }
  }
  const handleChart=()=>{
    customers=[]
    car1=[]
    car2=[]
    car3=[]
    customers.push(parseInt(selectedDarıcaValue));
    customers.push(parseInt(selectedCayırovaValue));
    customers.push(parseInt(selectedGebzeValue))
    customers.push(parseInt(selectedDilovasıValue))
    customers.push(parseInt(selectedKörfezValue))
    customers.push(parseInt(selectedDerinceValue))
    customers.push(parseInt(selectedİzmitValue))
    customers.push(parseInt(selectedKandıraValue))
    customers.push(parseInt(selectedKartepeValue))
    customers.push(parseInt(selectedBaşiskeleValue))
    customers.push(parseInt(selectedGölcükValue))
    customers.push(parseInt(selectedKaramürselValue))
    axios.post("http://10.0.2.2:3000/chart",{data:customers})
      .then((result)=>{
        console.log(result)
        navigation.navigate("Chart",{
          data:result.data
        })
      })
      .catch((result)=>{
        console.log(result)
      })
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text>Admin Ekranı</Text>
        <Text>{city}</Text>
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
          {firstCar.length>=2 &&
            (
              <MapViewDirections
                origin={firstCar[0]}
                waypoints={ (firstCar.length > 2) ? firstCar.slice(1, -1): undefined}
                destination={firstCar[firstCar.length-1]}
                apikey={"AIzaSyDVWQYZhrkEc-PqWwWC5widzpBIdcTpBmw"}
                strokeColor="red"
                strokeWidth={4}
              />
            )
          }
          {secondCar.length>=2 &&
            (
              <MapViewDirections
                origin={secondCar[0]}
                waypoints={ (secondCar.length > 2) ? secondCar.slice(1, -1): undefined}
                destination={secondCar[secondCar.length-1]}
                apikey={"AIzaSyDVWQYZhrkEc-PqWwWC5widzpBIdcTpBmw"}
                strokeColor="blue"
                strokeWidth={3}
              />
            )
          }
          {thirdCar.length>=2 &&
            (
              <MapViewDirections
                origin={thirdCar[0]}
                waypoints={ (thirdCar.length > 2) ? thirdCar.slice(1, -1): undefined}
                destination={thirdCar[thirdCar.length-1]}
                apikey={"AIzaSyDVWQYZhrkEc-PqWwWC5widzpBIdcTpBmw"}
                strokeColor="black"
                strokeWidth={3}
              />
            )
          }
        </MapView>
        <Text>Darıca</Text>
        <Picker
          selectedValue={selectedDarıcaValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedDarıcaValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Çayırova</Text>
        <Picker
          selectedValue={selectedCayırovaValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedCayırovaValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Gebze</Text>
        <Picker
          selectedValue={selectedGebzeValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedGebzeValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>dilovası</Text>
        <Picker
          selectedValue={selectedDilovasıValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedDilovasıValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Körfez</Text>
        <Picker
          selectedValue={selectedKörfezValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedKörfezValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Derince</Text>
        <Picker
          selectedValue={selectedDerinceValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedDerinceValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>İzmit</Text>
        <Picker
          selectedValue={selectedİzmitValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedİzmitValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Kandıra</Text>
        <Picker
          selectedValue={selectedKandıraValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedKandıraValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Kartepe</Text>
        <Picker
          selectedValue={selectedKartepeValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedKartepeValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Başiskele</Text>
        <Picker
          selectedValue={selectedBaşiskeleValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedBaşiskeleValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Gölcük</Text>
        <Picker
          selectedValue={selectedGölcükValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedGölcükValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <Text>Karamürsel</Text>
        <Picker
          selectedValue={selectedKaramürselValue}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedKaramürselValue(itemValue)}>
          {myArr.map((item)=>{
            return(
              <Picker.Item label={item} value={item} />
            )
          })}

        </Picker>
        <TouchableOpacity onPress={()=>handleNumberCustomer()} style={{backgroundColor:"red",width:250,height:50,borderRadius:10}}>
          <Text>Gönder</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handleUserRoute()} style={{marginTop:30,backgroundColor:"blue",width:250,height:50,borderRadius:10}}>
          <Text style={{color:"white"}}>User Route</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.touch} onPress={()=>handleChart()}>
          <Text>GRAFİK</Text>
        </TouchableOpacity>
        <Text>DLSAÖDŞAS</Text>
        <Text>DLSAÖDŞAS</Text>
        <Text>DLSAÖDŞAS</Text>


      </ScrollView>
    </SafeAreaView>
  );
};
const style=StyleSheet.create({
  touch:{
    backgroundColor:"red",
    width:300,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginTop:20
  }
})
export default Admin;
/*
* <MapViewDirections
                    origin={firstCar[0]}
                    waypoints={ (firstCar.length > 2) ? firstCar.slice(1, -1): undefined}
                    destination={firstCar[firstCar.length-1]}
                    apikey={"AIzaSyDVWQYZhrkEc-PqWwWC5widzpBIdcTpBmw"}
                    strokeColor="red"
                    strokeWidth={3}
                  />*/
