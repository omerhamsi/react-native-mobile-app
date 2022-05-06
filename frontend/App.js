/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
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
import Home from './screens/Routers';
import axios from 'axios';
const App = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post('http://10.0.2.2:3000/login', {
        name: name,
        password: password,
      })
      .then(result => {
        if (result.data === 200) {
          alert('giriş başarılı');
          navigation.navigate("UserHome");
        } else {
          alert('böyle bir kullanıcı yok');
        }
      })
      .catch(result => {
        console.log(result);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
        placeholder={'name'}
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
        placeholder={'password'}
      />
      <TouchableOpacity onPress={() => handleLogin()} style={styles.loginbtn}>
        <Text style={{color: 'white'}}>GİRİŞ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
  },
  loginbtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: 300,
    height: 50,
    borderRadius: 15,
  },
});

export default App;
