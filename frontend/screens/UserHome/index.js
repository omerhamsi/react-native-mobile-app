import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {Picker} from '@react-native-picker/picker';
const UserHome = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleSubmit = () => {
    navigation.navigate('Admin', {
      city: selectedValue,
    });
  };
  return (
    <View style={style.container}>
        <Text style={style.text}>Lütfen bineceğiniz durağı seçiniz</Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            alert(itemValue)
            //Ba¸siskele, C¸ ayırova, Darıca, Derince, Dilovası, Gebze, G¨olc¨uk, Kandıra, Karam¨ursel,
            // Kartepe, K¨orfez, ˙Izmit

          }}>
          <Picker.Item label="Darıca" value="0" />
          <Picker.Item label="Çayırova" value="1" />
          <Picker.Item label="Gebze" value="2" />
          <Picker.Item label="Dilovası" value="3" />
          <Picker.Item label="Körfez" value="4" />
          <Picker.Item label="Derince" value="5" />
          <Picker.Item label="İzmit" value="6" />
          <Picker.Item label="Kou" value="7" />
          <Picker.Item label="Kandıra" value="8" />
          <Picker.Item label="Kartepe" value="9" />
          <Picker.Item label="Başiskele" value="10" />
          <Picker.Item label="Gölcük" value="11" />
          <Picker.Item label="Karamürsel" value="12" />
        </Picker>
        <TouchableOpacity style={style.offer} onPress={() => handleSubmit()}>
          <Text style={{color: 'white', fontSize: 15}}>TALEP GÖNDER</Text>
        </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  offer: {
    width: 300,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default UserHome;
