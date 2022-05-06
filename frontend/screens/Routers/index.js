import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import App from "../../App"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserHome from "../UserHome";
import Admin from "../Admin";
import UserRoute from "../UserRoute";
import Chart from "../Chart";

const Routers = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={App} />
        <Stack.Screen name={'UserHome'} component={UserHome} />
        <Stack.Screen name={'Admin'} component={Admin} />
        <Stack.Screen name={'UserRoute'} component={UserRoute} />
        <Stack.Screen name={'Chart'} component={Chart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routers;
