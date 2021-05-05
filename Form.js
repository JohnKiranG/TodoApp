import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

class Form extends Component {    
    render() {
        const {iptChange, addTask } = this.props;
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Todo" 
                    onChangeText={iptChange}
                />
                <Button title="Add Todo" onPress={() => addTask()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '10%',
        alignItems: 'center'
    },  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      width: '80%',
      borderRadius: 5
    },
});

export default Form;