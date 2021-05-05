import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './Header';
import Body from './Body';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      list: [
        {task: 'Learn ES 6'},
        {task: 'Learn React Js'},
        {task: 'Learn React Native'},
        {task: 'Learn Redux'},                       
      ]
    }
  }

  iptChange = (value) => {
    this.setState({todo:value})
  }

  addTask = () => {    
    const { todo, list } = this.state;
    if(todo != "") {
      let obj = { task: todo};
      let newList = Object.assign([], list);
      newList.push(obj);
      this.setState({list: newList});
    } else {
      alert("Please enter a Todo.");
    }
  }

  render() {
    const  { list } = this.state;
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', backgroundColor: 'skyblue'}}>
          <Header/>
        </View>
        <View style={{flex: 1}}>
          <Form iptChange={this.iptChange} addTask={this.addTask}/>
        </View>
        <View style={{flex: 4}}>
          <Body list={list}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },  
});

export default App;