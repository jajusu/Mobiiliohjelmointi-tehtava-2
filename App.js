import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';
let luku=Math.floor(Math.random() * 100) + 1;
let maara=0;
export default function App() {
  const [text, setText] = useState('');
  const [infoteksti, setInfo] = useState('Guess a number between 1 and 100');
  const [arvaus, setArvaus] = useState('0');

  const arvaa = () => { 
    if (arvaus==luku){
      maara++;
      Alert.alert('You guessed the number in ' + maara + ' guesses');
      setInfo("Guess a number between 1 and 100");
      setArvaus("");
      luku=Math.floor(Math.random() * 100) + 1;
      maara=0;
    }
    else if (arvaus>luku){
      setInfo("Your guess " + arvaus + " is too high.");
      maara++;
    }
    else if (arvaus<luku){
      setInfo("Your guess " + arvaus + " is too low.");
      maara++;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.teksti}> {infoteksti} </Text>
      <TextInput style={styles.input} 
        onChangeText={text => setArvaus(text)}
        value={arvaus}
        keyboardType={'numeric'}/>
      <Button onPress={arvaa} title="Make guess" />
      {/* <Text style={styles.teksti}>Oikea {luku} määrä {maara}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teksti:{
    width:250, 
    borderColor: 'gray', 
    margin: 5,
    textAlign: 'center'
  },
  input : {
    width:50  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    textAlign: 'center'
  }
});