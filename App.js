import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [result, setResult] = useState("");

  const sum = () => {
    setResult(Number(text) + Number(text1));
  }

  const minus = () => {
    setResult(text - text1);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style ={{width: 200, borderColor: 'grey', borderWidth: 1, margin: 10}}
        keyboardType ={'numeric'}
        onChangeText={text=> setText(text)}
        value={text}
        />
        <TextInput
        style ={{width: 200, borderColor: 'grey', borderWidth: 1, margin: 10}}
        keyboardType ={'numeric'}
        onChangeText={text1=> setText1(text1)}
        value={text1}
        />
      
    <View style={{ flexDirection:"row" }}>
    <View style={styles.buttonStyle}>
      <Button 
        title='+'
        onPress = {sum}/>
    </View>
    <View style={styles.buttonStyle}>
      <Button 
        title='-'
        onPress = {minus}/>
    </View>
    </View>
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
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5
  }
});
