import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter Todo" />
                <Button title="Add" onPress={() => alert('Simple Button pressed')}/>
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