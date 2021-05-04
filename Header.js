import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.label}>Todo App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    label: {
        fontWeight: 'bold',
        fontSize: 35,
        padding: 30
    },     
});

export default Header;