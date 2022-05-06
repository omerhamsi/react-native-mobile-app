import React, {useState} from 'react';
import { Text, View ,StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';

const PickerComponent = ({name,valueChange}) => {
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <View>
      <Text style={{marginRight: 20}}>{name}</Text>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 100}}
        onValueChange={valueChange}>
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />

      </Picker>
    </View>
  );
};
const style=StyleSheet.create({
  picker:{
    flexDirection:"row"
  }
})
export default PickerComponent;
