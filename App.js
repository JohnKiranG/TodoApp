import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './Header';
import Body from './Body';
import Form from './Form';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', backgroundColor: 'skyblue'}}>
        <Header/>
      </View>
      <View style={{flex: 1}}>
        <Form/>
      </View>
      <View style={{flex: 4}}>
        <Body/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },  
});
